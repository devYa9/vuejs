<template>
  <div class="card">
    <v-card
      :min-height="height"
      flat
      class="py-5 py-md-6 px-4 d-flex flex-column text-center align-center"
    >
      <div class="icon-div rounded-circle">
        <div>
          <v-icon
            class="error--text pa-2 rounded-circle custom-border"
            x-large
            >{{ icon }}</v-icon
          >
          <v-badge dot bordered color="error"></v-badge>
        </div>
      </div>
      <div class="text-h6 mt-5 blue--text text--darken-2">
        {{ title }}
      </div>
      <div class="description">
        <p
          class="
            mt-4
            caption
            font-weight-bold
            grey--text
            text--darken-1 text-center
          "
        >
          {{ description }}
        </p>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "icon"],
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return null;
        case "sm":
          return 270;
        case "md":
          return 350;
        case "lg":
          return 300;
        case "xl":
          return 300;
      }
    },
  },
};
</script>

<style scoped>
.icon-div {
  width: fit-content;
  border: 4px solid #1976d2;
}

.v-badge {
  transform: translateY(-20px) translateX(-8px) scale(1.1);
}

.v-card {
  box-shadow: 0px 0px 20px -7px rgb(201, 201, 201) !important;
  border: 1px solid transparent;
  transition: all 0.3s;
  cursor: pointer;
}

.v-card:hover {
  border-color: #ff5252;
}
</style>