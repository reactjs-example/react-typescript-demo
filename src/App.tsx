import './App.css';
import { ButtonComponent, InputTextComponent } from './components/HtmlElementEvent';
import { DivComponent } from './components/NodeElement';
import { PersonComponent } from './components/Person';
import { getPersonsList, PersonList } from './components/PersonList';
import { StatusComponent } from './components/Status';
import { StyleComponent } from './components/StyleComponent';
import { TextContentComponent } from './components/TextContent';
import { Counter } from './components/UseReducerCounter';
import { LoginComponent, LoginUserComponent } from './components/UserStateLoginComponent';
import { Welcome } from './components/Welcome';

function App() {

  return (
    <div className="App">
      <h1>First TS React App</h1>
      {
        /**
         * props as part of component
         */
      }
      <Welcome name="John" count={10} status={true}/>
      {
        /**
         * props containing objects or nested objects
         */
      }
      <PersonComponent name='John' address={{city:'Delhi', pincode:201302}}/>
      <PersonList elem={getPersonsList().elem}/> {/** iterating over list */}
      {
        /**
         *  constraint based string values
         */
      }
      <StatusComponent value='loading'/>
      <StatusComponent/> {/** with default value */}
      {/** dom access and nested component */}
      <TextContentComponent>Enter Text Message</TextContentComponent>
      <DivComponent>
        <TextContentComponent>Enter Text Message</TextContentComponent>
      </DivComponent>
      {/** html events */}
      <ButtonComponent click={()=>{alert('btn clicked')}} 
      click1={(e)=>{console.log(e)}}
      click2={(e,id)=>{console.log(id,e)}}
      />

      <InputTextComponent value="intial value" change={(e,id)=> console.log(id, e)}/>

      <StyleComponent styles={{ border: "solid black 1px", margin: "50px" }}/>

      {/** useState hook */}
      <LoginComponent/> {/** a simple state object */}
      <LoginUserComponent/> {/** a state object with type */}

      {/** useReducer Hook */}
      <Counter/>
    </div>
  );
}

export default App;
