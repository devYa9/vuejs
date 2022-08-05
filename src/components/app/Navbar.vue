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
            :nudge-width="200"
            offset-x
            offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon color="blue darken-2" dark v-bind="attrs" v-on="on">
                <v-icon>mdi-cart{{ shoppingCart ? "" : "-outline" }}</v-icon>
              </v-btn>
            </template>

            <v-card min-width="300">
              <v-list class="py-1">
                <v-list-item class="py-0">
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-bold"
                      >Shoping Cart</v-list-item-title
                    >
                  </v-list-item-content>
                  <v-list-item-action-text>
                    <span class="caption">0 Items</span>
                  </v-list-item-action-text>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list v-if="favoriteProduct">
                <v-list-item>
                  <v-card width="100%" flat link class="pa-1">
                    <v-row>
                      <v-col cols="3">
                        <v-avatar size="60" tile class="rounded-lg">
                          <v-img :src="favoriteProduct.images[0]"></v-img>
                        </v-avatar>
                      </v-col>
                      <v-col cols="9">
                        <div class="subtitle-2">
                          {{ favoriteProduct.title }}
                        </div>
                        <div class="caption">
                          {{ favoriteProduct.category.name }}
                        </div>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-list-item>
                <v-list-item>
                  <v-card width="100%" flat link class="pa-1">
                    <v-row>
                      <v-col cols="3">
                        <v-avatar size="60" tile class="rounded-lg">
                          <v-img :src="favoriteProduct.images[0]"></v-img>
                        </v-avatar>
                      </v-col>
                      <v-col cols="9">
                        <div class="subtitle-2">
                          {{ favoriteProduct.title }}
                        </div>
                        <div class="caption">
                          {{ favoriteProduct.category.name }}
                        </div>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-list-item>
              </v-list>
              <v-list v-else class="py-0">
                <v-list-item>
                  <div class="body-2">Empty</div>
                </v-list-item>
              </v-list>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  dark
                  text
                  small
                  class="body-2 text-capitalize"
                  @click="shoppingCart = false"
                  color="grey"
                >
                  Close
                </v-btn>
                <v-btn
                  dark
                  depressed
                  small
                  class="body-2 text-capitalize px-6"
                  color="#32e2a9"
                  @click="shoppingCart = false"
                  >Checkout</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-menu>
          <v-menu
            v-model="favoritesCart"
            :close-on-content-click="false"
            :nudge-width="200"
            offset-x
            offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon color="blue darken-2" dark v-bind="attrs" v-on="on">
                <v-icon>mdi-heart{{ favoritesCart ? "" : "-outline" }}</v-icon>
              </v-btn>
            </template>

            <v-card min-width="300">
              <v-list class="py-1">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-bold"
                      >Favorites</v-list-item-title
                    >
                  </v-list-item-content>
                  <v-list-item-action-text>
                    <span class="caption">0 Items</span>
                  </v-list-item-action-text>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list v-if="favoriteProduct">
                <v-list-item>
                  <v-card width="100%" flat link class="pa-1">
                    <v-row>
                      <v-col cols="3">
                        <v-avatar size="60" tile class="rounded-lg">
                          <v-img :src="favoriteProduct.images[0]"></v-img>
                        </v-avatar>
                      </v-col>
                      <v-col cols="9">
                        <div class="subtitle-2">
                          {{ favoriteProduct.title }}
                        </div>
                        <div class="caption">
                          {{ favoriteProduct.category.name }}
                        </div>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-list-item>
                <v-list-item>
                  <v-card width="100%" flat link to="/p" class="pa-1">
                    <v-row>
                      <v-col cols="3">
                        <v-avatar size="60" tile class="rounded-lg">
                          <v-img :src="favoriteProduct.images[0]"></v-img>
                        </v-avatar>
                      </v-col>
                      <v-col cols="7">
                        <div class="subtitle-2 text-truncate">
                          {{ favoriteProduct.title }}
                        </div>
                        <div class="caption">
                          {{ favoriteProduct.category.name }}
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
                            @click.stop="false"
                            small
                            color="error"
                            ><v-icon>mdi-heart</v-icon></v-btn
                          >
                        </div>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-list-item>
                <div class="text-end">
                  <v-btn
                    text
                    plain
                    color="grey darken-4"
                    class="text-capitalize"
                    :ripple="false"
                    >See more <v-icon right>mdi-arrow-right</v-icon></v-btn
                  >
                </div>
              </v-list>
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
    favoriteProduct() {
      return this.$store.getters.favorite;
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
  },
};
</script>

<style scoped>
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