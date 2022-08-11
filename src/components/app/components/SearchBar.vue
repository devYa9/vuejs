<template>
  <div class="dropping-search">
    <transition enter-active-class="animate__animated animate__slideInDown">
      <div v-if="active"></div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true,
    };
  },
};
</script>

<style scoped>
.dropping-search {
  position: fixed;
  top: 30px;
  left: 0;
  right: 0;
  height: 50px;
  width: 100%;
  background: #000;
}
</style>