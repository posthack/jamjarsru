import { createStore } from "vuex";
import cart from "./cart.module";
import products from "./products.module";

export default createStore({
  modules: {
    cart,
    products,
  },
});
