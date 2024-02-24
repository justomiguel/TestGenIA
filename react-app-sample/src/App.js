import logo from './logo.svg';
import './App.css';
import Tablero from "./components/Tablero";
import Scoreboard from "./components/Scoreboard";


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div>
              <Scoreboard />
          </div>
      </header>
    </div>
  );
}

export default App;
