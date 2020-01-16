import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './index.css';

import ListUser from '../ListUser';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import CreateFormUser  from '../Forms/CreateFormUser'
import EditFormUser from "../Forms/EditFormUser";

import { getCars, createCar } from '../../../utils/auto';
import UsersMock from '../../../utils/users';

class AdminUsers extends Component {
    state = {
        userData: [],
        isOpen: false,
        isOpenEdit: false,
        isOpenMore: false,
        detailUser: {}
    }

    componentDidMount() {
        /*getCars.then(res => {
            this.setState({ carData: res.data });
        });*/
        this.setState({ userData: UsersMock });
    }

    handleClickOpen = () => {
        this.setState({ isOpen: true });
    };
    handleClose = () => {
        this.setState({ isOpen: false });
    };
    submitCreateUser = values => {
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
        this.setState(state => ({       //для мокк
            userData: state.userData.concat({values}),
            isOpen: false
        }));
    };
    handleClickEditOpen = id => {
        console.log('registryNumber', id);
        const { userData } = this.state;
        const idx = userData.findIndex(el => el.id === id);
        console.log('userData[idx]', userData[idx]);
        this.setState({ isOpenEdit: true, detailUser: userData[idx] });
    };
    handleEditClose = () => {
        this.setState({ isOpenEdit: false, detailUser: {} });
    };
    submitEditUser = values => {
        const { userData } = this.state;

        const userDataNew = userData.map(item => {
            if (item.id === values.id) {
                return values;
            }
            return item;
        });
        this.setState(state => ({   //для мокк
            ...state,
            userData: userDataNew,
            isOpenEdit: false
        }));

        /*editCar(values).then(res => {
            this.setState(state => ({
                ...state,
                carData: carDataNew,
                isOpenEdit: false
            }));
        });*/
    };

    handleClickOpenMore = id => {
        console.log('more', id);
        const { userData } = this.state;
        const idx = userData.findIndex(el => el.id === id);
        this.setState({ isOpenMore: true, detailUser: userData[idx] });
    };

    handleCloseMore = () => {
        this.setState({ isOpenMore: false, detailUser: {} });
    };
    handleDeleteItem = id => {
        /*removeClinics(registryNumber).then(res => {
            this.setState(({ carData }) => {
                const idx = carData.findIndex(el => el.registryNumber === registryNumber);

                const before = carData.slice(0, idx);
                const after = carData.slice(idx + 1);
                const newArray = [...before, ...after];
                return { carData: newArray };
            });
        });*/
        this.setState(({ userData }) => {
            const idx = userData.findIndex(el => el.id === id);  //для мокк

            const before = userData.slice(0, idx);
            const after = userData.slice(idx + 1);
            const newArray = [...before, ...after];
            return { userData: newArray };
        });
    };

    render() {
    const { userData, isOpen, isOpenEdit, isOpenMore, detailUser } = this.state;
        return (
                <Fragment>
                    <button className="add" onClick={this.handleClickOpen}>
                        Добавить пользователя
                    </button>
                    <Dialog
                        open={isOpen}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                            <DialogTitle id="alert-dialog-title">Добавить пользователя</DialogTitle>
                            <CreateFormUser onSubmit={this.submitCreateUser} handleClose={this.handleClose} />
                    </Dialog>

                    <ListUser
                        data={ userData }
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
                            <DialogTitle id="alert-dialog-title">
                                Редактировать данные о пользователе
                            </DialogTitle>
                            <EditFormUser
                                onSubmit={this.submitEditUser}
                                handleClose={this.handleEditClose}
                                initialValues={detailUser}
                            />
                    </Dialog>

                    {/*Модалка подробнее*/}
                    <Dialog
                        open={isOpenMore}
                        handleClose={this.handleCloseMore}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {detailUser.fullName && detailUser.fullName}
                        </DialogTitle>
                        <DialogContent style={{ width: 200, marginBottom: 15 }}>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Дата рождения:
                                {detailUser.birthday && detailUser.birthday}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Адрес:
                                {detailUser.address && detailUser.address}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Электронная почта:
                                {detailUser.email && detailUser.email}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Номер телефона:
                                {detailUser.phone && detailUser.phone}
                            </Typography>
                        </DialogContent>
                        <Button onClick={this.handleCloseMore} color="primary" autoFocus>
                            Закрыть
                        </Button>
                    </Dialog>

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
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers);
