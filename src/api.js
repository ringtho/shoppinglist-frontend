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

export const addItem = async ({item, jwt}) => {
    const authorization = `Bearer ${jwt}`
    console.log(authorization)
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`,
        },
      }

      const { data } = await axios.post(`${API_BASE_URL}/orders/`, item, config)
      return data
    } catch (error) {
      console.log(error)
    }
}
