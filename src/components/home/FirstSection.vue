<template>
  <v-row class="py-10">
    <v-col order="2" order-sm="1" cols="12" sm="7" md="6" lg="6">
      <v-sheet
        class="
          pa-0
          d-flex
          flex-column
          justify-center
          text-center text-sm-start text-md-start text-lg-start
          px-0 px-sm-8 px-md-10 px-lg-12
        "
        width="100%"
        :min-height="height"
        height="100%"
      >
        <div>
          <h1
            class="
              text-lg-h3 text-xm-headline text-sm-h5 text-md-h4
              blue--text
              text--darken-2
              font-weight-bold
            "
          >
            Turning <br class="hidden-md-and-down" />all Ideas Into <br />
            Real
            <span class="error--text">Success</span>
          </h1>
        </div>
        <div>
          <p class="subtitle-2 grey--text text--darken-1 mt-5">
            There are many variations of passages of Lorem available.
            <br />
            but the majority have suffered alteration.
          </p>
        </div>
        <div class="call-to-action my-5">
          <v-btn
            class="text-capitalize custom-shadow py-5 px-6"
            dark
            depressed
            color="#32e2a9"
          >
            Read More
          </v-btn>
        </div>
      </v-sheet>
    </v-col>
    <v-col
      order="1"
      order-sm="2"
      offset="1"
      offset-sm="0"
      offset-md="0"
      cols="10"
      sm="5"
      md="6"
      lg="6"
    >
      <v-img eager :src="require('@/assets/image-2.png')"> </v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Home",

  components: {},

  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 220;
        case "sm":
          return 300;
        case "md":
          return 300;
      }
    },
  },
};
</script>

<style scoped>
.call-to-action .v-btn {
  box-shadow: 2px 10px 2px 2px solid black !important;
}

.custom-shadow {
  box-shadow: 0px 3px 8px -3px #32e2a9;
}
</style>