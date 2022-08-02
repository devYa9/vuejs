<template>
  <v-container class="mt-n5 pt-0 relative overflow-hidden">
    <HeroSlider />
    <RecommendationContainer />
    <ShopByCategories />
  </v-container>
</template>

<script>
import HeroSlider from "../components/shop/HeroSlider.vue";
import RecommendationContainer from "../components/shop/RecommendationContainer.vue";
import ShopByCategories from "../components/shop/ShopByCategories.vue";
export default {
  components: {
    HeroSlider,
    RecommendationContainer,
    ShopByCategories,
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