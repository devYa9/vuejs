<template>
  <v-menu
    v-model="shoppingCart"
    :close-on-content-click="false"
    eager
    offset-y
    :min-width="minWidth"
    max-width="360"
    transition="slide-x-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="remove-bg"
        icon
        color="blue darken-2"
        dark
        v-bind="attrs"
        v-on="on"
        :ripple="false"
      >
        <v-icon>mdi-cart{{ shoppingCart ? "" : "-outline" }}</v-icon>
        <v-badge
          v-if="cartProducts.length > 0"
          bordered
          :content="cartProducts.length"
          color="error"
          light
        ></v-badge>
      </v-btn>
    </template>

    <v-card :min-width="minWidth">
      <v-list class="py-1">
        <v-list-item class="py-0" dense>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold"
              ><v-icon>mdi-cart-outline</v-icon></v-list-item-title
            >
          </v-list-item-content>
          <v-list-item-action-text>
            <span class="body-2 grey--text text--darken-2"
              >Total:
              <span class="blue--text text--darken-2 font-weight-medium"
                >${{ shoppingCartTotal }}</span
              ></span
            >
          </v-list-item-action-text>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list v-if="cartProducts.length > 0">
        <v-list-item v-for="(item, index) in cartProducts" :key="index">
          <v-card width="100%" flat link class="pa-1">
            <v-row>
              <v-col cols="3">
                <v-avatar size="60" tile class="rounded-lg">
                  <v-img :src="item.product.images[0]"></v-img>
                </v-avatar>
              </v-col>
              <v-col cols="9" class="d-flex flex-column justify-center">
                <div class="d-flex align-center justify-space-between">
                  <div class="subtitle-1 d-block">
                    {{
                      item.product.title.length > 25
                        ? item.product.title.slice(0, 25) + "..."
                        : item.product.title
                    }}
                  </div>
                  <div class="">
                    <v-btn
                      x-small
                      icon
                      :ripple="false"
                      class="remove-bg pa-0"
                      @click="removeFromCart(index)"
                    >
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </div>
                </div>
                <div class="d-flex subtitle-2">
                  <div class="prix blue--text text--darken-2">
                    ${{ item.product.price }}
                  </div>
                  <div class="qte ml-10 grey--text text--darken-2">
                    Quantity:
                    <span class="">{{ item.order.qte }}</span>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-list-item>
      </v-list>
      <v-list v-else class="py-0">
        <v-list-item>
          <div class="body-2">No products yet !</div>
        </v-list-item>
      </v-list>
      <div v-if="cartProducts.length > 0">
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            dark
            depressed
            block
            class="body-2"
            color="#32e2a9"
            @click="shoppingCart = false"
            link
            to="/shop/checkout"
            >Checkout <v-icon>mdi-chevron-right</v-icon></v-btn
          >
        </v-card-actions>
      </div>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      shoppingCart: false,
    };
  },
  computed: {
    cartProducts() {
      return this.$store.getters.cartProducts;
    },
    shoppingCartTotal() {
      return this.$store.getters.cartTotal;
    },
    minWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xm":
          return "97%";
        case "sm":
          return "300";
        case "md":
          return "320";
        case "lg":
          return "320";
        case "xl":
          return "350";
        default:
          return "290";
      }
    },
  },
  methods: {
    removeFromCart(item) {
      this.$store.dispatch("removeFromCart", item);
    },
  },
};
</script>

<style scoped>
.v-menu__content {
  right: 12px !important  ;
  left: min(12px);
}

.d-ib {
  display: block !important;
  text-overflow: ellipsis;
}

.index-top {
  position: relative;
  z-index: 10;
}
</style>