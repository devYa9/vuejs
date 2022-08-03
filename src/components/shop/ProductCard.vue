<template>
  <div class="card mb-5">
    <v-card flat :ripple="false" class="pa-0" color="grey lighten-5" link to="">
      <v-row>
        <v-col cols="12" md="12" class="py-0 image-box">
          <v-avatar left min-height="150" tile size="100%">
            <v-img
              min-height="150"
              height="200"
              max-height="250"
              width="100%"
              :src="product.images[0]"
            ></v-img>
          </v-avatar>
        </v-col>
        <v-col cols="12" md="12" class="pa-0 py-4">
          <v-row class="">
            <v-col cols="12" class="py-md-2 py-0 pt-n2" order="2" order-md="1">
              <div class="px-md-8 px-5 caption">
                {{ product.category.name }}
              </div>
            </v-col>
            <v-col cols="12" class="py-0" order="1" order-md="2">
              <div
                class="
                  px-md-8
                  py-2
                  px-5
                  subtitle-1
                  font-weight-bold
                  product-name
                "
              >
                {{ product.title }}
              </div>
            </v-col>
            <v-col cols="12" class="py-0" order="3">
              <div class="px-md-8 px-5 d-flex align-end flex-wrap">
                <v-rating
                  x-small
                  dense
                  color="yellow darken-2"
                  :value="5"
                  class="mr-5"
                ></v-rating>
                <div class="caption">342 reviews</div>
              </div>
            </v-col>
            <v-col cols="12" class="py-md-5" order="4">
              <div
                class="px-md-8 px-5 d-flex justify-space-between align-center"
              >
                <v-btn
                  :ripple="false"
                  icon
                  small
                  color="error"
                  @click="isFavorite = !isFavorite"
                  ><v-icon
                    >mdi-heart{{ isFavorite ? "" : "-outline" }}</v-icon
                  ></v-btn
                >
                <div class="text-md-h5 subtitle-1 font-weight-bold">
                  ${{ product.price }}
                </div>
                <v-btn :ripple="false" icon small color="blue darken-2"
                  ><v-icon>mdi-cart-plus</v-icon></v-btn
                >
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      isFavorite: false,
    };
  },
};
</script>

<style scoped>
.bordered {
  border: 1px solid grey !important;
}

.product-name {
  line-height: 20px;
}
</style>