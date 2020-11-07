import './App.css';

const list = ['sleep', 'awake', 'exercise', 'eat', 'play', 'cry'];

function App() {
  return (
    <div className="App">
      {list.map(item => <li>{item}</li>)}
    </div>
  );
}

export default App;
