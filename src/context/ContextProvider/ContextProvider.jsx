import React, { useEffect, useState } from "react";
import { AuthContext } from "../MyContext/MyContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../fierbase/row";

const ContextProvider = ({ children }) => {
    const [usersa , setUsersa] = useState(null);
  // User Creat
  const contextuse = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //User Loging
  const signINUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Loging User Data Find in Firebase
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("IF COmditions Chack", user);
    } else {
      console.log("Else COmditions Chack", user);
    }
  });
  useEffect(() => {
    // mout
    const unsubcripet = onAuthStateChanged(auth, (currentUser) => {
        setUsersa(currentUser)
      if (currentUser) {
        console.log("IF COmditions Chack", currentUser);
      } else {
        console.log("Else COmditions Chack", currentUser);
      }
    });

    // clear the unmout
    return () => {
        unsubcripet();
    }
  }, []);

  //Contex Value Provied
  const users = {
    usersa,
    contextuse,
    signINUser,
  };
  return (
    <div>
      <AuthContext.Provider value={users}>{children}</AuthContext.Provider>
    </div>
  );
};

export default ContextProvider;
