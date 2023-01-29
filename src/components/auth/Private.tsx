import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type LoginViewProps = {
  isLoggedIn: boolean;
  paramComponent: React.ComponentType<ProfileProps>; // the type used here for parameterised component
};
export const LoginView = ({
  isLoggedIn,
  paramComponent: ComponentTag, // tag alias: starts with upper case, but param name is lowercase
}: LoginViewProps) => {
  if (isLoggedIn) {
    return <ComponentTag username="John" />;
  }
  return <Login />;
};
