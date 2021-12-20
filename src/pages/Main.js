import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "../components/post/Post";
import Aside from "./Aside";

const Main = () => {
  const [posts, setPosts] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    var response = await axios.get("http://localhost:9999/api/origami/all");
    console.log(response.data);
    setPosts(response.data);
  }, []);

  return (
    <div className="Container">
      <Aside />
      <div className="Main">
        <h1>Soooooooome Heading</h1>
        <div className="Posts">
          {posts.map((post) => (
            <Post
              key={post._id}
              description={post.description}
              author={post.author.username}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
