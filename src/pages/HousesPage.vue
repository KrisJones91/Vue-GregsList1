<template>
  <div class="houses-page container-fluid">
    <div class="row">
      <div class="col text-center">
        <h1>Ho<img alt="Vue logo" src="../assets/logo.png" class="logo" />ses</h1>
      </div>
    </div>
    <div class="row">
      <House v-for="house in houses" :key="house.id" :house="house" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { housesService } from '../services/HousesService'
import { AppState } from '../AppState'
import House from '../components/House.vue'

export default {
  name: 'HousesPage',
  setup() {
    onMounted(() => {
      try {
        housesService.getHouses()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      houses: computed(() => AppState.houses)
    }
  },
  components: {
    House
  }
}
</script>

<style lang="scss">
.logo{
    height:1em
}
</style>
