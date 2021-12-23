import axios from "axios";
import { useReducer } from "react";
import { GET_PRIVATE_POSTS, USER_LOGIN, USER_LOGOUT } from "../types";
import OrigamiContext from "./origamiContext";
import OrigamiReducer from "./origamiReducer";

const OrigamiState = (props) => {
  const initialState = {
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
  };

  const [state, dispatch] = useReducer(OrigamiReducer, initialState);

  const loginUser = async (login) => {
    var response = await axios.post(
      "http://localhost:9999/api/user/login",
      login,
      { withCredentials: true }
    );
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
    var response = await axios.post(
      "http://localhost:9999/api/user/register",
      register,
      { withCredentials: true }
    );
    if (response.status === 200) {
      dispatch({
        type: USER_LOGIN,
      });
    }
  };

  const getPrivatePosts = async () => {
    var response = await axios.get("http://localhost:9999/api/origami/mine", {
      withCredentials: true,
    });
    if (response.status === 200) {
      dispatch({
        type: GET_PRIVATE_POSTS,
        payload: response.data,
      });
    }
  };

  const logoutUser = async () => {
    var response = await axios.post(
      "http://localhost:9999/api/user/logout",
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
        loginUser,
        registerUser,
        logoutUser,
      }}
    >
      {props.children}
    </OrigamiContext.Provider>
  );
};

export default OrigamiState;
