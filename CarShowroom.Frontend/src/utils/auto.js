import axios from 'axios';
import { URL } from '../constants';


/*export const getCars = axios.get(`${URL}/CarShowroom/Car/GetAll`,{headers: {'Access-Control-Allow-Origin': '*'}});
export const createCar = values => axios.post(`${URL}/CarShowroom/Car`, values);*/


export default [
    {
        registryNumber: 1,
        color: 'white',
        price: 800000,
        year: '2018',
        manufacturer: 'kia',
        automaticTransmission: 'коробка автомат',
        doorsNumber: '5',
        fuel: 'АИ-95',
        enginePower: '102 л.с.',
        fuelConsumption: '9.1 л/100км',
        brand: 'soul',
        seatsNumber: '5',
    },
    {
        registryNumber: 2,
        color: 'black',
        price: 700000,
        year: '2019',
        manufacturer: 'Volkswagen',
        automaticTransmission: 'коробка автомат',
        doorsNumber: '5',
        fuel: 'АИ-92',
        enginePower: '150 л.с.',
        fuelConsumption: '6.8 л/100км',
        brand: 'polo',
        seatsNumber: '5',
    }
]
