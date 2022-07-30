<template>
  <div>
    <v-row>
      <v-col cols="10" offset="1" md="6" offset-md="3">
        <v-sheet
          rounded="pill"
          width="100%"
          height="45"
          class="d-flex justify-space-between align-center px-1"
        >
          <input
            type="text"
            class="news-input px-5"
            placeholder="Your e-mail..."
          />
          <v-btn dark depressed rounded class="px-md-8" color="blue darken-2"
            >SUBMIT</v-btn
          >
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.v-sheet {
  border: 1px solid #1976d2;
}
.news-input {
  width: 100%;
  height: 100%;
  outline: none;
}
</style>