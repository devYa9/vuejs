<template>
  <div class="why mt-sm-15 mt-10 py-sm-15">
    <div class="blob-sheet hidden-sm-and-down"></div>
    <v-row class="image-cn">
      <v-col order="2" order-md="1" class="py-10" md="6" cols="12">
        <v-img
          class="elevation-4 rounded-md"
          :aspect-ratio="16 / 9"
          src="@/assets/team.jpg"
        ></v-img>
      </v-col>
      <v-col
        order="1"
        order-md="2"
        class="col-why px-md-15 px-4"
        md="6"
        cols="12"
      >
        <title-description
          title="Why Choose "
          coloredWord="SoftBox?"
          align="center text-md-start"
          size="caption text-justify text-sm-center"
          description="Softbox One of the best Software Development Company, SoftBox is at the forefront as the most innovative web developement company. Our cost efficient and structured teamwork justifies our position. Our clients count on our offshore business solutions on a regular basis. From concept design to development, testing & implementation. Our team is here to support and guide you every step of"
        />
        <v-row
          class="ml-sm-8 ml-md-0 mt-sm-n8 mt-n10 grey--text text--darken-1"
        >
          <v-col cols="6" class="step">
            <v-icon color="success">mdi-checkbox-marked-circle-outline</v-icon>
            <span class="caption ml-3">Team Work</span>
          </v-col>
          <v-col cols="6" class="step">
            <v-icon color="success">mdi-checkbox-marked-circle-outline</v-icon>
            <span class="caption ml-3">Good Invironment</span>
          </v-col>
          <v-col cols="6" class="step mt-lg-n15">
            <v-icon color="success">mdi-checkbox-marked-circle-outline</v-icon>
            <span class="caption ml-3">Implementation</span>
          </v-col>
          <v-col cols="6" class="step mt-lg-n15">
            <v-icon color="success">mdi-checkbox-marked-circle-outline</v-icon>
            <span class="caption ml-3">Work Freedom</span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TitleDescription from "./TitleDescription.vue";
export default {
  components: { TitleDescription },
  computed: {
    overflow() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "hidden";
        case "sm":
          return "hidden";
        case "md":
          return "visible";
      }
    },
  },
};
</script>

<style scoped>
.v-icon {
  background: linear-gradient(to top, #1e88e5 0%, #18ffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.why {
  position: relative;
}

.image-cn {
  overflow: hidden;
}

.col-why {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.blob-sheet {
  height: 500px;
  width: 90%;
  background-color: #f7fbff;
  position: absolute;
  right: -15%;
  top: 0;
  border-radius: 69% 35% 22% 70% / 66% 47% 60% 40%;
  transform: rotate(-0deg);
  z-index: 0;
}
</style>