import React, { useState } from "react";
import Post from "../components/post/Post";
import Aside from "./Aside";

const Main = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      description: "description 1",
      author: "author 1",
    },
    {
      id: 2,
      description: "description 2",
      author: "author 2",
    },
    {
      id: 3,
      description: "description 3",
      author: "author 3",
    },
  ]);
  return (
    <div className="Container">
      <Aside />
      <div className="Main">
        <h1>Soooooooome Heading</h1>
        <div className="Posts">
          {posts.map((post) => (
            <Post
              key={post.id}
              description={post.description}
              author={post.author}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
