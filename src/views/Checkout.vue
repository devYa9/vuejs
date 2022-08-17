<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <v-simple-table height="400" fixed-header>
            <template v-slot:default>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Size</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in cartProducts" :key="i">
                  <td class="py-2">
                    <v-row>
                      <v-col cols="4">
                        <v-avatar size="80" tile class="rounded-lg">
                          <v-img :src="item.product.images[0]"></v-img>
                        </v-avatar>
                      </v-col>
                      <v-col cols="8" class="d-flex align-center">
                        {{ item.product.title }}
                      </v-col>
                    </v-row>
                  </td>

                  <td>
                    <v-select
                      solo
                      flat
                      hide-details="true"
                      height="35"
                      :items="sizes(item.product.category.name)"
                      color="blue darken-2"
                      :menu-props="{ offsetY: true }"
                      dense
                      class="mt-0 pt-0 select"
                      ref="selectElm"
                      style="width: 90px; position: relative"
                      placeholder="Qty"
                      v-model="item.order.size"
                    >
                    </v-select>
                  </td>

                  <td>
                    <div class="d-flex align-center">
                      <v-btn
                        icon
                        tile
                        small
                        color="blue"
                        class="mr-2 rounded-lg"
                        :disabled="item.order.qte <= 1"
                        @click="item.order.qte = item.order.qte - 1"
                        ><v-icon>mdi-minus</v-icon></v-btn
                      >
                      <v-text-field
                        hide-details="true"
                        flat
                        dense
                        solo
                        readonly
                        class="white"
                        style="max-width: 40px"
                        v-model="item.order.qte"
                      ></v-text-field>
                      <v-btn
                        icon
                        tile
                        smalls
                        color="blue"
                        class="ml-2 rounded-lg"
                        :disabled="item.order.qte >= 10"
                        @click="item.order.qte = item.order.qte + 1"
                        ><v-icon>mdi-plus</v-icon></v-btn
                      >
                    </div>
                  </td>

                  <td>${{ item.order.qte * item.product.price }}</td>

                  <td class="text-center">
                    <v-btn
                      color="error lighten-2"
                      icon
                      :ripple="false"
                      @click="removeFromCart(i)"
                      ><v-icon>mdi-close</v-icon></v-btn
                    >
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div class="d-flex justify-space-between">
            <v-btn
              text
              large
              ripple="false"
              color="blue"
              class="text-capitalize"
              ><v-icon left>mdi-chevron-left</v-icon> Return to Shopping</v-btn
            >
            <v-btn
              ripple="false"
              color="blue"
              depressed
              large
              class="white--text text-capitalize"
            >
              Continue to shipping
              <v-icon right>mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    cartProducts() {
      return this.$store.getters.cartProducts;
    },
  },
  methods: {
    removeFromCart(item) {
      this.$store.dispatch("removeFromCart", item);
    },
    sizes(type) {
      if (type == "Shoes") {
        return [5.5, 6, 6.5, 7, 7.5, 8, 8.5];
      } else {
        return ["S", "M", "L", "XL", "XXL"];
      }
    },
  },
};
</script>

<style>
</style>