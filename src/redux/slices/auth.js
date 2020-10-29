import {
    createSlice
} from '@reduxjs/toolkit'
import jwt_decode from 'jwt-decode'

const initialUser = localStorage.getItem('jwtToken') 
                    ? jwt_decode(localStorage.getItem('jwtToken'))
                    : null

const userSlice = createSlice({
    name: 'auth',
    initialState: {
        user: initialUser
    },

    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload
        },
        logoutSuccess: (state, action) => {
            state.user = null
        }
    }
})

export default userSlice.reducer


const {
    loginSuccess,
    logoutSuccess
} = userSlice.actions

export const login = (jwtToken) => async dispatch => {
    try {
        localStorage.setItem('jwtToken', jwtToken)
        const decoded = jwt_decode(jwtToken)
        dispatch(loginSuccess(decoded))
    } catch (e) {
        return console.error(e.message);
    }
}
export const logout = () => async dispatch => {
    try {
        localStorage.removeItem('jwtToken')
        return dispatch(logoutSuccess())
    } catch (e) {
        return console.error(e.message);
    }
}