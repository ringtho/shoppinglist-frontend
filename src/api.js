/* eslint-disable no-undef */
import axios from 'axios'

const API_BASE_URL = process.env.REACT_APP_NODE_API_URL

/* Creates a config file for the routes */
const getHeaders = () => {
  const tokenObject = localStorage.getItem('token')
  const jwt = JSON.parse(tokenObject).token
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${jwt}`
    }
  }
  return config
}

/* Handles the API call for user login */
export const loginData = async ({ email, password }) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const data = await axios.post(
    `${API_BASE_URL}/login/`,
    { email, password },
    config
  )
  return data
}

/* Handles the API call for user registration. */
export const register = async (user) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const data = await axios.post(`${API_BASE_URL}/register/`, user, config)
  return data
}

/* Handles the API call for adding an item. */
export const addItem = async (item) => {
  const config = getHeaders()
  const { data } = await axios.post(`${API_BASE_URL}/orders/`, item, config)
  return data
}

/* Handles Api call for getting all items */
export const getAllItems = async () => {
  const config = getHeaders()
  const data = await axios.get(`${API_BASE_URL}/orders`, config)
  return data
}

/* Handles Api call for editing an item */
export const editItem = async (item) => {
  const config = getHeaders()
  const { data } = await axios.put(`${API_BASE_URL}/orders/${item.id}`, item, config)
  return data
}

/* Handles Api call for deleting an item */
export const deleteItem = async (id) => {
  const config = getHeaders()
  const { data } = await axios.delete(
    `${API_BASE_URL}/orders/${id}`, config)
  return data
}
