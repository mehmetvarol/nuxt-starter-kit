<template lang="pug">
.wrapper
  .card
    h1.title
      span.text-emerald-800 NUXT JS & TailwindCss v2.0
</template>

<script>
export default {};
</script>

<style lang="scss">
.wrapper {
  @apply min-h-screen flex justify-center items-center text-center mx-auto xs:bg-gray-800 dark:bg-gray-800;
}

.card {
  @apply p-10 rounded-lg text-emerald-500 bg-emerald-100 shadow-lg;

  .title {
    @apply text-6xl font-bold;
  }
}
</style>
