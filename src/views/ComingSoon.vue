<template>
  <v-container>
    <v-row class="coming">
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div
          class="text-h5 text-md-h3 font-weight-bold blue--text text--darken-2"
        >
          Coming <span class="error--text">Soon..</span>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <img src="../assets/coming.svg" alt="" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.coming {
  min-height: 75vh;
}

img {
  width: 100%;
}
</style>