<template>
  <div class="my-md-10">
    <LoaderView v-if="!isLoaded" />
    <v-container v-if="isLoaded">
      <div v-if="!notFound">
        <transition
          mode="out-in"
          enter-active-class="animate__animated animate__faster animate__fadeIn"
          leave-active-class="animate__animated animate__faster animate__fadeOut"
        >
          <v-row :key="product.id">
            <v-col cols="12" md="6">
              <div class="d-flex px-2 px-md-0">
                <v-img
                  eager
                  :src="product.images[0]"
                  height="100%"
                  width="100%"
                  tile
                  class="rounded-lg p-relative"
                >
                  <v-btn
                    class="rounded-lg mt-3"
                    large
                    depressed
                    absolute
                    right
                    color="white"
                    @click.prevent="favorite(product)"
                    ><v-icon color="error"
                      >mdi-heart{{ isFavorite ? "" : "-outline" }}</v-icon
                    ></v-btn
                  >
                </v-img>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <v-sheet
                height="100%"
                width="100%"
                elevation="0"
                class="
                  px-md-8 px-2
                  py-0
                  d-flex
                  flex-column
                  justify-space-between
                "
              >
                <div
                  class="
                    text-md-h4 text-h5
                    font-weight-bold
                    grey--text
                    text--darken-3
                  "
                >
                  {{ product.title }}
                </div>
                <div class="text-h6 blue--text text--darken-2">
                  {{ product.category.name }}
                </div>
                <div class="d-flex align-center mt-6">
                  <div
                    class="
                      d-flex
                      price
                      px-3
                      py-2
                      blue
                      lighten-5
                      blue--text
                      text--darken-2
                      rounded-lg
                    "
                    style="width: fit-content"
                  >
                    $<span class="text-h5 font-weight-bold">{{
                      product.price
                    }}</span>
                  </div>
                  <div class="ml-5 line-h">
                    <div class="success--text font-weight-bold subtitle-1">
                      Save 12%
                    </div>
                    <div class="grey--text text--darken-2">
                      Inclusive of all taxes
                    </div>
                  </div>
                </div>
                <div class="mt-6 grey--text text--darken-2">
                  <span class="subtitle-2">Description:</span>
                  <p>{{ product.description }}</p>
                </div>
                <div>
                  <span class="grey--text text--darken-2 subtitle-2"
                    >Size:</span
                  >
                  <v-chip-group
                    v-model="size"
                    mandatory
                    active-class="blue darken-2 white--text"
                  >
                    <v-chip v-for="s in sizes" :key="s" :value="s">{{
                      s
                    }}</v-chip>
                  </v-chip-group>
                </div>
                <div class="call-to-action mt-4">
                  <div class="d-flex">
                    <div>
                      <v-select
                        outlined
                        hide-details="true"
                        height="45"
                        :items="qteAllowed"
                        color="blue darken-2"
                        :menu-props="{ offsetY: true }"
                        dense
                        class="mt-0 pt-0 select"
                        ref="selectElm"
                        style="width: 90px; position: relative"
                        placeholder="Qty"
                        v-model="qte"
                      >
                      </v-select>
                    </div>
                    <v-btn
                      @click="addToCart"
                      color="blue"
                      large
                      dark
                      class="pa-1 ml-4 flex-fill"
                      depressed
                      ><v-icon left>mdi-cart-plus</v-icon> Add to cart</v-btn
                    >
                  </div>
                </div>
              </v-sheet>
            </v-col>
          </v-row>
        </transition>
      </div>
      <div v-if="notFound">
        <NotFound name="Product" />
      </div>
    </v-container>
  </div>
</template>

<script>
import NotFound from "../components/NotFound.vue";
import LoaderView from "../components/LoaderView";
export default {
  components: { LoaderView, NotFound },
  data() {
    return {
      product: "",
      notFound: false,
      qteAllowed: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      qte: 1,
      size: "S",
    };
  },
  methods: {
    favorite(product) {
      if (!this.isFavorite) {
        this.$store.dispatch("addToFavorite", product);
      } else {
        this.$store.dispatch("removeFromFavorite", product);
      }
    },
    addToCart() {
      if (this.qte) {
        let product = {
          order: { qte: this.qte, size: this.size },
          product: this.product,
        };
        this.$store.dispatch("addToCart", product);
        this.qte = 1;
        this.$store.state.snackbar = true;
        let options = { active: true, subject: "addToCart", success: true };
        this.$store.dispatch("toggleSnackbar", options);
      }
    },
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    isLoaded() {
      return this.$store.state.isLoaded;
    },
    isFavorite() {
      let status = false;
      this.$store.getters.favoriteProducts.forEach((p) => {
        if (p.id == this.product.id) {
          status = true;
        }
      });
      return status;
    },
    sizes() {
      if (this.product.category.name == "Shoes") {
        this.size = 5.5;
        return [5.5, 6, 6.5, 7, 7.5, 8, 8.5];
      } else {
        this.size = "S";
        return ["S", "M", "L", "XL", "XXL"];
      }
    },
  },
  watch: {
    isLoaded(newv) {
      if (newv == true) {
        if (!this.product) {
          this.$store.getters.products.forEach((elm) => {
            if (elm["id"] == this.id) {
              this.product = { ...elm };

              this.notFound = false;
            }
          });
          if (!this.product) {
            this.notFound = true;
          }
        }
      }
    },
    id(newId) {
      let isFound = false;
      this.$store.getters.products.forEach((elm) => {
        if (elm["id"] == newId) {
          this.product = { ...elm };
          isFound = true;
          this.notFound = false;
        }
      });
      if (!isFound) {
        this.notFound = true;
      }
    },
    qte(v) {
      console.log(v);
    },
  },
  created() {
    window.scrollTo(0, 0);
    if (this.isLoaded) {
      this.$store.getters.products.forEach((elm) => {
        if (elm.id == this.id) {
          this.product = elm;
          this.notFound = false;
        }
      });
    }
  },
};
</script>

<style scoped>
.bordred {
  border: 2px solid blue !important;
}

.bordred v-text-field__details {
  display: none;
}

.p-relative {
  position: relative;
}
.price span {
  line-height: 25px;
  letter-spacing: 1px !important;
  margin-left: 2px;
}

.line-h div {
  line-height: 20px;
}

.border {
  border: 1px solid black;
}
</style>