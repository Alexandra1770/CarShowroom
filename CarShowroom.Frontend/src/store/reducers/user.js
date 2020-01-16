import {
    DELETE_USER, GET_USER, ADD_USER, EDIT_USER,
} from '../actions/user';

const initialState = {
    data: [],
};

export default (state = initialState, action) => {
    console.log('action.payload1',action.payload);
    switch (action.type) {
        case GET_USER:
            return { data: action.payload };

        case ADD_USER:
            console.log('action.payload2',action.payload);
            return {
                ...state,
                data: state.data.concat(action.payload),
            };

        case DELETE_USER:
            return {
                ...state,
                data: state.data.filter((el) => el.guid !== action.payload),
            };

        case EDIT_USER:
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
