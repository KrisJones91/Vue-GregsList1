import { AppState } from '../AppState'
import { houseApi } from './AxiosService'

class HousesService {
  async getHouses() {
    const res = await houseApi.get('')
    AppState.houses = res.data
  }

  async getOne(id) {
    const res = await houseApi.get(id)
    AppState.activeHouse = res.data
  }
}

export const housesService = new HousesService()
