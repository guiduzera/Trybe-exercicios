import Pokedex from "./pokedex";
import pokemons from "./data"
import './App.css';

const exempalres = pokemons.map((element) => element.name);

function App() {
  return (
    <div className="mainContainer">
      <Pokedex listName={exempalres}/>
    </div>
  );
}

export default App;
