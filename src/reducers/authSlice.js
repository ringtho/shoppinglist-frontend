import { createSlice } from '@reduxjs/toolkit'
import { login,register } from '../actions/authActions'


const initialState = {
  loading: false,
  user: null,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('user') 
      state.loading = false
      state.user = null
      state.error = null
    },
    setCredentials: (state, { payload }) => {
      state.user = payload
    },
  },
  extraReducers: {
    // login user
    [login.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [login.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.user = payload
      
    },
    [login.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    // register user
    [register.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [register.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true // registration successful
    },
    [register.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export const { logout, setCredentials } = authSlice.actions

export default authSlice.reducer