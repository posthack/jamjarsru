import { createStore } from "vuex";
import deserts from "./deserts.module";
import cart from "./cart.module";

export default createStore({
  modules: {
    deserts,
    cart,
  },
});
