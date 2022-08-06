<template>
  <v-container class="mt-n5 pt-0 relative overflow-hidden page">
    <HeroSlider @loaded="sectionIsLoaded" />
    <LoaderView v-if="!isLoaded" />

    <div v-if="isLoaded">
      <RecommendationContainer />
      <ShopByCategories />
      <DealsAndPromotions />
      <ProductsContainer
        name="Last viewed"
        :showBadge="false"
        id="4"
        :limit="4"
        :showMore="true"
      />
      <ProductsContainer
        name="Top Sellers"
        :showBadge="true"
        id="3"
        :showMore="true"
        :limit="4"
      />
    </div>
  </v-container>
</template>

<script>
import HeroSlider from "@/components/shop/HeroSlider.vue";
import RecommendationContainer from "@/components/shop/RecommendationContainer.vue";
import ShopByCategories from "@/components/shop/ShopByCategories.vue";
import DealsAndPromotions from "@/components/shop/DealsAndPromotions.vue";
import ProductsContainer from "@/components/shop/ProductsContainer.vue";
import LoaderView from "@/components/LoaderView.vue";

export default {
  data() {
    return {
      isLoaded: false,
    };
  },
  components: {
    HeroSlider,
    RecommendationContainer,
    ShopByCategories,
    DealsAndPromotions,
    ProductsContainer,
    LoaderView,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    sectionIsLoaded() {
      this.isLoaded = true;
    },
  },
};
</script>

<style scoped>
.relative {
  position: relative !important;
}
</style>