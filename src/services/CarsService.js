import { AppState } from '../AppState'
import { api } from './AxiosService'

class CarsService {
  async getCars() {
    // fetch data
    const res = await api.get('')
    // add to AppState
    AppState.cars = res.data
  }

  async getOne(id) {
    const res = await api.get(id)
    AppState.activeCar = res.data
  }

<<<<<<< HEAD
  async createCar(car) {
=======
  async create(car) {
>>>>>>> 9d21410195544295bed8b9ed53802a6dc75cca6c
    const res = await api.post('', car)
    AppState.cars.push(res.data)
    return res.data.id
  }
}

export const carsService = new CarsService()
