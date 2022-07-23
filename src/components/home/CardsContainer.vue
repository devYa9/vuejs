<template>
  <v-row>
    <v-col cols="12" sm="6" md="3" v-for="card in cards" :key="card.title">
      <card
        :title="card.title"
        :description="card.description"
        :icon="card.icon"
      ></card>
    </v-col>
  </v-row>
</template>

<script>
import Card from "@/components/home/Card.vue";

export default {
  props: ["cards"],
  components: { Card },
};
</script>

<style>
</style>