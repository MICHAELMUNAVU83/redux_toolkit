import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import { postRemoved } from "./postsSlice";
import AddPosts from "./AddPosts";

function Posts() {
  const posts = useSelector(selectAllPosts);
  console.log(posts);
  const dispatch = useDispatch();

  const displayPosts = posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(postRemoved(post));
        }}
      >
        Delete
      </button>
    </div>
  ));

  return (
    <div>
      Posts
      {displayPosts}
      <AddPosts />
    </div>
  );
}

export default Posts;
