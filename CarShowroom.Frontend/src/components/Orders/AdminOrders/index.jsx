import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './index.css';

import ListOrder from '../ListOrders';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import EditFormOrder from "../Forms/EditFormOrder";

import { getCars, createCar } from '../../../utils/auto';
import OrderMock from '../../../utils/orders';

class AdminOrders extends Component {
    state = {
        orderData: [],
        isOpen: false,
        isOpenEdit: false,
        isOpenMore: false,
        detailOrder: {}
    }

    componentDidMount() {
        /*getCars.then(res => {
            this.setState({ carData: res.data });
        });*/
        this.setState({ orderData: OrderMock });
    }

    handleClickEditOpen = id => {
        console.log('registryNumber', id);
        const { orderData } = this.state;
        const idx = orderData.findIndex(el => el.id === id);
        console.log('orderData[idx]', orderData[idx]);
        this.setState({ isOpenEdit: true, detailOrder: orderData[idx] });
    };
    handleEditClose = () => {
        this.setState({ isOpenEdit: false, detailOrder: {} });
    };
    submitEditOrder = values => {
        const { orderData } = this.state;

        const orderDataNew = orderData.map(item => {
            if (item.id === values.id) {
                return values;
            }
            return item;
        });
        this.setState(state => ({   //для мокк
            ...state,
            orderData: orderDataNew,
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
        const { orderData } = this.state;
        const idx = orderData.findIndex(el => el.id === id);
        this.setState({ isOpenMore: true, detailOrder: orderData[idx] });
    };

    handleCloseMore = () => {
        this.setState({ isOpenMore: false, detailOrder: {} });
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
        this.setState(({ orderData }) => {
            const idx = orderData.findIndex(el => el.id === id);  //для мокк

            const before = orderData.slice(0, idx);
            const after = orderData.slice(idx + 1);
            const newArray = [...before, ...after];
            return { orderData: newArray };
        });
    };

    render() {
    const { orderData, isOpenEdit, isOpenMore, detailOrder } = this.state;
        return (
                <Fragment>
                    <ListOrder
                        data={ orderData }
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
                                Редактировать заказ
                            </DialogTitle>
                            <EditFormOrder
                                onSubmit={this.submitEditOrder}
                                handleClose={this.handleEditClose}
                                initialValues={detailOrder}
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
                            Номер заказа {detailOrder.numberOrder && detailOrder.numberOrder}
                        </DialogTitle>
                        <DialogContent style={{ width: 200, marginBottom: 15 }}>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Дата оформления:
                                {detailOrder.dateTimeOrder && detailOrder.dateTimeOrder}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Нужен ли тест-драйв:
                                {detailOrder.testDrive && detailOrder.testDrive}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Текущий статус:
                                {detailOrder.currentStatus && detailOrder.currentStatus}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Общая стоимость:
                                {detailOrder.totalCost && detailOrder.totalCost}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                ФИО покупателя:
                                {detailOrder.fullNameClient && detailOrder.fullNameClient}
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminOrders);
