import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../store/searchSlice";
import authSlice from "../store/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    search: searchSlice,
  },
});

export default store;