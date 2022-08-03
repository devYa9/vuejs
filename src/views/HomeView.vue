<template>
  <v-container class="pb-15 page">
    <FirstSection @loaded="sectionIsLoaded" />
    <LoaderView v-if="!isLoaded" />

    <div v-if="isLoaded">
      <TitleDescription
        title="What We "
        coloredWord="Do?"
        :description="description"
        align="center"
        size="subtitle-2"
        class="mb-md-8 mb-4"
        width="p"
      />

      <CardsContainer :cards="cards" />

      <WhySection />

      <OurSkills />

      <TitleDescription
        title="What We Are "
        coloredWord="Offering?"
        :description="description"
        align="center"
        size="subtitle-2"
        class="mb-md-0 mb-4"
        width="p"
      />

      <OffersSection />

      <TitleDescription
        title="SoftBox Creative "
        coloredWord="Team"
        :description="description"
        align="center"
        size="subtitle-2"
        class="mb-md-0 mb-4 mt-15"
        width="p"
      />

      <TeamSection />

      <TitleDescription
        title="Our valuable "
        coloredWord="Client"
        :description="description"
        align="center"
        size="subtitle-2"
        class="mb-md-0 mb-4 mt-15"
        width="p"
      />

      <ClientsSection />

      <QuoteSection />

      <TitleDescription
        title="Get our latest "
        coloredWord="Newsetter"
        description="Offer your business with the best assistance for growth."
        align="center"
        size="subtitle-2"
        class="mb-md-0 mb-4 mt-15"
        width="p"
      />

      <NewsletterInput />
    </div>
  </v-container>
</template>

<script>
import LoaderView from "@/components/LoaderView.vue";
import FirstSection from "@/components/home/FirstSection";
import TitleDescription from "@/components/home/TitleDescription.vue";
import CardsContainer from "@/components/home/CardsContainer.vue";
import WhySection from "@/components/home/WhySection.vue";
import OurSkills from "@/components/home/OurSkills.vue";
import OffersSection from "@/components/home/OffersSection.vue";
import TeamSection from "@/components/home/TeamSection.vue";
import ClientsSection from "@/components/home/ClientsSection.vue";
import QuoteSection from "@/components/home/QuoteSection.vue";
import NewsletterInput from "@/components/home/NewsletterInput.vue";

export default {
  components: {
    FirstSection,
    TitleDescription,
    CardsContainer,
    WhySection,
    OurSkills,
    OffersSection,
    TeamSection,
    ClientsSection,
    QuoteSection,
    NewsletterInput,
    LoaderView,
  },
  data() {
    return {
      isLoaded: false,
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
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    sectionIsLoaded() {
      console.log("section is loaded");
      this.isLoaded = true;
    },
  },
};
</script>

<style scoped>
</style>
