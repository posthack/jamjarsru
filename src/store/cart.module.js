import {
  SET_TEXT_INFO,
  ADD_PRODUCT,
  REMOVE_PRODUCT_BY_ID,
  SET_PRODUCT_QUANTITY_BY_ID,
} from "./actions.type";

const productExample = {
  id: 1,
  name: "Трюфель",
  price: 100,
  quantity: 1,
};

const state = {
  textInfo: {
    title: "Доставка платная",
    description:
      "400₽ По городу. Вы всегда можете забрать ваш заказ самовывозом с Университетской набережной 64",
  },
  products: [productExample],
};

const getters = {
  getProducts: (state) => state.products,
  getProductsQuantity: (state) => state.products.length,
  getTextInfo: (state) => state.textInfo,
  getTotalPrice: (state) => {
    const totalPrice = state.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    return totalPrice > 1000 ? totalPrice : totalPrice + 400;
  },
};

const mutations = {
  [SET_TEXT_INFO](state, textInfo) {
    state.textInfo = textInfo;
  },
  [ADD_PRODUCT](state, product) {
    state.products.push(product);
  },
  [REMOVE_PRODUCT_BY_ID](state, id) {
    state.products = state.products.filter((product) => product.id !== id);
  },
  [SET_PRODUCT_QUANTITY_BY_ID](state, { id, quantity }) {
    const product = state.products.find((product) => product.id === id);
    product.quantity = quantity;
  },
};

const actions = {
  [SET_TEXT_INFO]({ commit }, textInfo) {
    commit("setTextInfo", textInfo);
  },
  [ADD_PRODUCT]({ commit }, product) {
    commit("addProduct", product);
  },
  [REMOVE_PRODUCT_BY_ID]({ commit }, id) {
    commit("removeProductById", id);
  },
  [SET_PRODUCT_QUANTITY_BY_ID]({ commit }, { id, quantity }) {
    commit("setProductQuantityById", { id, quantity });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
