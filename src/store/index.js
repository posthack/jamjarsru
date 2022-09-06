import { createStore } from "vuex";
import cart from "./cart.module";

export default createStore({
  modules: {
    cart,
  },
});
