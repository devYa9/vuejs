<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
    <v-divider></v-divider>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/app/Navbar.vue";
import Footer from "./components/app/Footer.vue";

export default {
  components: { Navbar, Footer },
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
$body-font-family: "poppins", sans-serif !default;

.v-application {
  * {
    font-family: $body-font-family, sans-serif !important;
  }
}

.v-application .text-lg-h3,
.v-application .text-h5 {
  font-family: $body-font-family, sans-serif !important;
}
</style>