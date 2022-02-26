import { useContext, useEffect } from "react";
import OrigamiContext from "../../context/origami/origamiContext";
import Post from "./Post";

const Posts = () => {
  const origamiContext = useContext(OrigamiContext);
  const { allPosts, getAllPosts } = origamiContext;
  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <div className="Posts">
      {allPosts.map((post) => (
        <Post
          key={post._id}
          description={post.description}
          author={post.author.username}
        />
      ))}
    </div>
  );
};

export default Posts;
