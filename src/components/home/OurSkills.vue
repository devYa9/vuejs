<template>
  <div class="why mt-md-15 mt-3 pt-md-10 pb-0">
    <v-row class="image-cn">
      <v-col order="2" order-md="2" class="py-10" md="6" cols="12">
        <v-img class="" width="100%" src="@/assets/image-3.png"></v-img>
      </v-col>
      <v-col
        order="1"
        order-md="1"
        class="col-why px-md-5 px-4"
        md="6"
        cols="12"
      >
        <title-description
          title="We Have Strong "
          coloredWord="Skill"
          align="center text-md-start"
          size="caption text-sm-center mt-6"
          description="Softbox One of the best Software Development Company, SoftBox is at the forefront as the most innovative web developement company. Our cost efficient and structured teamwork justifies our position. Our clients count on our offshore business solutions on a regular basis. From concept design to development, testing & implementation. "
        />
        <div
          class="grey--text text--darken-1 pb-5"
          v-for="skill in skills"
          :key="skill.name"
        >
          <div
            class="
              body-2
              blue--text
              d-flex
              justify-space-between
              text--darken-2
              font-weight-medium
              pb-1
            "
          >
            <div>{{ skill.name }}</div>
            <div class="grey--text font-weight-light caption">
              {{ skill.progress }}%
            </div>
          </div>
          <v-progress-linear
            class="ma-0 pa-0"
            color="error"
            rounded
            height="7"
            :value="skill.progress"
          >
          </v-progress-linear>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TitleDescription from "./TitleDescription.vue";
export default {
  components: { TitleDescription },
  data() {
    return {
      skills: [
        { name: "User Interface Design", progress: 95 },
        { name: "User Experience", progress: 86 },
        { name: "Market Analysis", progress: 90 },
        { name: "UI/UX Design", progress: 80 },
      ],
    };
  },
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