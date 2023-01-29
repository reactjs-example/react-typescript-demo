import { useContext } from "react";
import { LoggedInUser, UserContext } from "./UserContext";

export const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    if (userContext) {
      let name = "rabi";
      let email = "abc@gmail.com";
      userContext.setUser({ name, email });
    }
  };
  const handleLogout = () => {
    if (userContext) {
        let emptyObject:LoggedInUser={};
      userContext.setUser(emptyObject);
    }
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <br />
      <div> {`User is:${userContext.user.name}`} </div>
    </>
  );
};
