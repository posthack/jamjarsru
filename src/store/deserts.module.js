import { FETCH_PAGE_DESCRIPTION, FETCH_PRODUCTS } from "./actions.type.js";
import { getProductsList, supabaseImagesUrl } from "../helpers/products.js";
import { preloadImages } from "../helpers/images.js";

const productExample = {
  id: 1,
  name: "Трюфель",
  description: "шоколадная конфета трюфель в ассортименте",
  price: 70,
  photo_url: "",
};

const state = {
  pageDescription: "",
  products: [],
};

const getters = {
  getPageDescription: (state) => state.pageDescription,
  getProducts: (state) => state.products,
  getProductById: (state) => (id) =>
    state.products.find((product) => product.id === id),
};

const mutations = {
  setPageDescription(state, pageDescription) {
    state.pageDescription = pageDescription;
  },
  setProducts(state, products) {
    state.products = products;
  },
};

const actions = {
  [FETCH_PAGE_DESCRIPTION]({ commit }) {
    // TODO: fetch page description
  },

  // вносим продукты в стор только после прелоада всех картинок
  async [FETCH_PRODUCTS]({ commit }, category) {
    const products = await getProductsList(category),
      productsImages = [];
    products.forEach((product) => {
      product.photo_url = `${supabaseImagesUrl()}${category}/${
        product.photo_url
      }`;
      productsImages.push(product.photo_url);
    });
    await preloadImages(productsImages);
    commit("setProducts", products);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
