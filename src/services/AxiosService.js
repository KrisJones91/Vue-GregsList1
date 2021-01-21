import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://gregslist-server.herokuapp.com/api/cars',
  timeout: 3000
})
export const houseApi = axios.create({
  baseURL: 'https://gregslist-server.herokuapp.com/api/houses',
  timeout: 3000
})
