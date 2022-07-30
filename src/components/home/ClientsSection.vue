<template>
  <div class="clients">
    <v-row class="shadow pa-2" justify="center">
      <v-col md="3" cols="6" class="d-flex justify-center align-center">
        <v-img
          eager
          src="../../assets/companies/spotify.svg"
          max-width="140"
          max-height="70"
        ></v-img>
      </v-col>
      <v-col md="3" cols="6" class="d-flex justify-center align-center">
        <v-img
          eager
          src="../../assets/companies/grab.svg"
          max-width="140"
          max-height="70"
        ></v-img>
      </v-col>

      <v-col md="3" cols="6" class="d-flex justify-center align-center">
        <v-img
          eager
          src="../../assets/companies/slack.svg"
          max-width="140"
          max-height="70"
        ></v-img>
      </v-col>
      <v-col md="3" cols="6" class="d-flex justify-center align-center">
        <v-img
          eager
          src="../../assets/companies/tunein.svg"
          max-width="140"
          max-height="70"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.shadow {
  box-shadow: 0px 0px 50px -7px rgb(231, 231, 231) !important;
}
</style>