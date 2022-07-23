<template>
  <v-container>
    <FirstSection />

    <TitleDescription
      title="What We "
      coloredWord="Do?"
      :description="description"
      align="center"
      size="subtitle-2"
      class="mb-md-8 mb-4"
    />

    <CardsContainer :cards="cards" />

    <WhySection />
  </v-container>
</template>

<script>
import FirstSection from "@/components/home/FirstSection";
import TitleDescription from "@/components/home/TitleDescription.vue";
import CardsContainer from "@/components/home/CardsContainer.vue";
import WhySection from "@/components/home/WhySection.vue";

export default {
  components: { FirstSection, TitleDescription, CardsContainer, WhySection },
  data() {
    return {
      cards: [
        {
          title: "Consultation",
          description:
            "Software consulting services help plan and implement software improvements as well as staff software development projects with skilled resources.",
          icon: "mdi-target-account",
        },
        {
          title: "Brand & Identity",
          description:
            "A strong brand identity strengthens a company's popularity and presence in a competitive market. Build loyalty and trust, and make a brand memorable.",
          icon: "mdi-view-dashboard-outline",
        },
        {
          title: "Web Design",
          description:
            "Create a high performance websites to help brands attract, engage and convert the audience.",
          icon: "mdi-monitor-edit",
        },
        {
          title: "Apps Development",
          description:
            "Create fully functional and high performing applications. Design and build applications for a variety of platforms and devices.",
          icon: "mdi-cellphone-cog",
        },
      ],
      description:
        "Softbox One of the best Software Development Company, SoftBox is at the forefront as the most innovative web developement company. We Offer ",
    };
  },
};
</script>

<style scoped>
</style>
