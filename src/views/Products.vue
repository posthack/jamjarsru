<script setup>
import { computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import SingleProduct from "@/components/SingleProduct.vue";

const store = useStore();
const route = useRoute();

const category = computed(() => route.params.category);
const products = computed(() =>
  store.getters["products/getProducts"](category.value)
);
</script>

<template>
  <div class="container">
    <div v-if="products.length" class="wrapper">
      <single-product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    <div v-else class="wrapper">Loading...</div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  grid-gap: 30px 0;
  margin: 100px auto;
}
</style>
