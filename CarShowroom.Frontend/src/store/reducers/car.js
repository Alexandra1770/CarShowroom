import { GET_CARS, ADD_CAR, EDIT_CAR, DELETE_CAR } from "../actions/car";

const initialState = {
    cars: []
}

const reducersCars = (state = initialState, action) => {

    switch (action.type) {
        case GET_CARS:
            console.log('action.payload!!!!!!!!!!!!!!', action.payload);
            return {
                ...state,
                cars: action.payload,
            };
        case ADD_CAR:
            return {
                ...state,
                cars: state.cars.concat(action.payload),
            };
        case DELETE_CAR:
            return {
                ...state,
                cars: state.cars.filter(item => item.registryNumber !== action.payload),
            };
        case EDIT_CAR:
            const carEditNew = state.cars.map(item => {
                if(item.registryNumber === action.payload.registryNumber) {
                    return action.payload;
                }
                return item;
            });
            return { ...state, cars: carEditNew};
        default: return state;
    }
}
export default reducersCars;
