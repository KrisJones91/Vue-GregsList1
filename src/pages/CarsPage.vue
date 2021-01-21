<template>
  <div class="cars-page container-fluid">
    <div class="row">
      <div class="col text-center">
        <h1><img alt="Vue logo" src="../assets/logo.png" class="logo" />ars</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button type="button" class="btn btn-primary m-3" data-bs-toggle="modal" data-bs-target="#new-car-modal">
          Add Car
        </button>
        <form>
          <div class="modal fade" id="new-car-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    WANNA SELL A CAR?
                  </h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <input
                    type="text"
                    name="make"
                    id="make"
                    v-model="state.newCar.make"
                    class="form-control"
                    placeholder="Make..."
                  >
                  <input
                    type="text"
                    name="model"
                    id="model"
                    v-model="state.newCar.model"
                    class="form-control"
                    placeholder="Model..."
                  >
                  <input
                    type="number"
                    name="year"
                    id="year"
                    v-model="state.newCar.year"
                    class="form-control"
                    placeholder="Year..."
                  >
                  <input
                    type="text"
                    name="description"
                    id="description"
                    v-model="state.newCar.description"
                    class="form-control"
                    placeholder="Description..."
                  >
                  <input
                    type="number"
                    name="price"
                    id="price"
                    v-model="state.newCar.price"
                    class="form-control"
                    placeholder="Price..."
                  >
                  <input
                    type="text"
                    name="imgUrl"
                    id="imgUrl"
                    v-model="state.newCar.imgUrl"
                    class="form-control"
                    placeholder="Provide Image..."
                  >
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="button" class="btn btn-primary" @click="createCar()">
                    Submit Car
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <Car v-for="car in cars" :key="car.id" :car="car" />
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { carsService } from '../services/CarsService'
import { AppState } from '../AppState'
import Car from '../components/Car.vue'

export default {
  name: 'CarsPage',
  setup() {
    const state = reactive({
      newCar: {}
    })
    // NOTE onMounted gets called when the page is first mounted to the dom (similar to CONSTRUCTOR, draw right away)
    onMounted(() => {
      try {
        carsService.getCars()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      state,
      // if data changes dynimcally in the appstate use a computed
      cars: computed(() => AppState.cars),

      createCar() {
        try {
          console.log('creating a car')
          carsService.createCar(state.newCar)
          state.newCar = {}
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
  components: {
    Car
  }
}
</script>

<style lang="scss" scoped>
  .logo {
   transform: rotateZ(90deg);
   height: 1em
  }
</style>
