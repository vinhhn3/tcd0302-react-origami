import React, { useContext } from "react";
import OrigamiContext from "../../context/origami/origamiContext";
import Post from "./Post";
const PrivatePosts = () => {
  const origamiContext = useContext(OrigamiContext);
  const { privatePosts } = origamiContext;
  return (
    <div className="Posts">
      {privatePosts.length !== 0 &&
        privatePosts.map((post) => (
          <Post
            key={post._id}
            description={post.description}
            author={post.author.username}
          />
        ))}
    </div>
  );
};

export default PrivatePosts;
