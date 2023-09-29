import axios from 'axios'

const API_BASE_URL = process.env.REACT_APP_DJANGO_API_URL


export const loginData = async ({ email, password }) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const data = await axios.post(
      `${API_BASE_URL}/login/`,
      { email, password },
      config
    )
    return data
  } catch (error) {
    throw error
  }
}

export const register = async (user) => {
  try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const data = await axios.post(`${API_BASE_URL}/register/`, user, config)
      return data
    } catch (error) {
      console.log(error)
    }
}

export const addItem = async (item) => {
    const jwt = localStorage.getItem('shoppingToken')
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'AUTHORIZATION': `${jwt}`
        }
      }
      const { data } = await axios.post(`${API_BASE_URL}/orders/`, item, config)
      return data
    } catch (error) {
      console.log(error)
    }
}

export const getItems = async () => {
  const jwt = localStorage.getItem('shoppingToken')
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'AUTHORIZATION': `${jwt}`,
      },
    }
    const { data } = await axios.get(`${API_BASE_URL}/orders/`, config)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const editItem = async (item) => {
  const jwt = localStorage.getItem('shoppingToken')
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        AUTHORIZATION: `${jwt}`,
      },
    }
    const { data } = await axios.put(`${API_BASE_URL}/orders/${item.id}`, item, config)
    return data
  } catch (error) {
    console.log(error)
  }
}


export const deleteItem = async (id) => {
  const jwt = localStorage.getItem('shoppingToken')
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        AUTHORIZATION: `${jwt}`,
      },
    }
    const { data } = await axios.delete(
      `${API_BASE_URL}/orders/${id}`,config)
    return data
  } catch (error) {
    console.log(error)
  }
}

