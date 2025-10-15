import React from "react";
import { AuthContext } from "../MyContext/MyContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../fierbase/row";

const ContextProvider = ({ children }) => {
  const contextuse = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const users = {
    contextuse,
  };
  return (
    <div>
      <AuthContext.Provider value={users}>{children}</AuthContext.Provider>
    </div>
  );
};

export default ContextProvider;
