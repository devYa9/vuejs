<template>
  <div class="container">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  min-height: 70vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader {
  position: relative;
  height: 50px;
  width: 50px;
  border: 2px solid transparent;
  border-right-color: #1976d2;
  border-left-color: #1976d2;
  border-radius: 50%;
  animation: loading infinite 1s forwards ease-in-out;
  transform: rotate(0deg);
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>