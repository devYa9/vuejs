<template>
  <v-sheet
    min-height="500"
    :height="sheetHeight"
    color="blue lighten-5"
    class="pa-md-10 pa-5"
  >
    <v-row class="row-100">
      <v-col cols="12" md="6" class="d-flex flex-column justify-center">
        <div
          class="
            text-h5 text-sm-h4 text-md-h3
            font-weight-bold
            blue--text
            text--darken-2
            mt-10 mt-md-0
          "
        >
          SHOP COMPUTERS <br />
          <span class="error--text">&</span> ACCESSORIES
        </div>
        <div class="body-1 pr-15 mt-5 grey--text text--darken-2">
          Shop laptops, desktops, monitors, tablets, PC gaming, hard drives and
          storage, accessories and more.
        </div>
        <div class="call-to-action mb-10">
          <v-btn
            text
            class="rounded-lg mt-5 text-capitalize btn-border px-6"
            color="black"
          >
            View more
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <v-row class="row-100">
          <v-col cols="12" md="9" lg="8" class="d-flex align-end">
            <v-sheet
              height="fit-content"
              min-height="190"
              width="100%"
              color="white"
              class="rounded-lg pa-5 pb-2"
              :class="'pe-' + currentScreen"
            >
              <div
                id="category"
                class="caption text-capitalize grey--text text--darken-1"
              >
                Computer & Accessories
              </div>
              <div
                id="product-name"
                class="
                  text-md-h6
                  body-1
                  font-weight-bold
                  grey--text
                  text--darken-3
                  mt-2
                "
              >
                Razer Kraken Pro V2 Gaming Headset
              </div>
              <div
                id="rating-reviews"
                class="d-flex justify-space-between align-center mt-2"
              >
                <v-rating
                  :value="5"
                  x-small
                  dense
                  color="yellow darken-1"
                  readonly
                ></v-rating>
                <div id="reviews" class="caption grey--text text--darken-1">
                  1245 reviews
                </div>
              </div>
              <div id="price" class="d-flex align-end justify-space-between">
                <div
                  id="current-price"
                  class="
                    text-h6 text-md-h5
                    font-weight-black
                    grey--text
                    text--darken-3
                    mt-2
                  "
                >
                  $125.00
                </div>
                <div id="old-price" class="body-2 mb-1">$250.00</div>
              </div>
              <div>
                <v-btn
                  :ripple="false"
                  plain
                  text
                  color="grey darken-2"
                  class="call-to-action-product ps-0 caption text-capitalize"
                  >View more <v-icon right>mdi-chevron-right</v-icon></v-btn
                >
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="12" md="3" lg="4" class="d-flex align-end">
            <v-img
              class="slider-img"
              :class="'img-' + currentScreen"
              src="../../assets/products/headset.png"
            >
              <div
                class="discount caption yellow white--text rounded-circle pa-1"
              >
                50%
              </div>
            </v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  computed: {
    sheetHeight() {
      switch (this.$vuetify.breakpoint.name) {
        // Use in computed property
        case "xs":
          return "570px";
        case "sm":
          return "570px";
        case "md":
          return "550px";
        case "lg":
          return "500px";
        case "xl":
          return "500px";
        default:
          return 500;
      }
    },
    currentScreen() {
      switch (this.$vuetify.breakpoint.name) {
        // Use in computed property
        case "xs":
          return "xs";
        case "sm":
          return "sm";
        case "md":
          return "md";
        case "lg":
          return "lg";
        case "xl":
          return "xl";
      }
    },
  },
};
</script>

<style scoped>
#product-name {
  line-height: 22px;
}

#old-price {
  position: relative;
  width: fit-content;
}

#old-price::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  background: black;
  left: 0;
  bottom: 43%;
}

.discount {
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.6);
  position: absolute;
  right: 10%;
  width: 35px;
  height: 35px;
  border: 1px solid white !important;
}
.row-100 {
  height: 100%;
}
.slider-img {
  max-width: 160px !important;
  min-width: 120px;
  position: absolute;
  right: 0;
  width: 100%;
  transform: scale(2.5) translate(-20%, -20%);
}

.img-xs {
  right: 10px;
  transform: scale(1.5) translateY(-35%) !important;
}

.img-sm {
  right: 20px;
  transform: scale(1.7) translateY(-35%) !important;
}

.img-lg {
  position: relative;
}

.pe-lg {
  padding-right: 140px !important;
}

.pe-md {
  padding-right: 120px !important;
}

.pe-sm {
  padding-right: 190px !important;
}

.pe-xs {
  padding-right: 140px !important;
}

.btn-border {
  border: 1px solid black;
}
</style>