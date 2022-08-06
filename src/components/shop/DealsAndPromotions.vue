<template>
  <div class="mt-2">
    <v-row>
      <v-col cols="12" md="6">
        <div class="error lighten-5 overflow-hidden">
          <v-row class="box-container">
            <v-col class="box pa-10" cols="12" md="7">
              <div class="text-h6 grey--text text--darken-4 font-weight-bold">
                Basics
              </div>
              <div class="body-2">
                Shop Today's Deals, Lightning Deals, and limited time discounts.
              </div>
              <div>
                <v-btn
                  text
                  :ripple="false"
                  plain
                  class="text-capitalize pa-0 body-1 mt-2"
                >
                  See more
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
            </v-col>
            <v-col class="box-img" cols="12" md="5">
              <v-img
                eager
                :class="'image-' + screen"
                src="../../assets/products/xbox-controller.png"
              ></v-img>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="error lighten-5 overflow-hidden">
          <v-row class="box-container">
            <v-col class="box pa-10" cols="12" md="7">
              <div class="text-h6 grey--text text--darken-4 font-weight-bold">
                Deals & Promotions
              </div>
              <div class="body-2">
                Shop Today's Deals, Lightning Deals, and limited time discounts.
              </div>
              <div>
                <v-btn
                  text
                  :ripple="false"
                  plain
                  class="text-capitalize pa-0 body-1 mt-2"
                >
                  See more
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
            </v-col>
            <v-col class="box-img" cols="12" md="5">
              <v-img
                eager
                :class="'image-' + screen"
                src="../../assets/products/clock.png"
              ></v-img>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  computed: {
    screen() {
      // Use in computed property
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "xs";
        case "sm":
          return "xs";
        case "md":
          return "lg";
        case "lg":
          return "lg";
        case "xl":
          return "lg";
      }
    },
  },
};
</script>

<style scoped>
.box {
  min-height: 100px;
}

.box-img {
  max-height: 110px;
}

.image-lg {
  transform: translateX(30%) translateY(0%);
}

.image-xs {
  transform: translateX(30%) translateY(-40%) scale(0.6);
}
</style>