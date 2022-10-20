import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./components/counter/counterSlice";
import postsReducer from "./components/posts/postsSlice";
import dragonsReducer from "./components/dragons/dragonsSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    dragons: dragonsReducer,
  },
});
