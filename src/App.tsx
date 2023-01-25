import './App.css';
import { PersonComponent } from './components/Person';
import { getPersonsList, PersonList } from './components/PersonList';
import { StatusComponent } from './components/Status';
import { Welcome } from './components/Welcome';

function App() {

  return (
    <div className="App">
      <h1>First TS React App</h1>
      <Welcome name="John" count={10} status={false}/>
      <PersonComponent name='John' address={{city:'Delhi', pincode:201301}}/>
      <PersonList elem={getPersonsList().elem}/>
      <StatusComponent value='loading'/>
    </div>
  );
}

export default App;
