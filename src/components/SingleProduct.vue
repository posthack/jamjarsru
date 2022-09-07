<script setup>
const props = defineProps({
  product: Object,
});
const addToCart = () => {
  console.log(props.product.name);
};
</script>

<template>
  <div class="single-product">
    <div class="single-product__image">
      <img
        :src="props.product.photo_url"
        alt=""
        class="single-product__image-inner"
      />
    </div>
    <div class="single-product__info">
      <h3 class="single-product__title">{{ props.product.name }}</h3>
      <p class="single-product__desc">{{ props.product.description }}</p>
      <p class="single-product__price">Цена: {{ props.product.price }}р.</p>
      <button class="single-product__button" @click.prevent="addToCart">
        Добавить в корзину
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.single-product {
  padding: 15px;
  transition: all 0.3s ease-in-out;
  will-change: background-color;
  &:hover {
    background-color: rgba(#8acace, 0.1);
  }
  &__image {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    margin-bottom: 25px;
    overflow: hidden;
    &-inner {
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    text-align: center;
    color: #222;
  }

  &__title {
    font-size: 16px;
    line-height: 1.5em;
    min-height: 3em;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 12px;
  }

  &__desc {
    font-size: 12px;
    text-transform: lowercase;
    line-height: 1.7em;
    min-height: 5.1em;
    margin-bottom: 20px;
  }

  &___price {
    font-size: 16px;
    margin-bottom: 20px;
  }

  &__button {
    display: inline-block;
    cursor: pointer;
    padding: 0 20px;
    margin: 10px auto 0 auto;
    position: relative;
    line-height: 38px;
    border: 1px solid #8acace;
    background: #8acace;
    color: #fff;
    font-size: 14px;
    letter-spacing: 1px;
    font-family: "Helvetica", Arial, sans-serif;
    &::before {
      content: "";
      position: absolute;
      left: 2px;
      top: 2px;
      width: calc(100% - 4px);
      height: calc(100% - 4px);
      border: 1px solid #fff;
      transition: border 0.3s ease;
    }
  }
}
</style>
