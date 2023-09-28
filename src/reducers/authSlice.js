import { createSlice } from "@reduxjs/toolkit"
import { registerUser,userLogin } from "../auth/authActions"


const userToken = localStorage.getItem('userToken')
? localStorage.getItem('userToken') : null

const initialState = {
    loading: false,
    userInfo:null,
    userToken,
    error:null,
    success:false,
}

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        logout:(state)=>{
            state.loading = false
            state.userInfo = null
            state.userToken = null
            state.error = null
        },
        setCredentials:(state,{payload})=>{
            state.userInfo = payload
        },
    },
    extraReducers:{
        // login user
        [userLogin.pending]:(state)=>{
            state.loading = true
            state.error = null
        },
        [userLogin.fulfilled]:(state,{payload})=>{
            state.loading = false
            state.userInfo = payload
            state.userToken = payload.userToken
        },
        [userLogin.rejected]:(state,{payload})=>{
            state.loading = false
            state.error = payload
        },
        // register user
        [userLogin.pending]:(state)=>{
            state.loading = true
            state.error = null
        },
        // registration successful
        [userLogin.fulfilled]:(state,{payload})=>{
            state.loading = false
            state.success = true 
        },
        [userLogin.rejected]:(state,{payload})=>{
            state.loading = false
            state.error = payload
        },

    },
})

export const {logout,setCredentials} = authSlice.actions
export default authSlice.reducer