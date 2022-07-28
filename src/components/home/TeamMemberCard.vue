<template>
  <div class="card">
    <v-card color="transparent" flat>
      <v-row>
        <v-col cols="5" md="12" class="d-flex justify-center">
          <v-avatar :size="size">
            <v-img :src="profileImage(profile)"></v-img>
          </v-avatar>
          <div class="avatar-bg hidden-md-and-down"></div>
        </v-col>
        <v-col
          cols="7"
          md="12"
          class="
            d-flex
            align-md-center
            justify-start justify-md-center
            flex-column
            index-top
          "
        >
          <div class="text-h6 blue--text text--darken-2">{{ name }}</div>
          <div class="subtitle-2 grey--text text--darken-2 font-italic">
            {{ title }}
          </div>
          <div
            class="
              caption
              text-start text-md-center
              grey--text
              text--darken-3 text-capitalize
              mt-4
            "
          >
            Lorem, ipsum dolor sit amet adipisicing elit. Asperiores, nobis! and
            some other !
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["name", "title", "profile"],
  methods: {
    profileImage(link) {
      return require("../../assets/team/" + link);
    },
  },
  computed: {
    size() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 130;
        case "sm":
          return 130;
        case "md":
          return 150;
        case "lg":
          return 150;
        case "xl":
          return 170;
      }
    },
  },
};
</script>

<style scoped>
.v-avatar {
  position: relative;
  z-index: 1;
  border: 7px solid #1976d2;
}
.avatar-bg {
  position: absolute;
  width: 140px;
  height: 140px;
  transform: scale(2.6) rotate(0deg) translate(-2%, 2%);
  opacity: 0.3;
  z-index: 0;

  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;utf8, %3Csvg width=%22100%25%22 height=%22100%25%22 viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 %3E %3Cdefs%3E %3CclipPath id=%22shape%22%3E %3Cpath fill=%22currentColor%22 d=%22M647%2C663.5Q311%2C827%2C291%2C465.5Q271%2C104%2C627%2C302Q983%2C500%2C647%2C663.5Z%22%3E%3C%2Fpath%3E %3C%2FclipPath%3E %3C%2Fdefs%3E %3Cg clip-path=%22url(%23shape)%22%3E %3Cpath fill=%22%23d4d6f4%22 d=%22M647%2C663.5Q311%2C827%2C291%2C465.5Q271%2C104%2C627%2C302Q983%2C500%2C647%2C663.5Z%22 %2F%3E %3C%2Fg%3E %3C%2Fsvg%3E");
}

.index-top {
  position: relative;
  z-index: 2;
}
</style>