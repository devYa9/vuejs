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
          ><v-icon left>mdi-arrow-left</v-icon>Back to shopping</v-btn
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
              v-if="cartLength == 0"
              height="400"
              class="d-flex flex-column align-center justify-center"
            >
              <div>No Products Yet !</div>
              <div class="mt-5">
                <v-btn @click="goBack" dark color="blue" depressed
                  >Continue Shopping
                  <v-icon right>mdi-arrow-right</v-icon></v-btn
                >
              </div>
            </v-sheet>
            <v-sheet
              v-else
              class="mt-3 rounded-lg pa-2 py-0 pa-md-5 py-md-3"
              :class="numOfPagination > 1 ? 'pb-md-13 pb-13' : ''"
              :min-height="numOfPagination > 1 ? 500 : 'fit-content'"
              outlined
              style="position: relative"
            >
              <v-sheet
                height="130"
                v-for="item in productsToShow"
                :key="item.order.id"
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
                          @click="removeFromCart(item.order.id)"
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
            <v-sheet
              v-if="cartLength != 0"
              class="mt-3 rounded-lg pa-5 d-flex flex-column"
              :height="$vuetify.breakpoint.mdAndUp ? 400 : 360"
              outlined
            >
              <div class="grey--text text--darken-2 font-weight-bold">
                Order Summary
              </div>
              <div class="mt-5">
                <div class="d-flex align-center justify-space-between">
                  <span>Subtotal</span>
                  <span>${{ shoppingCartTotal }}</span>
                </div>
                <div></div>
                <div class="d-flex align-center justify-space-between mt-3">
                  <span>Delivery</span>
                  <span>$0</span>
                </div>
              </div>
              <div class="d-flex coupon">
                <v-text-field
                  class="mt-5"
                  solo
                  hide-details="true"
                  color="blue"
                  dense
                  placeholder="Coupons"
                  outlined
                  prepend-inner-icon="mdi-ticket-percent-outline"
                  flat
                >
                </v-text-field>
                <v-btn
                  absolute
                  small
                  outlined
                  color="blue"
                  depressed
                  class="coupon-btn text-capitalize"
                  >Apply</v-btn
                >
              </div>
              <v-spacer></v-spacer>
              <v-divider></v-divider>
              <div
                class="
                  d-flex
                  align-center
                  justify-space-between
                  mt-5
                  font-weight-bold
                "
              >
                <span>Total</span>
                <span>${{ shoppingCartTotal }}</span>
              </div>
              <div class="mt-5">
                <v-btn
                  block
                  large
                  depressed
                  color="blue"
                  class="white--text text-capitalize"
                  >Checkout & Pay
                  <v-icon right>mdi-chevron-right</v-icon></v-btn
                >
              </div>
            </v-sheet>
            <div class="mt-2" v-if="cartLength != 0">
              <v-btn
                block
                text
                @click="goBack"
                depressed
                color="grey darken-2"
                class="white--text text-capitalize"
              >
                <v-icon left>mdi-arrow-left</v-icon>
                Back To Shopping
              </v-btn>
            </div>
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
              >Checkout & Pay<v-icon right>mdi-chevron-right</v-icon></v-btn
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
    removeFromCart(id) {
      console.log(this.numOfPagination);
      this.$store.dispatch("removeFromCart", id);
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
.coupon {
  position: relative;
}

.coupon-btn {
  right: 6px;
  top: 50%;
  transform: translateY(-15%);
}

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