<template>
  <div class="car-details">
    <h1>Welcome to car details</h1>
    <!-- : is the same as {{}} but for properties within a tag -->
    <!-- no need for v-if, if not loading.. just :src" " -->
    <img v-if="state.loaded" :src="car.imgUrl" alt="" />
    <h1 v-else>Loading...</h1>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { carsService } from '../services/CarsService'
// IMPORTANT REVIEW
export default {
  setup() {
    const route = useRoute()
    const state = reactive({
      loaded: false
    })
    // onBeforeRouteLeave(() => {
    //   AppState.activeCar = {}
    // })
    // REVIEW remember you don't need async or state.loaded unless wanting to add the LOADER
    onMounted(async () => {
<<<<<<< HEAD
      // route params id is the same name as what we named it in INDEX.js path
      await carsService.getOne(route.params.id)
      state.loaded = true
=======
      try {
        await carsService.getOne(route.params.id)
      } catch (error) {
        console.error(error)
      } finally {
        state.loaded = true
      }
>>>>>>> 9d21410195544295bed8b9ed53802a6dc75cca6c
    })
    return {
      state,
      car: computed(() => AppState.activeCar)
    }
  }
}
</script>

<style>
</style>
