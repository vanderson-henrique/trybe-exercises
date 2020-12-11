export const AUTHENTICATE = 'AUTHENTICATE';

export const authAction = (username, password) => ({
    type: AUTHENTICATE,
    payload: {
        username,
        password,
    }
})

