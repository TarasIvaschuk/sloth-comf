import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext();
// const getLocalIsAuthenticated = () => {
//   const user = localStorage.getItem("isUserAuthenticated");
//   if (user) {
//     return true;
//   } else {
//     return false;
//   }
// };

export const UserProvider = ({ children }) => {
  const { loginWithRedirect, logout, user } = useAuth0();
  const [myUser, setMyUser] = useState(null);

  // useEffect(() => {
  //   if (isAuthenticated && !isLoading) {
  //     localStorage.setItem(
  //       "isUserAuthenticated",
  //       JSON.stringify(isAuthenticated)
  //     );
  //     setMyUser(user);
  //   } else if (!isLoading) {
  //     setMyUser(false);
  //   }
  // }, [isAuthenticated, isLoading, user]);
  useEffect(() => {
    setMyUser(user);
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        loginWithRedirect,
        logout,
        myUser,
        // isAuthenticated,
        // getLocalIsAuthenticated,
      }}>
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
