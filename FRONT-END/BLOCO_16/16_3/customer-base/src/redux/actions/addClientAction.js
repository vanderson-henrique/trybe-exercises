export const ADD_CLIENT = 'ADD_CLIENT';

export const addClientAction = (name, age, email) => ({
    type: ADD_CLIENT,
    client: {
        name,
        age,
        email,
    }
})