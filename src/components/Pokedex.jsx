import axios from "axios";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import PokemonCard from "./PokemonCard";


const Pokedex = () => {
    const [pokemon, setPokemons] = useState([]);
    const [nextURL, setNextURL] = useState('');
    const [isLoading, setLoading] = useState(false);

    const [previousURL, setPreviousURL] = useState('');
    const [currentURL, setCurrentURL] = useState("https://pokeapi.co/api/v2/pokemon?limit=20")


    const fetchPokemons = async (url) => {
        setLoading(true);
        try {
            const response = await axios.get(url);
            const nextUrl = response.data.next;
            const prevUrl = response.data.previous;
            const pokemonList = response.data.results
            setNextURL(nextUrl);
            setPreviousURL(prevUrl);
            setPokemons(pokemonList);
        } catch (error) {
            console.error(`Failed to fetch pokemon... ${error}`);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPokemons(currentURL);
    }, [currentURL]);


    return (
        <div className="poke-card-container">
            {isLoading ?
                <Spinner /> : pokemon.map((eachPokemon, index) =>
                    <PokemonCard key={index} pokemon={eachPokemon} />
                )
            }
             {/* ✅ Pagination Buttons */}
             <div className="button-container">
                        {previousURL && (
                            <button onClick={() => setCurrentURL(previousURL)}>
                                Previous
                            </button>
                        )}
                        {nextURL && (
                            <button onClick={() => setCurrentURL(nextURL)}>
                                Next
                            </button>
                        )}
                    </div>
        </div>
    )
}

export default Pokedex;