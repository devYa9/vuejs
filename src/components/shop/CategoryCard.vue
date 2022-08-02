<template>
  <div>
    <v-card
      link
      :to="to"
      flat
      height="400"
      class="pa-0 overflow-hidden"
      color="blue lighten-5"
    >
      <div class="for-image pt-10 pb-5">
        <v-img class="image" :src="getImageLink(image)"></v-img>
      </div>
      <div class="text-h6 pa-5 font-weight-bold">{{ name }}</div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["image", "name", "to"],
  methods: {
    getImageLink(image) {
      return require("@/" + image);
    },
  },
};
</script>

<style scoped>
.for-image {
  height: 80%;
  display: flex;
  align-items: center;
}
.image {
  width: 100%;
  transform: translateX(25%) scale(1.2);
}
</style>