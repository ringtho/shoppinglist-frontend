import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit'


const API_BASE_URL = process.env.REACT_APP_DJANGO_API_URL;
console.log(API_BASE_URL)

export const login = createAsyncThunk("/login", async ({email, password}) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const data = await axios.post(`${API_BASE_URL}/login/`, {email, password}, config);
      console.log(data)
  
      localStorage.setItem("userId", data.user.id);
      localStorage.setItem("userName", data.user.name);
      localStorage.setItem('userName', data.user.token)
      return data;
    } catch (error) {
      throw error.response.data.message;
    }
  });

export const register = createAsyncThunk("/register", async (userData, {rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.post(`${API_BASE_URL}/register/`, userData, config);
      
      // Return the user data directly if the registration is successful
      return data.user;
    } catch (error) {
      // Use rejectWithValue to pass the error message to the Redux store
      return rejectWithValue(error.response.data.message);
    }
  });

  export const addItem = createAsyncThunk(
    '/add',
    async (item, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer `
          },
        }

        const { data } = await axios.post(
          `${API_BASE_URL}/orders/`,
          item,
          config
        )

        // Return the user data directly if the registration is successful
        return data.item
      } catch (error) {
        // Use rejectWithValue to pass the error message to the Redux store
        return rejectWithValue(error.response.data.message)
      }
    }
  )