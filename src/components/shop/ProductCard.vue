<template>
  <div class="card mb-5">
    <v-card
      flat
      :ripple="false"
      class="pa-0"
      color="grey lighten-5"
      link
      :to="'/shop/product/' + product.id"
    >
      <v-row>
        <v-col cols="12" md="12" class="py-0 image-box">
          <v-avatar left min-height="150" tile size="100%">
            <v-img
              min-height="170"
              height="fit-content"
              max-height="250"
              width="100%"
              eager
              :src="product.images[0]"
            >
              <v-sheet
                v-if="showBadge"
                height="fit-content"
                color="orange"
                class="py-0 px-2 ma-2 white--text rounded-lg"
                ><span class="caption font-weight-bold"
                  >Best Seller</span
                ></v-sheet
              >
            </v-img>
          </v-avatar>
        </v-col>
        <v-col cols="12" md="12" class="pa-0 py-4">
          <v-row class="">
            <v-col cols="12" class="py-0 pt-md-2 mt-n1" order="2" order-md="1">
              <div class="px-md-8 px-5 caption">
                {{ product.category.name }}
              </div>
            </v-col>
            <v-col cols="12" class="py-0" order="1" order-md="2">
              <div
                class="
                  px-md-8
                  py-2
                  px-5
                  text-subtitle-2 text-md-subtitle-1
                  font-weight-bold
                  product-name
                  text-truncate
                "
              >
                {{ product.title }}
              </div>
            </v-col>
            <v-col cols="12" class="py-0" order="3">
              <div class="px-md-8 px-5 d-flex align-center flex-wrap">
                <v-rating
                  x-small
                  dense
                  color="yellow darken-2"
                  :value="5"
                  class="mr-1"
                ></v-rating>
                <div class="body-2 font-weight-black">4.9</div>
              </div>
            </v-col>
            <v-col cols="12" class="py-2 mt-2" order="4">
              <div
                class="px-md-8 px-5 d-flex justify-space-between align-center"
              >
                <v-btn
                  :ripple="false"
                  icon
                  color="error"
                  @click.prevent="favorite(product)"
                  class="remove-bg"
                  ><v-icon
                    >mdi-heart{{ isFavorite ? "" : "-outline" }}</v-icon
                  ></v-btn
                >
                <div class="text-md-h5 text-subtitle-2 font-weight-bold">
                  ${{ product.price }}
                </div>
                <v-btn
                  :ripple="false"
                  text
                  small
                  class="text-capitalize pe-0"
                  color="blue darken-2"
                  >More <v-icon>mdi-chevron-right</v-icon></v-btn
                >
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["product", "showBadge"],
  data() {
    return {
      title: this.product.title,
    };
  },
  methods: {
    favorite(product) {
      if (!this.isFavorite) {
        this.$store.dispatch("addToFavorite", product);
      } else {
        this.$store.dispatch("removeFromFavorite", product);
      }
    },
  },
  computed: {
    isFavorite() {
      let status = false;
      this.$store.getters.favoriteProducts.forEach((p) => {
        if (p.id == this.product.id) {
          status = true;
        }
      });
      return status;
    },
  },
};
</script>

<style scoped>
.bordered {
  border: 1px solid grey !important;
}

.product-name {
  line-height: 20px;
}
</style>