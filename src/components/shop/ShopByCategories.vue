<template>
  <div>
    <div
      class="
        font-weight-bold
        mt-10
        mb-3
        d-flex
        justify-space-between
        align-center
      "
    >
      <div class="">Shop by categories</div>
      <div>
        <v-btn
          :ripple="false"
          plain
          text
          color="black"
          class="text-capitalize pr-0"
          >All Departments <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="catigories">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          lg="3"
          v-for="category in categories"
          :key="category.name"
        >
          <CategoryCard
            :image="category.image"
            :name="category.name"
            :to="category.to"
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import CategoryCard from "./CategoryCard.vue";
export default {
  data() {
    return {
      categories: [
        {
          name: "Beauty picks",
          image: "assets/products/webp/beauty-picks.webp",
          to: "/shop/category/1",
        },
        {
          name: "Computer & Accessories",
          image: "assets/products/webp/macbook.webp",
          to: "/shop/category/2",
        },
        {
          name: "Video games",
          image: "assets/products/webp/vr.webp",
          to: "/shop/category/3",
        },
        {
          name: "Shoes",
          image: "assets/products/webp/shoes.webp",
          to: "/shop/category/4",
        },
      ],
    };
  },
  components: {
    CategoryCard,
  },
};
</script>

<style>
</style>