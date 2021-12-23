import React, { useContext, useState } from "react";
import PrivatePosts from "../components/post/PrivatePosts";
import OrigamiContext from "../context/origami/origamiContext";

const Share = () => {
  const origamiContext = useContext(OrigamiContext);
  const { createPost } = origamiContext;
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onPost = (e) => {
    e.preventDefault();
    console.log(text);
    createPost(text);
    setText("");
  };

  return (
    <div className="Main">
      <div className="Input">
        <h1>Share your thoughts ...</h1>
        <textarea onChange={onChange} value={text}></textarea>
        <button onClick={onPost}>Post</button>
      </div>
      <div>
        <h2>Last 3 posts on your wall</h2>
        <PrivatePosts />
      </div>
    </div>
  );
};

export default Share;
