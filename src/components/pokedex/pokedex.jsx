import { useState } from "react";
import PokemonList from "../PokemonList/pokemonList";
import Search from "../Search/search";
import PokemonDetails from "../pokemonDetails/PokemonDetails";
import "./pokedex.css";
function Pokedex() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="pokedex-wrapper">
      <h1>Pokedex</h1>
      <Search updateSearchTerm={setSearchTerm} />
      {!searchTerm ? (
        <PokemonList />
      ) : (
        <PokemonDetails key={searchTerm} pokemonName={searchTerm} />
      )}
    </div>
  );
}
export default Pokedex;
