import { useEffect, useReducer, useState } from "react";
import API from "../../api";
import {
  GET_ALL_POSTS,
  GET_PRIVATE_POSTS,
  USER_LOGIN,
  USER_LOGOUT,
} from "../types";
import OrigamiContext from "./origamiContext";
import OrigamiReducer from "./origamiReducer";

const OrigamiState = (props) => {
  const [initialState, setInitialState] = useState({
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
    username: "",
    privatePosts: [],
    allPosts: [],
  });

  const [state, dispatch] = useReducer(OrigamiReducer, initialState, () => {
    const localData = localStorage.getItem("localData");
    return localData ? JSON.parse(localData) : initialState;
  });
  useEffect(() => {
    localStorage.setItem("localData", JSON.stringify(state));
  }, [state]);

  const loginUser = async (login) => {
    var response = await API.post("/user/login", login, {
      withCredentials: true,
    });
    getPrivatePosts();
    console.log(response);
    if (response.status === 200) {
      dispatch({
        type: USER_LOGIN,
        payload: response.data,
      });
    }
  };

  const registerUser = async (register) => {
    var response = await API.post("/user/register", register, {
      withCredentials: true,
    });
    if (response.status === 200) {
      dispatch({
        type: USER_LOGIN,
      });
    }
  };

  const getPrivatePosts = async () => {
    var response = await API.get("/origami/mine?limit=3", {
      withCredentials: true,
    });
    if (response.status === 200) {
      dispatch({
        type: GET_PRIVATE_POSTS,
        payload: response.data,
      });
    }
  };

  const getAllPosts = async () => {
    var response = await API.get("/origami/all");
    dispatch({
      type: GET_ALL_POSTS,
      payload: response.data,
    });
  };

  const createPost = async (text) => {
    var response = await API.post(
      "/origami",
      { description: text },
      {
        withCredentials: true,
      }
    );
    if (response.status === 200) {
      getPrivatePosts();
    }
  };

  const logoutUser = async () => {
    var response = await API.post(
      "/user/logout",
      {},
      { withCredentials: true }
    );
    if (response.status === 200) {
      dispatch({
        type: USER_LOGOUT,
      });
    }
  };

  return (
    <OrigamiContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        linkItems: state.linkItems,
        username: state.username,
        privatePosts: state.privatePosts,
        allPosts: state.allPosts,
        loginUser,
        registerUser,
        logoutUser,
        createPost,
        getAllPosts,
        dispatch,
      }}
    >
      {props.children}
    </OrigamiContext.Provider>
  );
};

export default OrigamiState;
