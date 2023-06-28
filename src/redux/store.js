import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./slices/postsSlice";

const store = configureStore({
  reducer: {
    post: postReducer,
  },
});

export default store;
