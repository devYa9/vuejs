<template>
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
          {{ currentProduct.category }}
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
          {{ currentProduct.name }}
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
            {{ currentProduct.rating }} reviews
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
            ${{ currentProduct.currentPrice }}
          </div>
          <div id="old-price" class="body-2 mb-1">
            ${{ currentProduct.oldPrice }}
          </div>
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
        eager
        class="slider-img"
        :class="'img-' + currentScreen"
        :src="getImageLink(currentProduct.image)"
      >
        <div class="discount caption yellow white--text rounded-circle pa-1">
          50%
        </div>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["currentProduct"],
  methods: {
    getImageLink(image) {
      return require("@/" + image);
    },
  },
  computed: {
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
  position: relative;
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
  right: -8px;
  transform: scale(1.5) translateY(-35%) !important;
}

.img-sm {
  right: 20px;
  transform: scale(1.7) translateY(-35%) !important;
}

.img-md {
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