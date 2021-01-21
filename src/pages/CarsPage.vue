<template>
  <div class="cars-page container-fluid">
    <div class="row">
      <div class="col text-center">
        <h1><img alt="Vue logo" src="../assets/logo.png" class="logo" />ars</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
<<<<<<< HEAD
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
=======
        <form @submit.prevent="createCar">
          <div class="form-group-inline">
            <label for="make">Make</label>
            <input
              type="text"
              name="make"
              id="make"
              v-model="state.newCar.make"
              class="form-control"
              placeholder="Make..."
              aria-describedby="helpId"
            />
          </div>
          <div class="form-group-inline">
            <label for="model">model</label>
            <input
              type="text"
              name="model"
              id="model"
              v-model="state.newCar.model"
              class="form-control"
              placeholder="model..."
              aria-describedby="helpId"
            />
          </div>
          <div class="form-group-inline">
            <label for="year">year</label>
            <input
              type="number"
              name="year"
              id="year"
              v-model="state.newCar.year"
              class="form-control"
              placeholder="year..."
              aria-describedby="helpId"
            />
          </div>
          <div class="form-group-inline">
            <label for="price">price</label>
            <input
              type="number"
              name="price"
              id="price"
              v-model="state.newCar.price"
              class="form-control"
              placeholder="price..."
              aria-describedby="helpId"
            />
          </div>
          <div class="form-group-inline">
            <label for="description">description</label>
            <input
              type="text"
              name="description"
              id="description"
              v-model="state.newCar.description"
              class="form-control"
              placeholder="description..."
              aria-describedby="helpId"
            />
          </div>
          <div class="form-group-inline">
            <label for="imgUrl">imgUrl</label>
            <input
              type="text"
              name="imgUrl"
              id="imgUrl"
              v-model="state.newCar.imgUrl"
              class="form-control"
              placeholder="imgUrl..."
              aria-describedby="helpId"
            />
          </div>
          <button type="submit" class="btn btn-success">Add Car</button>
>>>>>>> 9d21410195544295bed8b9ed53802a6dc75cca6c
        </form>
      </div>
    </div>
    <div class="row">
      <Car v-for="car in cars" :key="car.id" :car="car" />
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import { reactive, computed, onMounted } from 'vue'
=======
import { computed, onMounted, reactive } from 'vue'
>>>>>>> 9d21410195544295bed8b9ed53802a6dc75cca6c
import { carsService } from '../services/CarsService'
import { AppState } from '../AppState'
import Car from '../components/Car.vue'
import { useRouter } from 'vue-router'

export default {
  name: 'CarsPage',
  setup() {
<<<<<<< HEAD
    const state = reactive({
      newCar: {}
    })
    // NOTE onMounted gets called when the page is first mounted to the dom (similar to CONSTRUCTOR, draw right away)
=======
    const router = useRouter()
    const state = reactive({
      newCar: {}
    })

    // NOTE on mounted gets called when the page is first mounted to the dom (similar to constructors)
>>>>>>> 9d21410195544295bed8b9ed53802a6dc75cca6c
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

<<<<<<< HEAD
      createCar() {
        try {
          console.log('creating a car')
          carsService.createCar(state.newCar)
          state.newCar = {}
=======
      async createCar() {
        try {
          const id = await carsService.create(state.newCar)
          state.newCar = {}
          // change route in javascript using router.push()
          router.push({ name: 'CarDetails', params: { id } })
>>>>>>> 9d21410195544295bed8b9ed53802a6dc75cca6c
        } catch (error) {
          console.error(error)
        }
      }
<<<<<<< HEAD
=======

>>>>>>> 9d21410195544295bed8b9ed53802a6dc75cca6c
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
