<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import { useStore } from "vuex";
import { onMounted } from "vue";

const store = useStore();

const fetchProducts = () => {
  store.dispatch("products/fetchProducts");
};
onMounted(() => {
  fetchProducts();
});
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
