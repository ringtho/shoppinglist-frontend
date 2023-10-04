import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
  isAuthenticated: false,
  value: 0
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.token = null
      state.isAuthenticated = false
    }
  }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
