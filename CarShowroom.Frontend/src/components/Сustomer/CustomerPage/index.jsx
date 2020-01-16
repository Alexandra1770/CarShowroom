import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
/*import './index.css';*/

import ListCar from '../ListCar';
import FullScreenDialog from "../Basket";

import CarsMock from '../../../utils/auto';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import {addOrder} from "../../../store/actions/order";
import {addUser} from "../../../store/actions/user";
import {getCars} from "../../../store/actions/car";


class CustomerPage extends Component {
    state = {
        carData: [],
        isOpenMore: false,
        isOpenBasket: false,
        currentProducts: {},
        detailCar: {},
        basket:[],
        totalCost: 0,
    };

    componentDidMount() {
        /*getCars.then(res => {
            this.setState({ carData: res.data });
        });*/
        /*this.setState({ carData: CarsMock });*/
        const { getCars } = this.props;
        getCars(CarsMock);
    }

    handleClickAddToBasket= (registryNumber) =>{
        console.log('regnumBasket', registryNumber);
        console.log('basket', this.state.basket)
        const { carData } = this.state;
        const { cars } = this.props;
        const values = cars.find((el) => el.registryNumber === registryNumber);
        console.log('values', values)
        this.setState(state => ({
            basket: state.basket.concat({
                ...values
            }),
            totalCost: state.totalCost + values.price
        }));
    };

    handleClickOpenBasket = () => {
        this.setState({ isOpenBasket: true });
    };
    handleCloseBasket = () => {
        this.setState({ isOpenBasket: false });
    };
    handleClickOpenMore = registryNumber => {
        console.log('more', registryNumber);
        const { cars } = this.props;
        const { carData } = this.state;

        const idx = cars.findIndex(el => el.registryNumber === registryNumber);
        this.setState({ isOpenMore: true, detailCar: cars[idx] });
    };

    handleCloseMore = () => {
        this.setState({ isOpenMore: false, detailCar: {} });
    };

    handleClickDelete=(tmp)=>{
        console.log('this.state.basket1',this.state.basket);

        console.log('tmp',tmp);
        const values = this.state.basket.find((el, index) => index === tmp);
        const before = this.state.basket.slice(0, tmp);
        const after = this.state.basket.slice(tmp+1);
        const newArray = [...before, ...after];
        console.log('newArray ',newArray );
        console.log('values00000000000000000',values );
        // console.log('values.price ',values.price);
        // console.log('this.state.basket11',this.state.basket);
        this.setState(state => ({
            basket: newArray,
            totalCost: state.totalCost - values.price
        }));
    };

    handleSubmitBuy = (values) => {
        console.log('values7777777777777777777777777777777777777777777777777777777777',values);
        const { addUser } = this.props;
        const { addOrder } = this.props;
        const today = new Date();
        const fullName = {fullName: values.fullName};
        const address = {address: values.address};
        const phone = {phone: values.phone};
        const email = {email: values.email};
        const currentStatus = {currentStatus: values.currentStatus};
        const dateTimeOrder = {dateTimeOrder: today.toISOString()};
        const testDrive = {testDrive: values.testDrive};
        const totalCost={totalCost: this.state.totalCost};
        const idOrder={id: '6cd14088-2417-4905-a683-'+`f${(+new Date()).toString(16)}`};
        const numberOrder={numberOrder: '6cd14088-2417-4905-a683-'+`f${(+new Date()).toString(16)}`};
        const guidClient={id: '770306de-49a1-4be1-9338-'+`f${(+new Date()).toString(16)}`};
        const idClient = {id: guidClient.id};
        /*const goods={goodsGuids: this.state.basket.map(function(el) {
                return el.guid;
            })};*/
        const order = {};
        const client = {};

        Object.assign(order, currentStatus, idOrder, numberOrder, testDrive, dateTimeOrder, fullName, totalCost);
        Object.assign(client, idClient, fullName, address, phone, email);
        addUser(client);
        addOrder(order);
        this.setState({isOpenBasket: false});
    };

    render() {
        const { cars } = this.props;
        const { carData, isOpenBasket, isOpenMore, detailCar, basket, totalCost } = this.state;
        return (
            <Fragment>
                <button className="add" onClick={this.handleClickOpenBasket}>
                    Корзина
                </button>
                <ListCar
                    data={ /*carData*/ cars }
                    handleClickAddToBasket={this.handleClickAddToBasket}
                    handleClickOpenMore={this.handleClickOpenMore}
                />
                <FullScreenDialog
                    open={isOpenBasket}
                    handleClickOpen={isOpenBasket}
                    totalCost={totalCost}
                    basket={basket}
                    onSubmit={this.handleSubmitBuy}
                    handleClose={this.handleCloseBasket}
                    handleClickDelete={this.handleClickDelete}
                />

                {/*Модалка подробнее*/}
                <Dialog
                    open={isOpenMore}
                    handleClose={this.handleCloseMore}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {detailCar.mark && detailCar.mark}
                    </DialogTitle>
                    <DialogContent style={{ width: 300, marginBottom: 15 }}>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Коробка передач:
                            {detailCar.automaticTransmission && detailCar.automaticTransmission}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Цвет:
                            {detailCar.color && detailCar.color}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Цена:
                            {detailCar.price && detailCar.price}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Год выпуска:
                            {detailCar.year && detailCar.year}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Производитель:
                            {detailCar.manufacturer && detailCar.manufacturer}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Количество дверей:
                            {detailCar.doorsNumber && detailCar.doorsNumber}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Топливо:
                            {detailCar.fuel && detailCar.fuel}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Мощность двигателя:
                            {detailCar.enginePower && detailCar.enginePower}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Расход топлива:
                            {detailCar.fuelConsumption && detailCar.fuelConsumption}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Количество посадочных мест:
                            {detailCar.seatsNumber && detailCar.seatsNumber}
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
    console.log('store', state.reducersCars.cars)
    return(
        {
            cars: state.reducersCars.cars,
        }
    )
}

const mapDispatchToProps = dispatch => ({
    getCars: (cars) => dispatch(getCars(cars)),
    addUser: (user) => dispatch(addUser(user)),
    addOrder: (order) => dispatch(addOrder(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerPage);
