<template>
  <v-card flat class="py-7 px-5 d-flex justify-start align-center rounded-lg">
    <div>
      <v-img eager width="80" height="80" :src="src"></v-img>
    </div>
    <div class="text-h6 mx-5 grey--text text--darken-2">{{ title }}</div>
  </v-card>
</template>

<script>
export default {
  props: ["src", "title"],
};
</script>

<style scoped>
.v-card {
  position: relative;
  box-shadow: 0px 0px 45px -7px rgb(201, 201, 201) !important;
  border: 1px solid transparent;
  transition: all 0.3s;
  cursor: pointer;
  top: 0;
}

.v-card:hover {
  border-color: #1976d2;
  transform: scale(1.03);
  z-index: 3;
}
</style>