import { createContext, useState } from "react";

export type LoggedInUser = {
  name?: string;
  email?: string;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

type UserContextTypeProps = {
  user: LoggedInUser;
  setUser: React.Dispatch<React.SetStateAction<LoggedInUser>>;
};
// export const UserContext = createContext<UserContextTypeProps | null>(null);
export const UserContext = createContext({} as UserContextTypeProps);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
//   const [user, setUser] = useState<LoggedInUser | null>(null);
  const [user, setUser] = useState({} as LoggedInUser);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
