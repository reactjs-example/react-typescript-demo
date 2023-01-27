/** explain the example of useState */
import { useState } from "react";

type LoggedInUser = {
  name?: string;
  loggedIn?: boolean;
};

export const LoginUserComponent = () => {
  const INTIAL_VALUE: LoggedInUser = {
    name: "",
    loggedIn: false,
  };
  /** instead of null below we can pass above INITIAL_VALUE too */
  const [user, setUser] = useState<LoggedInUser | null>(null);

  const loginHandler = () => {
    setUser((prevState) => ({
      ...prevState,
      loggedIn: true,
      name: "Jerry",
    }));
  };

  const logoutHandler = () => {
    setUser(INTIAL_VALUE);
  };

  return (
    <>
      <br />
      <button onClick={loginHandler}>Login 1</button>
      <button onClick={logoutHandler}>Logout 1</button>
      <br />
      {user?.loggedIn ? `logged in user is ${user.name}` : "logged out"}
    </>
  );
};
export const LoginComponent = () => {
  const [user, setUser] = useState({ loggedIn: false });
  const loginHandler = () => {
    setUser({ loggedIn: true });
  };
  const logoutHandler = () => {
    setUser({ loggedIn: false });
  };

  return (
    <>
      <br />
      <button onClick={loginHandler}>Login</button>
      <button onClick={logoutHandler}>Logout</button>
      <br />
      {user.loggedIn ? "logged in" : "logged out"}
    </>
  );
};
