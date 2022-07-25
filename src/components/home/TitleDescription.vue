<template>
  <div class="value-section py-10">
    <div
      :class="
        'font-weight-bold blue--text text--darken-2 text-md-h5 text-lg-h4  text-h5 text-' +
        align
      "
    >
      {{ title }} <span class="error--text">{{ coloredWord }}</span>
    </div>
    <p
      :class="
        ' mt-4 grey--text text--darken-2 text-' +
        align +
        ' ' +
        size +
        ' ' +
        width
      "
    >
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["title", "coloredWord", "description", "align", "size", "width"],
};
</script>

<style scoped>
.p {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
</style>