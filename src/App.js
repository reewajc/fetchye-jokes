import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jokes from './Jokes';

function App() {
  const url = 'https://v2.jokeapi.dev/joke/Any'
  return (
    <div className="App">
      <Jokes url={url}/>
    </div>
  );
}

export default App;
