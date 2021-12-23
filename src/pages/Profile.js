import React, { useContext } from "react";
import PrivatePosts from "../components/post/PrivatePosts";
import OrigamiContext from "../context/origami/origamiContext";

const Profile = () => {
  const origamiContext = useContext(OrigamiContext);
  const { logoutUser, username, privatePosts } = origamiContext;
  const logout = (e) => {
    console.log("clock");
    logoutUser();
  };

  return (
    <div className="Profile">
      <h1>Profile page</h1>
      <div className="personal-info">
        <p>
          <span>Email: </span>
          {username}
        </p>
        <p>
          <span>Posts: </span>
          {privatePosts.length}
        </p>
      </div>
      <button onClick={logout}>Logout</button>
      <div>
        <h2>3 recent posts</h2>
        <PrivatePosts />
      </div>
    </div>
  );
};

export default Profile;
