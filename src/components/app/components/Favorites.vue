<template>
  <div>
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
          @click="favIcon = false"
        >
          <v-icon>mdi-heart{{ favoritesCart ? "" : "-outline" }}</v-icon>
          <v-badge
            v-if="favoriteProducts.length > 0 && favIcon"
            :content="favoriteProducts.length"
            bordered
            color="error"
            light
            dot
            overlap
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
          <v-list-item v-for="product in favoriteProducts" :key="product.id">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      favoritesCart: false,
      favIcon: false,
      favoriteCount: 0,
    };
  },
  watch: {
    favoriteProductsStore(newValue) {
      this.favoriteCount = newValue.length;
    },
    favoriteCount(n, o) {
      if (n > o) {
        this.favIcon = true;
      }
    },
  },
  computed: {
    limitFavorites() {
      return this.$store.getters.favoriteProducts.length > 3;
    },
    favoriteProductsStore() {
      return this.$store.getters.favoriteProducts;
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
    removeFromFavorites(product) {
      this.$store.dispatch("removeFromFavorite", product);
    },
  },
};
</script>

<style>
</style>