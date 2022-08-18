<template>
  <div class="mt-n5">
    <v-container>
      <div>
        <v-btn
          text
          color="grey darken-3"
          class="text-capitalize pl-0 remove-bg"
          @click="goBack()"
          :ripple="false"
          ><v-icon left>mdi-chevron-left</v-icon>Back to shopping</v-btn
        >
      </div>
      <div class="">
        <div class="mt-5 grey--text text--darken-2">
          <span class="font-weight-bold">Shopping cart</span
          ><span class="ml-3"> ({{ cartProducts.length }} items) </span>
        </div>
        <v-row>
          <v-col cols="12" md="8">
            <v-sheet
              class="mt-3 rounded-lg pa-2 py-0 pa-md-5 py-md-3 pb-md-13 pb-13"
              min-height="400"
              outlined
              style="position: relative"
            >
              <v-sheet
                height="130"
                v-for="(item, i) in productsToShow"
                :key="i"
                flat
                class="px-3 my-5 rounded-lg elevation-0-5"
                color="white lighten-5"
              >
                <v-row class="pa-0">
                  <v-col cols="4" md="3">
                    <v-avatar size="100" tile class="rounded-lg">
                      <v-img :src="item.product.images[0]"></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col
                    cols="8"
                    md="9"
                    class="d-flex flex-column justify-space-between"
                  >
                    <div class="d-flex justify-space-between">
                      <div style="max-width: 87%">
                        <div class="h5 font-weight-bold text-truncate">
                          {{ item.product.title }}
                        </div>
                        <div class="body-2">
                          {{ item.product.category.name }}
                        </div>
                      </div>
                      <div>
                        <v-btn
                          icon
                          :ripple="false"
                          color="error"
                          @click="removeFromCart(i)"
                          ><v-icon>mdi-close</v-icon></v-btn
                        >
                      </div>
                    </div>
                    <div class="d-flex align-center">
                      <v-btn
                        color="blue darken-2"
                        icon
                        outlined
                        tile
                        class="rounded-lg mr-2"
                        small
                        :disabled="item.order.qte <= 1"
                        @click="item.order.qte = item.order.qte - 1"
                        ><v-icon>mdi-minus</v-icon></v-btn
                      >
                      <span class="subtitle-1"> {{ item.order.qte }} </span>
                      <v-btn
                        color="blue darken-2"
                        icon
                        outlined
                        tile
                        class="rounded-lg ml-2"
                        small
                        :disabled="item.order.qte >= 10"
                        @click="item.order.qte = item.order.qte + 1"
                        ><v-icon>mdi-plus</v-icon></v-btn
                      >
                      <v-spacer></v-spacer>
                      <div class="font-weight-bold">
                        ${{ item.order.qte * item.product.price }}
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-sheet>
              <div class="d-flex pagination" v-if="numOfPagination > 1">
                <v-spacer></v-spacer>
                <v-btn
                  depressed
                  tile
                  :disabled="layer <= 1"
                  class="rounded-lg remove-bg"
                  color="blue"
                  @click="layer -= 1"
                  icon
                  ><v-icon>mdi-chevron-left</v-icon></v-btn
                >
                <v-btn
                  depressed
                  tile
                  class="rounded-lg"
                  :class="n == layer ? '' : 'remove-bg'"
                  :color="n == layer ? 'blue' : ''"
                  @click="layer = n"
                  icon
                  v-model="layer"
                  v-for="n in numOfPagination"
                  :key="n"
                  >{{ n }}</v-btn
                >
                <v-btn
                  :disabled="layer >= numOfPagination"
                  depressed
                  tile
                  class="rounded-lg remove-bg"
                  color="blue"
                  @click="layer += 1"
                  icon
                  ><v-icon>mdi-chevron-right</v-icon></v-btn
                >
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="12" md="4">
            <v-sheet class="mt-3 rounded-lg pa-2 pa-md-5" height="400" outlined>
            </v-sheet>
          </v-col>
        </v-row>

        <div class="hidden-md-and-up">
          <div class="fixed-btn pa-3 d-flex">
            <div
              class="d-flex justify-center flex-column px-5 white--text mr-10"
            >
              <span class="body-2">Grand Total:</span>
              <span class="font-weight-medium"> ${{ shoppingCartTotal }} </span>
            </div>
            <v-btn
              depressed
              color="blue"
              large
              class="text-capitalize white--text flex-fill"
              >Checkout<v-icon right>mdi-chevron-right</v-icon></v-btn
            >
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      layer: 1,
      from: 0,
      to: 3,
    };
  },
  watch: {
    layer() {
      console.log(this.productsToShow);
    },
  },
  computed: {
    cartProducts() {
      return this.$store.getters.cartProducts;
    },
    shoppingCartTotal() {
      return this.$store.getters.cartTotal;
    },
    cartLength() {
      return this.cartProducts.length;
    },
    productsToShow() {
      let f = (this.layer - 1) * 3;
      let t = f + 3;
      console.log("from: " + f + " to : " + t);
      return this.cartProducts.slice(f, t);
    },
    numOfPagination() {
      let cl = this.cartProducts.length;
      let result = Math.ceil(cl / 3);
      return result;
    },
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    removeFromCart(item) {
      console.log(this.numOfPagination);
      this.$store.dispatch("removeFromCart", item);
    },
    sizes(type) {
      if (type == "Shoes") {
        return [5.5, 6, 6.5, 7, 7.5, 8, 8.5];
      } else {
        return ["S", "M", "L", "XL", "XXL"];
      }
    },
  },
};
</script>

<style scoped>
.elevation-0-5 {
  box-shadow: 0px 0px 30px -25px grey;
}

.fixed-btn {
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.pagination {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>