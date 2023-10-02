import axios from 'axios'

const API_BASE_URL = process.env.REACT_APP_NODE_API_URL

const getHeaders = () => {
  const jwt = localStorage.getItem('token')
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${jwt}`,
    },
  }
  return config
}

/**
 * Handles the API call for user login.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise} A Promise that resolves with the login response data.
 */
export const loginData = async ({ email, password }) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const data = await axios.post(
    `${API_BASE_URL}/login/`,
    { email, password },
    config
  )
  return data
}

/**
 * Handles the API call for user registration.
 * @param {string} first_name - The user's first_name.
 * @param {string} last_name - The user's last_name.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise} A Promise that resolves with the register user response data.
 */
export const register = async (user) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const data = await axios.post(`${API_BASE_URL}/register/`, user, config)
  return data
}

/**
 * Handles the API call for adding an item.
 * @param {string} item - The item's title.
 * @param {number} quantity - The item's quantity.
 * @param {string} notes - The item's description.
 * @param {boolean} completed - The item's status.
 * @returns {Promise} A Promise that resolves with the added item response data.
 */
export const addItem = async (item) => {
    const config = getHeaders()
    const { data } = await axios.post(`${API_BASE_URL}/orders/`, item, config)
    return data
}

/* Handles Api call for getting all items */
export const getAllItems = async () => {
  const config = getHeaders()
  const data = await axios.get(`${API_BASE_URL}/orders`,config)
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
    `${API_BASE_URL}/orders/${id}`,config)
  return data
}

/* Handles Api call for user logout */
export const logout = async (id) => {
  // const jwt = localStorage.getItem('shoppingToken')
  const config = {
    headers: {
      'Content-Type': 'application/json',
      AUTHORIZATION: `${jwt}`,
    },
  }
  const { data } = await axios.delete(`${API_BASE_URL}/orders/${id}`, config)
  return data
}
