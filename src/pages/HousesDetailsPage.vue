<template>
  <div class="house-details">
    <h1>Welcome to house details</h1>
    <img :src="house.imgUrl" alt="">
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { housesService } from '../services/HousesService'
export default {
  setup() {
    const route = useRoute()

    onMounted(async() => {
      await housesService.getOne(route.params.id)
    })
    return {
      house: computed(() => AppState.activeHouse)
    }
  }
}
</script>
