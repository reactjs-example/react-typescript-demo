import "./App.css";
import { Box } from "./components/context/theme/Box";
import { ThemeContextProvider } from "./components/context/theme/ThemeContext";
import { User } from "./components/context/user/User";
import { UserContextProvider } from "./components/context/user/UserContext";
import {
  ButtonComponent,
  InputTextComponent,
} from "./components/HtmlElementEvent";
import { DivComponent } from "./components/NodeElement";
import { PersonComponent } from "./components/Person";
import { getPersonsList, PersonList } from "./components/PersonList";
import { StatusComponent } from "./components/Status";
import { StyleComponent } from "./components/StyleComponent";
import { TextContentComponent } from "./components/TextContent";
import { Counter } from "./components/reducer/UseReducerCounter";
import {
  LoginComponent,
  LoginUserComponent,
} from "./components/state/UserStateLoginComponent";
import { Welcome } from "./components/Welcome";
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
import { LoginView } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import {
  ListComponent,
  ListGenericComponent,
  ListGenericComponentStringOrNumber,
  ListGenericComponentWithIdKey,
} from "./components/generic/ListComponent";

function App() {
  return (
    <div className="App">
      <h1>First TS React App</h1>
      {/**
       * props as part of component
       */}
      <Welcome name="John" count={10} status={true} />
      {/**
       * props containing objects or nested objects
       */}
      <PersonComponent
        name="John"
        address={{ city: "Delhi", pincode: 201302 }}
      />
      <PersonList elem={getPersonsList().elem} /> {/** iterating over list */}
      {/**
       *  constraint based string values
       */}
      <StatusComponent value="loading" />
      <StatusComponent /> {/** with default value */}
      {/** dom access and nested component */}
      <TextContentComponent>Enter Text Message</TextContentComponent>
      <DivComponent>
        <TextContentComponent>Enter Text Message</TextContentComponent>
      </DivComponent>
      {/** html events */}
      <ButtonComponent
        click={() => {
          alert("btn clicked");
        }}
        click1={(e) => {
          console.log(e);
        }}
        click2={(e, id) => {
          console.log(id, e);
        }}
      />
      <InputTextComponent
        value="intial value"
        change={(e, id) => console.log(id, e)}
      />
      <StyleComponent styles={{ border: "solid black 1px", margin: "50px" }} />
      {/** useState hook */}
      <LoginComponent /> {/** a simple state object */}
      <LoginUserComponent /> {/** a state object with type */}
      {/** useReducer Hook */}
      <Counter />
      {/** useContext hooks */}
      <ThemeContextProvider>
        <Box></Box>
      </ThemeContextProvider>
      <UserContextProvider>
        <User></User>
      </UserContextProvider>
      {/** useRef */}
      <DomRef />
      <MutableRef />
      {/** a component as props */}
      <LoginView isLoggedIn={true} paramComponent={Profile} />
      {/** generic types */}
      <ListComponent
        handler={(item) => {
          console.log(item);
        }}
        values={["ab", "cd"]}
      />
      <ListGenericComponent
        handler={(item) => {
          console.log(item);
        }}
        values={["ab", "cd"]}
      />
      <ListGenericComponent
        handler={(item) => {
          console.log(item);
        }}
        values={[1, 2, 3]}
      />
      <ListGenericComponentStringOrNumber
        handler={(item) => {
          console.log(item);
        }}
        values={["ab", "cd"]}
      />
      <ListGenericComponentStringOrNumber
        handler={(item) => {
          console.log(item);
        }}
        values={[1, 2, 3]}
      />
      <ListGenericComponentWithIdKey
        handler={(item) => {
          console.log(JSON.stringify(item));
        }}
        values={[{ id: 1, name: "john" }, {id:2, name:'alex'}]}
      />
    </div>
  );
}

export default App;
