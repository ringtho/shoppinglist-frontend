import axios from 'axios'

const API_BASE_URL = process.env.REACT_APP_DJANGO_API_URL


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

export const register = async (user) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const data = await axios.post(`${API_BASE_URL}/register/`, user, config)
  return data
}

export const addItem = async (item) => {
    const jwt = localStorage.getItem('shoppingToken')
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'AUTHORIZATION': `${jwt}`
      }
    }
    const { data } = await axios.post(`${API_BASE_URL}/orders/`, item, config)
    return data
}

export const getItems = async () => {
  const jwt = localStorage.getItem('shoppingToken')
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'AUTHORIZATION': `${jwt}`,
    },
  }
  const { data } = await axios.get(`${API_BASE_URL}/orders/`, config)
  return data
}

export const editItem = async (item) => {
  const jwt = localStorage.getItem('shoppingToken')
  const config = {
    headers: {
      'Content-Type': 'application/json',
      AUTHORIZATION: `${jwt}`,
    },
  }
  const { data } = await axios.put(`${API_BASE_URL}/orders/${item.id}`, item, config)
  return data
}

export const deleteItem = async (id) => {
  const jwt = localStorage.getItem('shoppingToken')
  const config = {
    headers: {
      'Content-Type': 'application/json',
      AUTHORIZATION: `${jwt}`,
    },
  }
  const { data } = await axios.delete(
    `${API_BASE_URL}/orders/${id}`,config)
  return data
}

