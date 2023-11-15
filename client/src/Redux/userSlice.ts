import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'




export interface UserRducs {
    _id?: string,
    name: string,
    email: string,
    password: string,
    createdAt?: Date,
    updatedAt?: Date,
    __v?: number
}

const initialState: UserRducs = {
    name: '',
    email: '',
    password: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        ifUserLoged: (state,) => {
            const userName = localStorage.getItem('UserClientName');
            const userEmail = localStorage.getItem('UserClientEmail');
            const userID = localStorage.getItem('UserClientID');
            if (userName && userEmail) {
                state.name = userName
                state.email = userEmail
                state._id = userID!
            }
        },
        loginUser: (state, action: PayloadAction<UserRducs>) => {            
            state.name = action.payload.name
            state.email = action.payload.email
            state._id = action.payload._id

            localStorage.setItem('UserClientName',state.name);
            localStorage.setItem('UserClientEmail', state.email);
            localStorage.setItem('UserClientID', state._id!);

        },
        logoutUser: (state,) => {
            localStorage.removeItem('UserClientName');
            localStorage.removeItem('UserClientEmail');
            localStorage.removeItem('UserClientID');

            state.name = ''
            state.email = ''
            state._id = ''

        },

    },
})

// Action creators are generated for each case reducer function
export const { ifUserLoged, loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer