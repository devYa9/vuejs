<template>
  <div class="d-inline-flex wrapper">
    <div class="hidden-xs-only">
      <div class="d-flex align-center">
        <v-text-field
          hide-details="true"
          dense
          placeholder="Search"
          class="input-search"
          :class="{ closed: closed }"
          color="blue darken-2"
          filled
          ref="search"
          v-model="search"
        ></v-text-field>
      </div>
    </div>
    <div class="mobile-search-bar hidden-sm-and-up" :class="{ closed: closed }">
      <div class="d-flex align-center">
        <v-text-field
          hide-details="true"
          dense
          placeholder="Search"
          class="input-search"
          color="blue darken-2"
          filled
          ref="search-mobile"
          v-model="search"
        ></v-text-field>
        <v-btn
          icon
          small
          color="blue darken-2"
          class="remove-bg mx-3"
          :ripple="false"
          @click="openSearchBarPc"
        >
          <v-icon>mdi-magnify</v-icon></v-btn
        >
      </div>
    </div>
    <div v-if="true" class="icon-container hidden-xs-only">
      <v-btn
        icon
        color="blue darken-2"
        class="remove-bg"
        :ripple="false"
        @click="openSearchBarPc"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </div>
    <div v-if="true" class="icon-container hidden-sm-and-up">
      <v-btn
        icon
        color="blue darken-2"
        class="remove-bg"
        :ripple="false"
        @click="openSearchBarMobile"
      >
        <v-icon>mdi-{{ closed ? "magnify" : "close" }}</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      closed: true,
      search: "",
    };
  },
  methods: {
    openSearchBarPc() {
      this.closed = !this.closed;
      if (!this.closed) {
        this.$refs.search.$el.getElementsByTagName("input")[0].focus();
      } else {
        this.$refs.search.$el.getElementsByTagName("input")[0].blur();
      }
      if (this.search) {
        this.$router.push("/search");
        this.search = "";
      }
    },
    openSearchBarMobile() {
      this.closed = !this.closed;
      if (!this.closed) {
        this.$refs["search-mobile"].$el
          .getElementsByTagName("input")[0]
          .focus();
      } else {
        this.$refs["search-mobile"].$el.getElementsByTagName("input")[0].blur();
      }
      if (this.search) {
        this.$router.push("/search");
        this.search = "";
      }
    },
    closeSearchBar() {
      console.log("im here");
      if (!this.search) {
        console.log("im false");
        this.closed = true;
      }
    },
  },
};
</script>

<style>
.mobile-search-bar {
  position: fixed;
  top: 52px;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
  height: 50px;
  background: white;
  border-radius: 3px;
  padding: 8px;
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
    0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
  opacity: 1;
  transition: all 0.2s;
}

.mobile-search-bar.closed {
  opacity: 0;
  transform: translateX(-53%);
}

.mobile-search-bar .input-search .v-input__slot {
  max-width: 100% !important;
}

.wrapper {
  position: relative;
}

.icon-container {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.input-search .v-input__slot {
  max-width: 270px !important;
  transition: max-width 0.5s;
  padding-right: 43px !important;
}

.input-search {
  opacity: 1;
  transition: opacity 0.5s;
}

.input-search.closed {
  opacity: 0;
}

.dropping-search {
  position: fixed;
  top: 30px;
  left: 0;
  right: 0;
  height: 50px;
  width: 100%;
  background: #000;
}

.input-search .v-input__slot {
  min-height: 32px !important;
}

.input-search .v-input__prepend-inner {
  margin-top: 5px !important;
}

.input-search .v-input__slot::before,
.input-search .v-input__slot::after {
  border-color: transparent !important;
}

.input-search.closed .v-input__slot {
  max-width: 45px !important;
}
</style>