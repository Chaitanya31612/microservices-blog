import { useState, useEffect } from "react";
import axios from "axios";
import PostCreate from "./components/PostCreate.jsx";
import PostList from "./components/PostList.jsx";

import "./App.css";

const App = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://posts.com/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container py-5">
      <PostCreate fetchPosts={fetchPosts} />
      <hr />
      <h1>Posts</h1>
      <PostList posts={posts} fetchPosts={fetchPosts} />
    </div>
  );
};

export default App;
