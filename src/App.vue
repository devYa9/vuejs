<template>
  <v-app>
    <Navbar />
    <v-main>
      <transition
        name="fade"
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <router-view />
      </transition>
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

<style lang="scss" scoped>
.page {
  position: relative;
}

.animate__animated {
  animation-duration: 0.3s !important;
}
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200&display=swap");
$body-font-family: "poppins", sans-serif !default;

* {
  font-family: "poppins", sans-serif !important;
}

.v-application {
  * {
    font-family: $body-font-family, sans-serif !important;
  }
}

.v-application .text-lg-h3,
.v-application .text-h5 {
  font-family: "poppins", sans-serif !important;
}
</style>