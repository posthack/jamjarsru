<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <div class="app">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/base.scss";
</style>
