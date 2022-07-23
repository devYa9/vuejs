<template>
  <nav>
    <v-container fluid>
      <v-app-bar app flat width="100%" color="white">
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          color="blue darken-2"
          class="hidden-md-and-up"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>
          <span class="font-weight-bold blue--text text--darken-2">
            <v-icon color="blue darken-2" large>mdi-thought-bubble</v-icon>
            SoftBox
          </span>
        </v-toolbar-title>

        <v-item-group class="ml-12 hidden-sm-and-down">
          <v-item v-for="link in links" :key="link.name">
            <v-btn
              link
              rounded
              text
              class="link text-capitalize ml-5"
              :to="link.path"
              active-class="active"
            >
              {{ link.name }}
            </v-btn>
          </v-item>
        </v-item-group>
        <v-spacer></v-spacer>
        <v-list class="pa-0">
          <v-btn icon color="blue darken-2">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-width="200"
            offset-x
            offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon color="blue darken-2" dark v-bind="attrs" v-on="on">
                <v-icon>mdi-cart-outline</v-icon>
              </v-btn>
            </template>

            <v-card min-width="300">
              <v-list class="py-1">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-bold"
                      >Shoping Cart</v-list-item-title
                    >
                  </v-list-item-content>
                  <v-list-item-action-text>
                    <span class="body-1">0 Items</span>
                  </v-list-item-action-text>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list>
                <v-list-item>
                  <v-list-item-title>Empty</v-list-item-title>
                </v-list-item>
              </v-list>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  dark
                  text
                  class="body-2 text-capitalize"
                  @click="menu = false"
                  color="grey"
                >
                  Close
                </v-btn>
                <v-btn
                  dark
                  depressed
                  class="body-2 text-capitalize px-6"
                  color="#32e2a9"
                  @click="menu = false"
                  >Checkout</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-menu>
          <v-btn icon color="blue darken-2">
            <v-icon>mdi-heart-outline</v-icon>
            <v-badge bordered content="1" color="red"></v-badge>
          </v-btn>
        </v-list>
      </v-app-bar>

      <v-navigation-drawer
        class="hidden-md-and-up"
        v-resize="drawerSet"
        fixed
        v-model="drawer"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              <span class="font-weight-bold blue--text text--darken-2">
                <v-icon color="blue darken-2" large>mdi-thought-bubble</v-icon>
                SoftBox
              </span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <v-list dense nav>
          <v-list-item
            v-for="link in links"
            :key="link.name"
            link
            :to="link.path"
          >
            <v-list-item-icon>
              <v-icon color="blue darken-2">{{ link.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="link">{{
                link.name
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-container>
  </nav>
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
      drawer: false,
      menu: false,
    };
  },
  methods: {
    drawerSet() {
      console.log(this.$vuetify.breakpoint.name);
      console.log(this.drawer);
      switch (this.$vuetify.breakpoint.name) {
        case "md":
          this.drawer = false;
        case "lg":
          this.drawer = false;
        case "xl":
          this.drawer = false;
      }
    },
  },
};
</script>

<style scoped>
.link {
  color: #1976d2 !important;
}

.active {
  color: #ff5252 !important;
}
.active::before {
  background: none !important;
  color: #ff5252 !important;
}

.v-list-item--active {
  color: #ff5252 !important;
  border-left: 3px solid #ff5252 !important;
  border-radius: 0 !important;
}

.v-list-item--active .v-list-item__icon i {
  color: #ff5252 !important;
}

.v-list-item {
  border-left: 3px solid transparent;
}

.v-list-item-title {
  color: #1976d2 !important;
}

.v-list-item--active .v-list-item__title {
  color: #ff5252 !important;
}

.v-list-item--active::before {
  background-color: white;
}
</style>