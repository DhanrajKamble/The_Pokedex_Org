import axios from "axios";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import PokemonCard from "./PokemonCard";


const Pokedex = ({ setSelectedPokemon }) => {
    const [pokemon, setPokemons] = useState([]);
    const [previousURL, setPreviousURL] = useState(null);
    const [nextURL, setNextURL] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [currentURL, setCurrentURL] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");

    const fetchPokemons = async (url) => {
        setLoading(true);
        try {
            const response = await axios.get(url);
            setNextURL(response.data.next);
            setPreviousURL(response.data.previous);
            setPokemons(response.data.results);
        } catch (error) {
            console.error(`Failed to fetch Pokémon... ${error}`);
        } finally {
            setLoading(false);
        }
    };

    const fetchPokemonDetails = async (pokemonUrl) => {
        setLoading(true);
        try {
            const response = await axios.get(pokemonUrl);
            setSelectedPokemon(response.data); // ✅ Update the selected Pokémon in App.jsx
        } catch (error) {
            console.error(`Failed to fetch Pokémon details... ${error}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPokemons(currentURL);
    }, [currentURL]);

    return (
        <div>
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    <div className="poke-card-container">
                        {pokemon.map((eachPokemon, index) => (
                            <PokemonCard
                                key={index}
                                pokemon={eachPokemon}
                                onClick={() => fetchPokemonDetails(eachPokemon.url)} // Click to fetch details
                            />
                        ))}
                    </div>

                    <div className="button-container">
                        {previousURL && (
                            <button className="button" onClick={() => fetchPokemons(previousURL)}>
                                Previous
                            </button>
                        )}
                        {nextURL && (
                            <button className="button" onClick={() => fetchPokemons(nextURL)}>
                                Next
                            </button>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Pokedex;
