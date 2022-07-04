import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const EditPost = ({
  editTitle,
  setEditTitle,
  editBody,
  setEditBody,
  handleEdit,
  posts,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditBody, setEditTitle]);

  return (
    <main className="NewPost">
      {editTitle && (
        <>
          <h2>Edit Post</h2>
          <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="postTitle">Title</label>
            <input
              type="text"
              required
              id="postTitle"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="postBody">Post:</label>
            <textarea
              id="postBody"
              cols="30"
              rows="10"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            ></textarea>
            <button type="submuit" onClick={() => handleEdit(post.id)}>
              Edit
            </button>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <p>Post not found</p>
          <Link to="/">Visit Our Homepage</Link>
        </>
      )}
    </main>
  );
};

export default EditPost;
