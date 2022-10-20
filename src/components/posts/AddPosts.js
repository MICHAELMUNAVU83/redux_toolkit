import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";

function AddPosts() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const onSavePostClicked = (e) => {
    if (title && content) {
      e.preventDefault();
      dispatch(postAdded({ title, content, id: nanoid() }));
      setTitle("");
      setContent("");
    }
  };
  return (
    <div>
      <h3>Add Posts</h3>
      <form onSubmit={onSavePostClicked}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="content">Content</label>
        <input
          type="text"
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default AddPosts;
