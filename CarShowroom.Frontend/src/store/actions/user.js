export const DELETE_USER = 'DELETE_USER';

export const EDIT_USER = 'EDIT_USER';

export const GET_USER = 'GET_USER';

export const ADD_USER = 'ADD_USER';

export const deleteUser = (guid) => ({ type: DELETE_USER, payload: guid });

export const getUser = (user) => {
    console.log('users', user);
    return{  type: 'GET_USER',
        payload: user,
    }

};
export const editUser = (user) => ({
    type: 'EDIT_USER',
    payload: user,
});
export const addUser = (user) => {
    console.log('users777777777',user);
    return {
        type: 'ADD_USER',
        payload: user
    };
};
