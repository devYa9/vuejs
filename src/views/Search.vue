<template>
  <div>
    <v-container>
      <h1 class="grey--text text--darken-2">
        You searched for:
        <span class="blue--text font-weight-bold">{{ searchTerm }}</span>
      </h1>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    searchTerm() {
      return this.$store.getters.searchTerm;
    },
  },
};
</script>

<style>
</style>