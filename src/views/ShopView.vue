<template>
  <v-container class="mt-n5 pt-0 relative overflow-hidden page">
    <HeroSlider />
    <RecommendationContainer />
    <ShopByCategories />
    <DealsAndPromotions />
  </v-container>
</template>

<script>
import HeroSlider from "../components/shop/HeroSlider.vue";
import RecommendationContainer from "../components/shop/RecommendationContainer.vue";
import ShopByCategories from "../components/shop/ShopByCategories.vue";
import DealsAndPromotions from "../components/shop/DealsAndPromotions.vue";
export default {
  components: {
    HeroSlider,
    RecommendationContainer,
    ShopByCategories,
    DealsAndPromotions,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.relative {
  position: relative !important;
}
</style>