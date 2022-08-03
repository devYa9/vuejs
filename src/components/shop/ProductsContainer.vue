<template>
  <div class="mb-5">
    <div
      class="
        font-weight-bold
        mt-10
        mb-5
        d-flex
        justify-space-between
        align-center
      "
    >
      <div class="">Last viewed</div>
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
          <ProductCard :product="product" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  props: ["id"],
  data() {
    return {
      products: [],
    };
  },
  components: { ProductCard },
  mounted() {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((res) => (this.products = res))
      .catch((err) => console.log(err));
  },
  computed: {
    productsToShow() {
      let products = this.products.filter((p) => p.category.id == this.id);
      return products.splice(8, 4);
    },
  },
};
</script>

<style>
</style>