import { configureStore } from "@reduxjs/toolkit";

import CountReducer from "./modules/counter";

const store = configureStore({
  reducer: {
    counter: CountReducer,
  },
});

export default store;