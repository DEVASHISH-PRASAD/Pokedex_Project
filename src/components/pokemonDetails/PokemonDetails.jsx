import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./pokemonDetail.css";
import usePokemonDetails from "../../hooks/usePokemonDetails";

function PokemonDetails({ pokemonName }) {
  const { id } = useParams();
  const [pokemon] = usePokemonDetails(id, pokemonName);

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
