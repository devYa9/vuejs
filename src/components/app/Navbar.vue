<template>
  <nav>
    <v-container fluid>
      <v-app-bar app flat width="100%" color="white">
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          color="blue darken-2"
          class="hidden-md-and-up"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>
          <span class="font-weight-bold blue--text text--darken-2">
            <v-icon color="blue darken-2" large>mdi-thought-bubble</v-icon>
            SoftBox
          </span>
        </v-toolbar-title>

        <v-item-group class="ml-12 hidden-sm-and-down">
          <v-item v-for="link in links" :key="link.name">
            <v-btn
              link
              rounded
              text
              class="link text-capitalize ml-5"
              :to="link.path"
              active-class="active"
            >
              {{ link.name }}
            </v-btn>
          </v-item>
        </v-item-group>
        <v-spacer></v-spacer>
        <v-list class="pa-0">
          <v-btn icon color="blue darken-2">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

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
                <v-list-item
                  v-for="item in cartProducts"
                  :key="item.product.id"
                >
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
                              @click="removeFromCart(item)"
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
                    to="/checkout"
                    >Checkout <v-icon>mdi-chevron-right</v-icon></v-btn
                  >
                </v-card-actions>
              </div>
            </v-card>
          </v-menu>
          <v-menu
            v-model="favoritesCart"
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
                <v-icon>mdi-heart{{ favoritesCart ? "" : "-outline" }}</v-icon>
                <v-badge
                  v-if="favoriteProducts.length > 0"
                  :content="favoriteProducts.length"
                  bordered
                  color="error"
                  light
                ></v-badge>
              </v-btn>
            </template>

            <v-card :min-width="minWidth">
              <v-list class="py-1">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-bold"
                      >Favorites</v-list-item-title
                    >
                  </v-list-item-content>
                  <v-list-item-action-text>
                    <span class="caption"
                      >{{ favoriteProducts.length }}
                      {{ favoriteProducts.length > 1 ? "Items" : "Item" }}</span
                    >
                  </v-list-item-action-text>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list v-if="favoriteProducts.length > 0">
                <v-list-item
                  v-for="product in favoriteProducts"
                  :key="product.id"
                >
                  <v-card
                    width="100%"
                    flat
                    link
                    class="pa-1"
                    :to="'/shop/product/' + product.id"
                  >
                    <v-row>
                      <v-col cols="3">
                        <v-avatar size="60" tile class="rounded-lg">
                          <v-img :src="product.images[0]"></v-img>
                        </v-avatar>
                      </v-col>
                      <v-col cols="7">
                        <div class="subtitle-2 text-truncate">
                          {{
                            product.title.length > 25
                              ? product.title.slice(0, 25) + "..."
                              : product.title
                          }}
                        </div>
                        <div class="caption">
                          {{ product.category.name }}
                        </div>
                      </v-col>
                      <v-col cols="2">
                        <div
                          class="d-flex align-center justify-center"
                          style="height: 100%"
                        >
                          <v-btn
                            icon
                            :ripple="false"
                            @click.prevent="removeFromFavorites(product)"
                            color="error"
                            class="index-top"
                            ><v-icon>mdi-heart</v-icon></v-btn
                          >
                        </div>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-list-item>
              </v-list>
              <v-list v-else class="py-0">
                <v-list-item>
                  <div class="body-2">
                    No <v-icon small color="error">mdi-heart-outline</v-icon>
                    yet !
                  </div>
                </v-list-item>
              </v-list>
              <div class="text-end" v-if="limitFavorites">
                <v-btn
                  text
                  plain
                  color="grey darken-4"
                  class="text-capitalize"
                  :ripple="false"
                  >See more <v-icon right>mdi-arrow-right</v-icon></v-btn
                >
              </div>
            </v-card>
          </v-menu>
        </v-list>
      </v-app-bar>

      <v-navigation-drawer
        class="hidden-md-and-up"
        v-resize="drawerSet"
        fixed
        v-model="drawer"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              <span class="font-weight-bold blue--text text--darken-2">
                <v-icon color="blue darken-2" large>mdi-thought-bubble</v-icon>
                SoftBox
              </span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <v-list dense nav>
          <v-list-item
            v-for="link in links"
            :key="link.name"
            link
            :to="link.path"
          >
            <v-list-item-icon>
              <v-icon color="blue darken-2">{{ link.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="link">{{
                link.name
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-container>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: "Home", path: "/", icon: "mdi-home-outline" },
        { name: "Shop", path: "/shop", icon: "mdi-cart-outline" },
        { name: "Blog", path: "/blog", icon: "mdi-alpha-b-box" },
        { name: "Contact", path: "/contact", icon: "mdi-email-outline" },
      ],
      drawer: false,
      shoppingCart: false,
      favoritesCart: false,
    };
  },
  computed: {
    limitFavorites() {
      return this.$store.getters.favoriteProducts.length > 3;
    },
    favoriteProductsStore() {
      return this.$store.getters.favoriteProducts;
    },
    cartProducts() {
      return this.$store.getters.cartProducts;
    },
    shoppingCartTotal() {
      return this.$store.getters.cartTotal;
    },
    favoriteProducts() {
      let l = this.favoriteProductsStore.length;
      let p = this.favoriteProductsStore.map((x) => x);
      if (l > 3) {
        p = p.splice(l - 3, l).reverse();
      } else {
        p = this.favoriteProductsStore.reverse();
      }
      return p;
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
    drawerSet() {
      switch (this.$vuetify.breakpoint.name) {
        case "md":
          this.drawer = false;
        case "lg":
          this.drawer = false;
        case "xl":
          this.drawer = false;
      }
    },
    removeFromFavorites(product) {
      this.$store.dispatch("removeFromFavorite", product);
    },
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

.link {
  color: #1976d2 !important;
}

.active {
  color: #ff5252 !important;
}
.active::before {
  background: none !important;
  color: #ff5252 !important;
}

.v-list-item--active {
  color: #ff5252 !important;
  border-left: 3px solid #ff5252 !important;
  border-radius: 0 !important;
}

.v-list-item--active .v-list-item__icon i {
  color: #ff5252 !important;
}

.v-list-item {
  border-left: 3px solid transparent;
}

.v-list-item-title {
  color: #1976d2 !important;
}

.v-list-item--active .v-list-item__title {
  color: #ff5252 !important;
}

.v-list-item--active::before {
  background-color: white;
}
</style>