<template>
  <div class="house col-4">
    <router-link :to="{ name: 'HousesDetails', params: { id: house.id } }">
      <div class="card">
        <img class="card-img-top" :src="house.imgUrl" alt="" />
        <div class="card-body">
          <h4>
            Beds: {{ house.bedrooms }} | Baths: {{ house.bathrooms }} | ${{ house.price }}
          </h4>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'House',
  props: {
    house: {
      type: Object,
      required: true
    }
  },
  setup(props) {

  }
}
</script>
