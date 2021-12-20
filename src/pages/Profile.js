import React from "react";
import Posts from "../components/post/Posts";

const Profile = () => {
  return (
    <>
      <div className="Profile">
        <h1>Profile page</h1>
        <div className="personal-info">
          <p>
            <span>Email: </span>
            user1@gmail.com
          </p>
          <p>
            <span>Posts: </span>9
          </p>
        </div>
        <div>
          <h2>3 recent posts</h2>
          <Posts />
        </div>
      </div>
    </>
  );
};

export default Profile;
