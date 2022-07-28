<template>
  <div class="mt-15">
    <v-row justify="center" align="center" class="main-row">
      <div
        class="bg"
        :style="{
          backgroundImage:
            'url(\'' + require('../../assets/world-map.png') + '\')',
        }"
      ></div>
      <v-col cols="12" md="9" class="quote-box d-flex align-center">
        <v-row align="center">
          <v-col cols="8" offset="2" offset-md="0" md="5">
            <v-img class="quote-image" src="../../assets/team/2.jpg"></v-img>
          </v-col>
          <v-col cols="12" md="7" class="quote-container rounded-lg"></v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-row {
  min-height: 400px;
  position: relative;
}

.quote-box {
  position: relative;
  z-index: 2;
}

.quote-container {
  min-height: 200px;
  max-height: 220px;
  background: white;
  box-shadow: 0px 0px 30px -7px rgb(134, 134, 134) !important;
  position: relative;
  z-index: 2;
  transform: translateX(-10%);
}

.bg {
  position: absolute;
  width: 100%;
  min-width: 700px;
  height: 100%;
  background-position: right top;
  background-size: contain;
  background-image: inherit;
  left: 0;
  top: 0;
  opacity: 0.2;
  z-index: 0;
}

.quote-image {
  position: relative;
  width: 100%;
  border-radius: 79% 21% 58% 42% / 45% 33% 67% 55% !important;
}

.quote-image::after {
  position: absolute;
  width: 100%;
  height: 100%;
  background: red;
  top: 0;
  left: 0;
}
</style>