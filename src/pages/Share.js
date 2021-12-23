import React from "react";
import Posts from "../components/post/Posts";

const Share = () => {
  return (
    <div className="Main">
      <div className="Input">
        <h1>Share your thoughts ...</h1>
        <textarea></textarea>
        <button>Post</button>
      </div>
      <div>
        <h2>Last 3 posts on your wall</h2>
        <Posts />
      </div>
    </div>
  );
};

export default Share;
