import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit'

const API_BASE_URL = process.env.DJANGO_API_URL;

export const login = createAsyncThunk("auth/login", async (credentials) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.post(`${API_BASE_URL}/auth/login`, credentials, config);
  
      localStorage.setItem("userId", data.user.id);
      localStorage.setItem("userName", data.user.name);
  
      return data.user;
    } catch (error) {
      throw error.response.data.message;
    }
  });

export const register = createAsyncThunk("user/register", async (userData, {rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.post(`${API_BASE_URL}/register`, userData, config);
      
      // Return the user data directly if the registration is successful
      return data.user;
    } catch (error) {
      // Use rejectWithValue to pass the error message to the Redux store
      return rejectWithValue(error.response.data.message);
    }
  });