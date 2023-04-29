import './App.css'
import PostCreate from "./components/PostCreate.jsx";
import PostList from "./components/PostList.jsx";

function App() {

  return (
    <div className="container py-5">
      {/*<h1 style={{color: "red"}}>video number 13</h1>*/}
      <PostCreate/>
      <hr/>
      <h1>Posts</h1>
      <PostList/>
    </div>
  )
}

export default App
