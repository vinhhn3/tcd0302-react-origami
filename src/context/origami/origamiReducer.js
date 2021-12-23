import { GET_PRIVATE_POSTS, USER_LOGIN, USER_LOGOUT } from "../types";

/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        linkItems: [
          {
            id: 1,
            title: "Share",
            url: "/share",
          },
          {
            id: 2,
            title: "Profile",
            url: "/profile",
          },
          {
            id: 3,
            title: "Main Page",
            url: "/",
          },
        ],
        username: action.payload.username,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        linkItems: [
          {
            id: 1,
            title: "Register",
            url: "/register",
          },
          {
            id: 2,
            title: "Login",
            url: "/login",
          },
          {
            id: 3,
            title: "Main page",
            url: "/",
          },
        ],
      };
    case GET_PRIVATE_POSTS:
      return {
        ...state,
        privatePosts: action.payload,
      };
    default:
      return state;
  }
};
