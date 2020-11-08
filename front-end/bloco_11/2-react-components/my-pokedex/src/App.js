import './App.css';
import pokelist from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <h1 className='title'>My Pokedex</h1>
      <Pokedex pokelist={pokelist} />
    </div>
  );
}

export default App;
