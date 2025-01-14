import { useState } from "react";
import axios from "axios";

const PostCreate = ({ fetchPosts }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTitle("");
    await axios.post("http://posts.com/posts/create", {
      title,
    });
    fetchPosts();
  };

  return (
    <>
      <h1>Create Post</h1>
      <form onSubmit={(e) => handleSubmit(e, title)} className={"py-3"}>
        <div className="form-group">
          <label>Title</label>
          <br />
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
          <br />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default PostCreate;
