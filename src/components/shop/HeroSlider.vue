<template>
  <v-sheet
    min-height="500"
    :height="sheetHeight"
    color="blue lighten-5"
    class="pa-md-10 pb-md-5 pa-5"
    v-if="!isLoading"
  >
    <v-row class="row-100">
      <v-col
        cols="12"
        md="6"
        class="
          d-flex
          flex-column
          justify-center
          animate__animated animate__fadeInLeft
        "
      >
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
        <transition
          :appear="true"
          enter-active-class="animate__animated animate__fadeInRight"
          leave-active-class="animate__animated animate__fadeOutRight"
          name="fade"
          mode="out-in"
        >
          <SliderProduct
            :key="currentProduct.name"
            v-if="show"
            :currentProduct="currentProduct"
          />
        </transition>
      </v-col>
    </v-row>
    <div class="hidden-sm-and-down">
      <div class="dots d-flex justify-center pa-0 mt-3">
        <div
          class="dot"
          :class="i == currentIndex ? 'blue' : 'grey'"
          v-for="(slide, i) in products"
          :key="slide.name"
          @click="nextSlide(i)"
        ></div>
      </div>
    </div>
  </v-sheet>
</template>

<script>
import SliderProduct from "./SliderProduct.vue";
export default {
  components: { SliderProduct },
  data() {
    return {
      show: true,
      currentIndex: 0,
      products: [
        {
          name: "Razer Kraken Pro V2 Gaming Headset",
          category: "Computer & Accessories",
          rating: "1245",
          currentPrice: "125.00",
          oldPrice: "250.00",
          image: "assets/products/headset.png",
        },
        {
          name: "Puppy Dog Stuffed Toy Plush",
          category: "Toys & Games",
          rating: "2301",
          currentPrice: "50.00",
          oldPrice: "100.00",
          image: "assets/products/puppy.png",
        },
        {
          name: "Wedding Flower Sneaker",
          category: "Shoes",
          rating: "1401",
          currentPrice: "60.00",
          oldPrice: "120.00",
          image: "assets/products/shoes.png",
        },
        {
          name: "Air Jordan 4 Black & Yellow",
          category: "Shoes",
          rating: "1401",
          currentPrice: "160.00",
          oldPrice: "320.00",
          image: "assets/products/shoes-1.png",
        },
      ],
      sl: this.startSlider(),
      isLoading: true,
    };
  },
  mounted() {},
  methods: {
    nextSlide(index) {
      clearInterval(this.sl);
      this.currentIndex = index;
      this.sl = this.startSlider();
    },
    startSlider() {
      let slider = setInterval(() => {
        if (this.currentIndex < this.products.length - 1) {
          this.currentIndex += 1;
        } else {
          this.currentIndex = 0;
        }
      }, 5000);
      return slider;
    },
  },
  watch: {
    isLoading() {
      this.$emit("loaded");
    },
  },
  computed: {
    currentProduct() {
      return this.products[this.currentIndex];
    },
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
  },
  created() {
    const imageToPreload = new Image();
    imageToPreload.src = require("@/assets/products/headset.png");
    imageToPreload.onload = () => {
      this.isLoading = false;
    };
  },
};
</script>

<style scoped>
.dots {
  gap: 10px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.5s;
}

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