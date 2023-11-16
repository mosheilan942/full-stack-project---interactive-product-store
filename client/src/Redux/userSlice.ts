import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { LoginUser } from '../types/UserType'




export interface UserRducs {
    _id: string,
    name: string,
    email: string,
    token: string,

}

const initialState: UserRducs = {
    _id: '',
    name: '',
    email: '',
    token: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        ifUserLoged: (state,) => {
            const userToken = localStorage.getItem('UserClientToken');
            const userID = localStorage.getItem('UserClientID');

            if (userToken) {
                // get the user login with Token
                state._id = userID!
            }
        },
        loginUser: (state, action: PayloadAction<LoginUser>) => {
            state.name = action.payload.user.name
            state.email = action.payload.user.email
            state._id = action.payload.user._id
            state.token = action.payload.accessToken

            localStorage.setItem('UserClientID', state._id!);
            localStorage.setItem('UserClientToken', state.token);

            // בדיקה אם יש עגלה והכנסתה לדאטה בייס 

        },
        logoutUser: (state,) => {
            localStorage.removeItem('UserClientID');
            localStorage.removeItem('UserClientToken');

            state._id = ''
            state.name = ''
            state.email = ''
            state.token = ''
        },





    },
})

// Action creators are generated for each case reducer function
export const { ifUserLoged, loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer