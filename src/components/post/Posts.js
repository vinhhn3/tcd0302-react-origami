import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Post from './Post';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    var response = await axios.get("http://localhost:9999/api/origami/all");
    console.log(response.data);
    setPosts(response.data);
  }, []);
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
  )
}

export default Posts
