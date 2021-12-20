import React from "react";
import birdLogo from "../../assets/white-origami-bird.png";
const Post = ({ description, author }) => {
  return (
    <div className="Post">
      <img alt="" src={birdLogo} />
      <p className="description">{description}</p>
      <div>
        <span>
          <small>Author:</small>
          {author}
        </span>
      </div>
    </div>
  );
};

export default Post;
