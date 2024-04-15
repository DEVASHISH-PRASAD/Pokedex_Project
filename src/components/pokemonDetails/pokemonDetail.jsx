import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./pokemonDetail.css";

function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  async function downloadPokemon() {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemon({
      name: response.data.name,
      image: response.data.sprites.other.dream_world.front_default,
      height: response.data.height,
      weight: response.data.weight,
      types: response.data.types.map((t) => t.type.name),
    });
  }
  useEffect(() => {
    downloadPokemon();
  }, []);

  return (
    <div className="pokemon-detail-wrapper">
      <div className="pokemon-detail-name">
        <b>Name: </b>
        {pokemon.name}
      </div>
      <div className="pokemon-detail-image">
        <img src={pokemon.image} />
      </div>
      <div className="pokemon-detail-height">
        <b>Height: </b>
        {pokemon.height}
      </div>
      <div className="pokemon-detail-weight">
        <b>Weight: </b>
        {pokemon.weight}
      </div>
      <div className="pokemon-detail-types">
        {pokemon.types && pokemon.types.map((t) => <div key={t}>{t}</div>)}
      </div>
    </div>
  );
}

export default PokemonDetails;
