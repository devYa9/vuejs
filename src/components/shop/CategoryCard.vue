<template>
  <div>
    <v-card
      link
      :to="to"
      flat
      height="400"
      class="pa-0 overflow-hidden hidden-md-and-down"
      color="blue lighten-5"
    >
      <div class="for-image pt-10 pb-5">
        <v-img eager class="image" :src="getImageLink(image)"></v-img>
      </div>
      <div class="text-h6 pa-5 font-weight-bold">{{ name }}</div>
    </v-card>
    <v-card
      link
      :to="to"
      flat
      height="120"
      class="pa-0 overflow-hidden hidden-lg-and-up"
      color="blue lighten-5"
    >
      <v-row>
        <v-col cols="7">
          <div class="text-h6 pa-5 font-weight-bold">{{ name }}</div>
        </v-col>
        <v-col cols="5">
          <v-img
            eager
            class="image image-mobile"
            :src="getImageLink(image)"
          ></v-img>
        </v-col>
      </v-row>
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
  computed: {
    height() {
      // Use in computed property
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "220px";
        case "sm":
          return "400px";
        case "md":
          return "500px";
        case "lg":
          return "600px";
        case "xl":
          return "800px";
      }
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

.image-mobile {
  transform: translateX(25%) scale(1.3);
}

.image {
  width: 100%;
  transform: translateX(25%) scale(1.2);
}
</style>