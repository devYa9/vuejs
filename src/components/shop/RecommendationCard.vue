<template>
  <div class="box">
    <v-card
      height="100%"
      link
      :ripple="false"
      color="transparent"
      elevation="0"
      class="pa-0"
    >
      <v-row class="pa-2">
        <v-col cols="5" lg="4" class="pa-2 d-flex justify-center align-center">
          <v-avatar size="70" :tile="!isUser">
            <v-img
              eager
              :src="getImageLink(image)"
              :class="{ 'rounded-circle': false }"
            ></v-img>
          </v-avatar>
        </v-col>
        <v-col cols="7" lg="8" class="d-flex flex-column justify-center">
          <div class="subtitle-1 font-weight-bold">
            {{ title }}
          </div>
          <div class="body-2" v-if="desc">
            {{ desc }}
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["image", "title", "desc", "isUser"],
  methods: {
    getImageLink(link) {
      return require("@/" + link);
    },
  },
};
</script>

<style scoped>
.subtitle-1 {
  line-height: 18px;
}
</style>