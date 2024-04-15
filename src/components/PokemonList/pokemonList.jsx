import "./pokemonList.css";
import Pokemon from "../pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList";

function PokemonList() {
  // const [pokemonList, setPokemonList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [pokedexUrl, setPokedexUrl] = useState(
  //   "https://pokeapi.co/api/v2/pokemon"
  // );
  // const [nextUrl, setNextUrl] = useState("");
  // const [previousUrl, setPreviousUrl] = useState("");

  const { pokemonListState, setPokemonListState } = usePokemonList();

  return (
    <div className="pokemon-list-wrapper">
      <div className="pokemon-wrapper">
        {pokemonListState.isLoading
          ? "Loading..."
          : pokemonListState.pokemonList.map((p) => (
              <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />
            ))}
      </div>
      <div className="controls">
        <button
          disabled={pokemonListState.previousUrl == null}
          onClick={() => {
            const nextUrlToSet = pokemonListState.previousUrl;
            setPokemonListState({
              ...pokemonListState,
              pokedexUrl: nextUrlToSet,
            });
          }}
        >
          Prev
        </button>
        <button
          disabled={pokemonListState.nextUrl == null}
          onClick={() => {
            const nextUrlToSet = pokemonListState.nextUrl;
            setPokemonListState({
              ...pokemonListState,
              pokedexUrl: nextUrlToSet,
            });
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PokemonList;
