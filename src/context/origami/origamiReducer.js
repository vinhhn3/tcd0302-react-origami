import { USER_LOGIN } from "../types";

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
      };
    default:
      return state;
  }
};
