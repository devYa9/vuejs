<template>
  <v-row justify="center">
    <v-col
      lg="3"
      md="4"
      sm="6"
      cols="12"
      v-for="card in cards"
      :key="card.title"
    >
      <OfferCard :src="card.image" :title="card.title" />
    </v-col>
  </v-row>
</template>

<script>
import OfferCard from "./OfferCard.vue";
export default {
  components: { OfferCard },
  data() {
    return {
      cards: [
        {
          title: "Challenging Project",
          image: require("../../assets/icons/rocket.svg"),
        },
        {
          title: "Competitive Salary",
          image: require("../../assets/icons/wallet.svg"),
        },
        {
          title: "Play Zone",
          image: require("../../assets/icons/browser.svg"),
        },
        { title: "Strong Team", image: require("../../assets/icons/team.svg") },
        {
          title: "Decorative Office",
          image: require("../../assets/icons/folder.svg"),
        },
        {
          title: "Free Coffee & Snacks",
          image: require("../../assets/icons/coffee.png"),
        },
      ],
    };
  },
};
</script>

<style>
</style>