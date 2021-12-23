import React from "react";
import Post from "./Post";

const PrivatePosts = ({ posts }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return (
    <div className="Posts">
      {posts.map((post) => (
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
