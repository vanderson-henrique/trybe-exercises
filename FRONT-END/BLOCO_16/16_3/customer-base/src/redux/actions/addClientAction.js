export const ADD_CLIENT = 'ADD_CLIENT';
export const REMOVE_CLIENT = 'REMOVE_CLIENT';

export const addClientAction = (name, age, email) => ({
    type: ADD_CLIENT,
    client: {
        name,
        age,
        email,
    }
})

export const removeClientAction = (name) => ({
    type: REMOVE_CLIENT,
    name,
})