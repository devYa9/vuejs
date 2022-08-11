<template>
  <div>
    <v-snackbar
      color="green accent-4"
      app
      v-model="active"
      :timeout="2500"
      right
    >
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color=""
          icon
          outlined
          text
          v-bind="attrs"
          @click="closeSnackbar"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      state: false,
      text: "",
    };
  },
  computed: {
    activeSnackbar() {
      return this.$store.state.snackbar;
    },
    snackbar() {
      return this.$store.getters.snackbarOptions;
    },
  },
  watch: {
    activeSnackbar() {
      this.active = this.activeSnackbar;
    },
    snackbar() {
      let subject = this.snackbar.subject;
      let state = this.snackbar.success;
      switch (subject) {
        case "addToCart":
          if (state) {
            this.text = "Added to cart successfuly !";
          } else {
            this.text = "Error !";
          }
          break;
      }
    },
    active(newValue) {
      if (!newValue) {
        this.$store.state.snackbar = false;
      }
    },
  },
  methods: {
    closeSnackbar() {
      this.active = false;
      this.$store.state.snackbar = false;
    },
  },
};
</script>

<style>
</style>