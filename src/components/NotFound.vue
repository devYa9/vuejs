<template>
  <div>
    <v-sheet
      height="300"
      width="100%"
      class="d-flex flex-column align-center justify-center"
    >
      <div class="text-h3 font-weight-black blue--text text--darken-2">404</div>
      <div class="text-h4 font-weight-black error--text mt-5">
        Sorry, {{ name }} not found !
      </div>
    </v-sheet>
  </div>
</template>

<script>
export default {
  props: ["name"],
};
</script>

<style>
</style>