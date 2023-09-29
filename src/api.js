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

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const { data } = await axios.post(`${API_BASE_URL}/orders/`, item, config)
      return data
    } catch (error) {
      console.log(error)
    }
}

