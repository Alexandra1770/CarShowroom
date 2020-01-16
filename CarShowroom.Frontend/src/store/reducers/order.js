import {
    DELETE_ORDER, ADD_ORDER, GET_ORDER, EDIT_ORDER,
} from '../actions/order';

const initialState = {
    data: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER:
            return { data: action.payload };

        case ADD_ORDER:
            return {
                ...state,
                data: state.data.concat(action.payload),
            };

        case DELETE_ORDER:
            return {
                ...state,
                data: state.data.filter((el) => el.guid !== action.payload),
            };

        case EDIT_ORDER:
            const newArray1 = state.data.map((element) => {
                if (element.guid === action.payload.guid) {
                    return action.payload;
                }
                return element;
            });
            return { ...state, data: newArray1 };


        default:
            return state;
    }
};
