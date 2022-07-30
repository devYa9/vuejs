<template>
  <div>
    <v-container>
      <footer class="py-5">
        <v-row>
          <v-col cols="12" md="4" class="px-md-10 px-2">
            <span class="text-h6 font-weight-bold blue--text text--darken-2">
              <v-icon color="blue darken-2" large>mdi-thought-bubble</v-icon>
              SoftBox
            </span>
            <p class="caption mt-5 grey--text text--darken-2">
              Softbox One of the best Software Development Company, SoftBox is
              at the forefront as the most innovative web developement company.
              Our cost efficient and structured teamwork justifies our position.
            </p>
            <div class="d-flex">
              <v-btn icon color="indigo"><v-icon>mdi-facebook</v-icon></v-btn>
              <v-btn icon color="blue" class="ml-4"
                ><v-icon>mdi-twitter</v-icon></v-btn
              >
              <v-btn icon color="blue darken-2" class="ml-4"
                ><v-icon>mdi-linkedin</v-icon></v-btn
              >
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="text-h6 font-weight-bold blue--text text--darken-2">
              Contact
            </div>
            <div class="caption grey--text text--darken-2 mt-4">
              <p class="ma-0">Manama Tower, Badda Link</p>
              <p class="ma-0">Road Badda Dhaka</p>
              <p class="ma-0">Bangladesh</p>
              <p class="ma-0">
                <span class="font-weight-bold blue--text text--darken-2"
                  >Contact: </span
                >+212608944024
              </p>
              <p class="ma-0">
                <span class="font-weight-bold blue--text text--darken-2"
                  >E-mail: </span
                >y.elaatmani47@gmail.com
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="4" class="hidden-md-and-down">
            <div class="text-h6 font-weight-bold blue--text text--darken-2">
              Quick Links
            </div>
            <div class="caption grey--text text--darken-2 mt-4">
              <router-link
                v-for="link in links"
                :key="link.name"
                :to="link.path"
                class="bottom-link grey--text text--darken-2 mb-2"
                >{{ link.name }}</router-link
              >
            </div>
          </v-col>
        </v-row>
      </footer>
    </v-container>
    <div class="footer">
      <v-divider></v-divider>
      <v-container>
        <div class="text-center caption grey--text text--darken-1">
          @SoftBox 2022 All rights reserved, Powered by
          <v-icon small color="error">mdi-heart</v-icon>
          <span class="blue--text text--darken-2 font-weight-bold ml-1"
            >Yassine</span
          >
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: "Home", path: "/", icon: "mdi-home-outline" },
        { name: "Shop", path: "/shop", icon: "mdi-cart-outline" },
        { name: "Blog", path: "/blog", icon: "mdi-alpha-b-box" },
        { name: "Contact", path: "/contact", icon: "mdi-email-outline" },
      ],
    };
  },
};
</script>

<style scoped>
.footer {
  min-height: 30px;
  width: 100%;
}

.bottom-link {
  display: block;
  text-decoration: none;
  transition: all 0.3s;
}

.bottom-link:hover {
  color: #1976d2 !important;
}
</style>