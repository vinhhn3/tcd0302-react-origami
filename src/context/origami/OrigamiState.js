import { useReducer } from "react";
import OrigamiContext from "./origamiContext";
import OrigamiReducer from "./origamiReducer";

const OrigamiState = (props) => {
  const initialState = {
    isLoggedIn: false,
  };

  const [state, dispatch] = useReducer(OrigamiReducer, initialState);

  return (
    <OrigamiContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
      }}
    >
      {props.children}
    </OrigamiContext.Provider>
  );
};

export default OrigamiState;
