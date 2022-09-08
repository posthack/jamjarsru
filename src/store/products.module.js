import { FETCH_PAGE_DESCRIPTION, FETCH_PRODUCTS } from "./actions.type.js";
import { getProductsList, supabaseImagesUrl } from "../helpers/products.js";

const state = {
  pageDescription: "",
  categories: [
    {
      id: 0,
      name: "deserts",
      label: "Десерты",
    },
    {
      id: 1,
      name: "cakes",
      label: "Торты",
    },
    {
      id: 2,
      name: "candybar",
      label: "Кенди бар",
    },
    {
      id: 3,
      name: "special",
      label: "Спецпредложения",
    },
  ],
  products: {
    deserts: [],
    cakes: [],
    candybar: [],
    special: [],
  },
};

const getters = {
  getPageDescription: (state) => (category) => state.pageDescription[category],
  getProducts: (state) => (category) => state.products[category],
  getCategories: (state) => state.categories,
  getProductById: (state) => (category, id) =>
    state.products[category].find((product) => product.id === id),
};

const mutations = {
  setPageDescription(state, { category, pageDescription }) {
    state.pageDescription[category] = pageDescription;
  },
  setProducts(state, { category, products }) {
    state.products[category] = products;
  },
};

const actions = {
  [FETCH_PAGE_DESCRIPTION]({ commit }) {
    // TODO: fetch page description
  },

  async [FETCH_PRODUCTS]({ state, commit }) {
    state.categories.map(async (category) => {
      const products = await getProductsList(category.name);
      products.forEach((product) => {
        product.photo_url = `${supabaseImagesUrl()}${category.name}/${
          product.photo_url
        }`;
      });
      commit("setProducts", { category: category.name, products });
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
