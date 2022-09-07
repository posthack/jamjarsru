import { FETCH_PAGE_DESCRIPTION, FETCH_PRODUCTS } from "./actions.type.js";

const productExample = {
  id: 1,
  name: "Трюфель",
  description: "шоколадная конфета трюфель в ассортименте",
  price: 70,
  photo_url: "",
};

const state = {
  pageDescription: "",
  products: [productExample],
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
  [FETCH_PRODUCTS]({ commit }) {
    // TODO: fetch products
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
