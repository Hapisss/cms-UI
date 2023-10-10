import { createSlice } from "@reduxjs/toolkit"

interface AuthProps {
    isAuthenticated: boolean,
    accessToken: null | string
}

const initialState: AuthProps = {
    isAuthenticated: false,
    accessToken: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload
        }

    },
    extraReducers: {}
})

export const {
    setAuthenticated,
    setAccessToken
} = authSlice.actions

export default authSlice.reducer