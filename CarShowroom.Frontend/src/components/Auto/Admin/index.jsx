import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './index.css';
import ListCar from '../ListCar';
import DetailModal from "../ModalMore";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';


import CreateFormAuto  from '../Forms/CreateFormAuto'
import EditFormAuto from "../Forms/EditFormAuto";

/*import { getCars, createCar } from '../../../utils/auto';*/
import { getCars, addCar, editCar, deleteCar } from "../../../store/actions/car";
import CarsMock from '../../../utils/auto';

class Admin extends Component {
    state = {
        carData: [],
        isOpen: false,
        isOpenEdit: false,
        isOpenMore: false,
        detailCar: null
    }

    componentDidMount() {
        /*getCars.then(res => {
            this.setState({ carData: res.data });
        });*/
        /*this.setState({ carData: CarsMock });*/
        const { getCars } = this.props;
        getCars(CarsMock);
    }

    handleClickOpen = () => {
        const { cars } = this.props;
        console.log('cars', cars);
        this.setState({ isOpen: true });
    };
    handleClose = () => {
        this.setState({ isOpen: false });
    };
    submitCreateCar = values => {
        console.log('values', values)
        /*createCar(values).then(res => {
            this.setState(state => ({
                clinicData: state.carData.concat({
                    ...values,
                    registryNumber: res.data
                }),
                isOpen: false
            }));
        });*/
        /*this.setState(state => ({       //для мокк
            carData: state.carData.concat({values}),
            isOpen: false
        }));*/
        const { addCar } = this.props;
        addCar(values);
        this.setState({ isOpen: false });
    };
    handleClickEditOpen = registryNumber => {
        const { cars } = this.props;
        this.setState({
            isOpenEdit: true,
            detailCar: cars.find((o) => {
                return (
                    o.registryNumber === registryNumber
                );
            }),
        });
        /*console.log('registryNumber', registryNumber);
        const { carData } = this.state;
        const idx = carData.findIndex(el => el.registryNumber === registryNumber);
        console.log('carData[idx]', carData[idx]);
        this.setState({ isOpenEdit: true, detailCar: carData[idx] });*/
    };
    handleEditClose = () => {
        this.setState({ isOpenEdit: false, detailCar: {} });
    };
    ////////////////////////////////////////////////////////////////////////////Редактировать
    submitEditCar = values => {
        const { editCar } = this.props;
        editCar(values);
        setTimeout(() => this.setState({ isOpenEdit: false }), 0);
        /*const { carData } = this.state;

        const carDataNew = carData.map(item => {
            if (item.registryNumber === values.registryNumber) {
                return values;
            }
            return item;
        });
        this.setState(state => ({   //для мокк
            ...state,
            carData: carDataNew,
            isOpenEdit: false
        }));*/

        /*editCar(values).then(res => {
            this.setState(state => ({
                ...state,
                carData: carDataNew,
                isOpenEdit: false
            }));
        });*/
    };

    handleClickOpenMore = registryNumber => {
        console.log('more', registryNumber);
        const { /*carData*/ cars} = this.props;
        console.log('CARS', cars)
        /*const idx = cars.findIndex(el => el.registryNumber === registryNumber);*/
        this.setState({ isOpenMore: true, detailCar: cars.find(o => o.registryNumber === registryNumber),
        });
        console.log('detailCar', this.state.detailCar)
    };

    handleCloseMore = () => {
        this.setState({ isOpenMore: false });
    };
    handleDeleteItem = registryNumber => {
        /*removeClinics(registryNumber).then(res => {
            this.setState(({ carData }) => {
                const idx = carData.findIndex(el => el.registryNumber === registryNumber);

                const before = carData.slice(0, idx);
                const after = carData.slice(idx + 1);
                const newArray = [...before, ...after];
                return { carData: newArray };
            });
        });*/
        /*this.setState(({ carData }) => {
            const idx = carData.findIndex(el => el.registryNumber === registryNumber);  //для мокк

            const before = carData.slice(0, idx);
            const after = carData.slice(idx + 1);
            const newArray = [...before, ...after];
            return { carData: newArray };
        });*/
        const { deleteCar } = this.props;
        deleteCar(registryNumber);
    };

    render() {
    const { cars } = this.props;
    const { /*carData,*/ isOpen, isOpenEdit, isOpenMore, detailCar } = this.state;
        return (
                <Fragment>
                    <button className="add" onClick={this.handleClickOpen}>
                        Добавить автомобиль
                    </button>
                    <CreateFormAuto
                        open={isOpen}
                        onSubmit={this.submitCreateCar}
                        handleClose={this.handleClose}
                        onClose={this.handleClose}
                        /*handleClickOpen={this. handleClickOpenAdd}*/
                    />
                    {/*<Dialog
                        open={isOpen}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                            <DialogTitle id="alert-dialog-title">Добавить автомобиль</DialogTitle>
                            <CreateFormAuto onSubmit={this.submitCreateCar} handleClose={this.handleClose} />
                    </Dialog>*/}
                        <ListCar
                            data={ cars }
                            handleClickEditOpen={this.handleClickEditOpen}
                            onDeleted={this.handleDeleteItem}
                            handleClickOpenMore={this.handleClickOpenMore}
                        />

                    <Dialog
                        open={isOpenEdit}
                        handleClose={this.handleEditClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >

                            <EditFormAuto
                                onSubmit={this.submitEditCar}
                                handleClose={this.handleEditClose}
                                initialValues={detailCar}
                            />
                    </Dialog>

                    {/*Модалка подробнее*/}

                    <DetailModal
                        isOpen={isOpenMore}
                        handleClose={this.handleCloseMore}
                        data={detailCar !== null ? detailCar : { color: 'Error', brand: 'Error', producer: 'Error', id: 0 }}
                    />
                </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return(
        {
            cars: state.reducersCars.cars,
        }
    )
}

const mapDispatchToProps = dispatch => ({
    getCars: (cars) => dispatch(getCars(cars)),
    addCar: (cars) => dispatch(addCar(cars)),
    editCar: (cars) => dispatch(editCar(cars)),
    deleteCar: (registryNumber) => dispatch(deleteCar(registryNumber))

});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
