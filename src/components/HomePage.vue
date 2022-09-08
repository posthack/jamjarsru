<script setup>
import { supabaseImagesUrl } from "../helpers/products.js";
</script>

<template>
  <div class="home">
    <div
      class="home-hero"
      :style="`background-image: url(${supabaseImagesUrl()}common/home-bg.jpg)`"
    ></div>

    <div class="home-places">
      <div class="home-places__title">Где нас найти?</div>

      <div class="home-places__list">
        <div class="home-places__item">
          <div
            class="home-places__item-pic"
            :style="`background-image: url(${supabaseImagesUrl()}common/place-01.jpg)`"
          ></div>
          <div class="home-places__item-meta">
            <div class="home-places__item-name">КОНДИТЕРСКАЯ «ДЖЕМ»</div>
            <div class="home-places__item-address">
              Университетская набережная, 64
            </div>
          </div>
        </div>

        <div class="home-places__item">
          <div
            class="home-places__item-pic"
            :style="`background-image: url(${supabaseImagesUrl()}common/place-02.jpg)`"
          ></div>
          <div class="home-places__item-meta">
            <div class="home-places__item-name">КАФЕ «ДЖЕМ»</div>
            <div class="home-places__item-address">Временно не работает</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-hero {
  height: 50vw;
  max-height: 70vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.home-places {
  padding: 60px 0;
}
.home-places__title {
  text-align: center;
  text-transform: uppercase;
  font-size: 30px;
  margin-bottom: 40px;
}
.home-places__list {
  margin: 0 auto;
  display: flex;
  max-width: 1100px;
}
.home-places__item {
  position: relative;
  flex: 1;
  margin-bottom: 20px;
  height: 250px;
  display: flex;
  align-items: center;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  will-change: opacity;
  &:hover {
    opacity: 1;
  }
}
.home-places__item-meta {
  background-color: #fff;
  padding: 20px;
  margin-left: 150px;
}
.home-places__item-pic {
  position: absolute;
  left: 0;
  top: 0;
  width: 250px;
  height: 250px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
}
.home-places__item-name {
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 6px;
}
.home-places__item-address {
  font-weight: lighter;
  margin-bottom: 6px;
  font-size: 13px;
  color: #6d6865;
}
</style>
