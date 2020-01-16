export const DELETE_ORDER = 'DELETE_ORDER';

export const EDIT_ORDER = 'EDIT_ORDER';

export const GET_ORDER = 'GET_ORDER';

export const ADD_ORDER = 'ADD_ORDER';

export const deleteOrder = (guid) => ({ type: DELETE_ORDER, payload: guid });

export const getOrder = (order) => {
    console.log('users', order);
    return{  type: 'GET_ORDER',
        payload: order,
    }

};
export const editOrder = (order) => ({
    type: 'EDIT_ORDER',
    payload: order,
});
export const addOrder = (order) => {
    return {
        type: 'ADD_ORDER',
        payload: order,
    };
};
