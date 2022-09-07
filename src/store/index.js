import { createStore } from "vuex";
import deserts from "./deserts.module";
import cakes from "./cakes.module";
import cart from "./cart.module";

export default createStore({
  modules: {
    deserts,
    cakes,
    cart,
  },
});
