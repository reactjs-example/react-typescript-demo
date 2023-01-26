import './App.css';
import { DivComponent } from './components/NodeElement';
import { PersonComponent } from './components/Person';
import { getPersonsList, PersonList } from './components/PersonList';
import { StatusComponent } from './components/Status';
import { TextContentComponent } from './components/TextContent';
import { Welcome } from './components/Welcome';

function App() {

  return (
    <div className="App">
      <h1>First TS React App</h1>
      <Welcome name="John" count={10} status={false}/>
      <PersonComponent name='John' address={{city:'Delhi', pincode:201301}}/>
      <PersonList elem={getPersonsList().elem}/>
      <StatusComponent value='error'/>
      <StatusComponent/>
      <TextContentComponent>Enter Text Message</TextContentComponent>
      <DivComponent>
        <TextContentComponent>Enter Text Message</TextContentComponent>
      </DivComponent>
    </div>
  );
}

export default App;
