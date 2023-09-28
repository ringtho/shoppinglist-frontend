import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const apiUrl = 'https//'

export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      }

      const { data } = await axios.post(
        `${apiUrl}auth/login`,
        { username, password },
        config
      )
      localStorage.setItem('userToken', data.userToken)
      return data
    } catch (error) {
      if (error.response && error.response.data.error_message) {
        return rejectWithValue(error.response.data.error_message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const registerUser = createAsyncThunk(
  'user/register',
  async ({ username, email, password }, { rejectWithValue }) => {
    try {

      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      }

      await axios.post(
        `${apiUrl}/apir/user/register`,
        { username, email, password },
        config
      )
    } catch (errror) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)