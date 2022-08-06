<template>
  <div>
    <div class="hidden-lg-and-up my-4 py-2 mt-3 font-weight-bold">
      Recommendations for you 👇
    </div>
    <div class="recommendation my-5 my-md-7 px-md-5 error lighten-5">
      <v-row>
        <v-col
          cols="12"
          sm="4"
          lg="3"
          v-for="box in boxes"
          :key="box.title"
          :class="{ 'hidden-md-and-down': box.isUser }"
          class="pa-2 overflow-hidden"
        >
          <RecommendationCard
            :title="box.title"
            :desc="box.desc"
            :image="box.image"
            :isUser="box.isUser"
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import RecommendationCard from "./RecommendationCard.vue";
export default {
  components: { RecommendationCard },
  data() {
    return {
      boxes: [
        {
          image: "assets/team/1.jpg",
          title: "Hi, Yassine recommendations for you 👉",
          desc: "",
          isUser: true,
        },
        {
          image: "assets/products/box.png",
          title: "Your Orders",
          desc: "View your orders",
          isUser: false,
        },
        {
          image: "assets/products/headset.png",
          title: "Electronics",
          desc: "Big Sale 30%",
          isUser: false,
        },
        {
          image: "assets/products/pressure-cooker.png",
          title: "Home & Kitchen",
          desc: "Big Sale 40%",
          isUser: false,
        },
      ],
    };
  },
};
</script>

<style>
</style>