import React, { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import { useHistory } from "react-router-dom";
import { format } from "date-fns";
import api from "../api/posts";

const NewPost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const { posts } = useContext(DataContext);
  const history = useHistory();

  const handleSubmit = async (e) => {
    const id = posts.length ? posts.at(-1).id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    try {
      const response = await api.post("./posts", newPost);
      const allPosts = [...posts, response];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      history.push("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title</label>
        <input
          type="text"
          required
          id="postTitle"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postBody"
          cols="30"
          rows="10"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        ></textarea>
        <button type="submuit">Submit</button>
      </form>
    </main>
  );
};

export default NewPost;
