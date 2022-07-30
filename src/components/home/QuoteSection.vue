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
          <v-col
            cols="8"
            offset="2"
            offset-md="0"
            md="5"
            class="image-container"
          >
            <v-img
              eager
              class="quote-image"
              src="../../assets/team/2.jpg"
            ></v-img>
            <div class="avatar-bg hidden-md-and-down"></div>
          </v-col>
          <v-col
            offset="1"
            cols="10"
            offset-md="0"
            md="7"
            class="quote-container rounded-lg pa-md-10 pa-4 text-center"
            :class="transform"
          >
            <div class="d-flex">
              <v-icon class="quote">mdi-format-quote-open</v-icon>
              <p class="body-2">
                Our support team will get assistance from AI-powered
                suggestions, making it quicker than ever to handle support
              </p>
              <v-icon class="quote">mdi-format-quote-close</v-icon>
            </div>
            <div class="d-flex flex-column align-center">
              <span class="text-h6 grey--text text--darken-3 underline"
                >Abedin Abed</span
              >
              <span class="caption grey--text text--darken-2"
                >Creative Director</span
              >
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  computed: {
    transform() {
      switch (this.$vuetify.breakpoint.name) {
        case "xm":
          return "transform-xm";
        case "sm":
          return "transform-xm";
        case "md":
          return "transform-md";
        case "lg":
          return "transform-md";
        case "xl":
          return "transform-md";
        default:
          return "transform-xm";
      }
    },
  },
};
</script>

<style scoped>
.image-container {
  position: relative;
}

.main-row {
  min-height: 400px;
  position: relative;
  overflow: hidden;
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
}

.transform-md {
  transform: translateX(-10%);
}

.transform-xm {
  transform: translateY(-15%);
}

.quote-container p {
  display: inline;
  padding: 15px;
  margin: 0;
}

.quote {
  font-size: 30px;
  color: #ff5252;
}

.quote:nth-child(1) {
  align-self: flex-start;
}

.quote:nth-child(3) {
  align-self: flex-end;
}

.underline {
  width: fit-content;
  border-bottom: 1px solid grey;
}

.bg {
  position: absolute;
  width: 100%;
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

.image-container::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 1;
  transform: scale(2) rotate(-30deg);

  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;utf8, %3Csvg width=%22100%25%22 height=%22100%25%22 viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 %3E %3Cdefs%3E %3CclipPath id=%22shape%22%3E %3Cpath fill=%22currentColor%22 d=%22M647%2C663.5Q311%2C827%2C291%2C465.5Q271%2C104%2C627%2C302Q983%2C500%2C647%2C663.5Z%22%3E%3C%2Fpath%3E %3C%2FclipPath%3E %3C%2Fdefs%3E %3Cg clip-path=%22url(%23shape)%22%3E %3Cpath fill=%22%23d4d6f4%22 d=%22M647%2C663.5Q311%2C827%2C291%2C465.5Q271%2C104%2C627%2C302Q983%2C500%2C647%2C663.5Z%22 %2F%3E %3C%2Fg%3E %3C%2Fsvg%3E");
}
</style>