export const GET_CARS = 'GET_CARS';
export const ADD_CAR = 'ADD_CAR';
export const EDIT_CAR = 'EDIT_CAR';
export const DELETE_CAR = 'DELETE_CAR';

const getRandomId = () => {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < 4; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
};

export const getCars = cars => ({
    type: GET_CARS,
    payload: cars,
});
export const addCar = (cars) => {
    return {
        type: 'ADD_CAR',
        payload: {
            ...cars,
            registryNumber: getRandomId(),
        },
    };
};
export const editCar = values => ({
    type: 'EDIT_CAR',
    payload: values,
});
export const deleteCar = registryNumber => ({
    type: 'DELETE_CAR',
    payload: registryNumber,
});

