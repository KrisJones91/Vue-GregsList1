<template>
  <div class="car-details">
    <h1>Welcome to car details</h1>
    <!-- : is the same as {{}} but for properties within a tag -->
    <!-- no need for v-if, if not loading.. just :src" " -->
    <img v-if="state.loaded" :src="car.imgUrl" alt="" />
    <h1 v-else>
      Loading...
    </h1>
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
    onMounted(async() => {
      // route params id is the same name as what we named it in INDEX.js path
      await carsService.getOne(route.params.id)
      state.loaded = true
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
