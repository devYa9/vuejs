<template>
  <div class="mb-5">
    <div
      v-if="showMore"
      class="
        font-weight-bold
        mt-10
        mb-5
        d-flex
        justify-space-between
        align-center
      "
    >
      <div class="">{{ name }}</div>
      <div>
        <v-btn
          :ripple="false"
          plain
          text
          color="black"
          class="text-capitalize pr-0"
          >View more<v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="products">
      <v-row v-if="products">
        <v-col
          cols="6"
          sm="6"
          lg="3"
          v-for="product in productsToShow"
          :key="product.id"
        >
          <ProductCard :showBadge="showBadge" :product="product" />
        </v-col>
      </v-row>
      <v-row v-if="!isLoaded">
        <v-col cols="6" sm="6" lg="3" v-for="n in 4" :key="n">
          <v-sheet color="grey lighten-4">
            <v-skeleton-loader
              class="mx-auto"
              width="100%"
              type="card"
            ></v-skeleton-loader>
          </v-sheet>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  props: ["id", "name", "showBadge", "limit", "showMore"],
  data() {
    return {
      products: [],
    };
  },
  components: { ProductCard },
  computed: {
    productsToShow() {
      let products = this.$store.getters.productsByCategory(this.id);
      if (this.limit != 0) {
        products = products.splice(0, this.limit);
      }
      return products;
    },
    isLoaded() {
      return this.$store.state.isLoaded;
    },
  },
};
</script>

<style>
</style>