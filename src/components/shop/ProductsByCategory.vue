<template>
  <v-container class="overflow-hidden">
    <div class="text-center mb-15">
      <h1 class="text-h4 blue--text text--darken-2 font-weight-bold">
        <span class="error--text">-</span>{{ nameCategory
        }}<span class="error--text">-</span>
      </h1>
    </div>
    <ProductsContainer
      :id="categoryId"
      :limit="0"
      :showBadge="false"
      :showMore="false"
    />
  </v-container>
</template>

<script>
import ProductsContainer from "./ProductsContainer.vue";
export default {
  components: { ProductsContainer },
  data() {
    return {};
  },
  computed: {
    categoryId() {
      return this.$route.params.id;
    },
    nameCategory() {
      let name = this.$store.getters.productsByCategory(this.categoryId)[0][
        "category"
      ]["name"];
      return name;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
</style>