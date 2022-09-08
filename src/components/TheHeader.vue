<script setup>
import { supabaseImagesUrl } from "@/helpers/products.js";
</script>

<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="header__logo">
        <img :src="`${supabaseImagesUrl()}common/logo.png`" alt="logo" />
      </router-link>
      <div class="header__label">
        Первая онлайн-кондитерская <br />в Челябинске
      </div>
      <nav class="header__nav">
        <ul>
          <li>
            <router-link
              class="header__nav-link"
              :to="{ name: 'Shop', params: { category: 'deserts' } }"
              >Десерты</router-link
            >
          </li>
          <li>
            <router-link
              class="header__nav-link"
              :to="{ name: 'Shop', params: { category: 'cakes' } }"
              >Торты</router-link
            >
          </li>
          <li>
            <router-link
              class="header__nav-link"
              :to="{ name: 'Shop', params: { category: 'candybar' } }"
              >Кенди бар</router-link
            >
          </li>
          <li>
            <router-link
              class="header__nav-link"
              :to="{ name: 'Shop', params: { category: 'special' } }"
              >Спецпредложения</router-link
            >
          </li>
          <li>
            <router-link class="header__nav-link" to="/cart"
              >Корзина</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: #fff;
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  padding: 8px 0;
  .container {
    display: flex;
    align-items: center;
  }
  &__logo {
    display: block;
    max-width: 120px;
    img {
      width: 100%;
      object-fit: contain;
    }
  }
  &__label {
    font-size: 14px;
    line-height: 1.5;
    margin-left: 20px;
  }
  &__nav {
    margin-left: auto;
    ul {
      display: flex;
    }
    li:not(:last-child) {
      margin-right: 25px;
    }
    &-link {
      font-size: 14px;
      color: #000;
    }
  }
}
</style>
