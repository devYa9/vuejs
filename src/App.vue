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
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200&display=swap");
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