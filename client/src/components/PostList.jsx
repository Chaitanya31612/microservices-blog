import {useState, useEffect} from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate.jsx";
import CommentList from "./CommentList.jsx";

const PostList = () => {
  const [posts, setPosts] = useState({})

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4002/posts')
    setPosts(res.data)
  }

  useEffect( () => {
    fetchPosts()
  }, [])

  const renderedPosts = Object.values(posts).map(post => {
    return (
      <div className="card" style={{width: '30%', marginBottom: '20px'}} key={post.id}>
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    )
  })

  return (
    <div className={"row gap-4"}>
      {renderedPosts}
    </div>
  )
}

export default PostList;