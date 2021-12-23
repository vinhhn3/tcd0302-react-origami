import axios from "axios";
import { useReducer } from "react";
import { USER_LOGIN } from "../types";
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
  };

  const [state, dispatch] = useReducer(OrigamiReducer, initialState);

  const loginUser = async (login) => {
    var response = await axios.post(
      "http://localhost:9999/api/user/login",
      login,
      { withCredentials: true }
    );
    if (response.status === 200) {
      dispatch({
        type: USER_LOGIN,
      });
    }
  };

  return (
    <OrigamiContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        linkItems: state.linkItems,
        loginUser,
      }}
    >
      {props.children}
    </OrigamiContext.Provider>
  );
};

export default OrigamiState;
