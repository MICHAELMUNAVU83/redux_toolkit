import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "First Post!", content: "Hello!" },
  { id: "2", title: "Second Post", content: "More text" },
];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
    postRemoved(state, action) {
      return state.filter((post) => post.id !== action.payload.id);
    },
  },
});
export const selectAllPosts = (state) => state.posts;
export default postsSlice.reducer;
export const { postAdded, postRemoved } = postsSlice.actions;
