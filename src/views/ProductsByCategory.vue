<template>
  <div>
    <LoaderView v-if="!isLoaded" />
    <v-container v-if="isLoaded" class="overflow-hidden">
      <div v-if="isCategoryExists">
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
      </div>
    </v-container>
    <div v-if="!isCategoryExists && isLoaded">
      <NotFound name="Category" />
    </div>
  </div>
</template>

<script>
import LoaderView from "../components/LoaderView.vue";
import ProductsContainer from "../components/shop/ProductsContainer.vue";
import NotFound from "../components/NotFound.vue";
export default {
  components: { ProductsContainer, LoaderView, NotFound },
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
    isLoaded() {
      return this.$store.state.isLoaded;
    },
    isCategoryExists() {
      if (this.isLoaded) {
        let len = this.$store.getters.productsByCategory(
          this.categoryId
        ).length;

        console.log(this.$store.getters.products);
        if (len > 0) {
          return true;
        } else {
          return false;
        }
      }
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
</style>