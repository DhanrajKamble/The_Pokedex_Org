import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const PokemonCard = ({ pokemon: { name, url } }) => {
    const [image, setImage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const fetchPokemonDetails = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setImage(data.sprites.other["official-artwork"].front_default);
        } catch (error) {
            console.error(`Failed to fetch Pokemon details: ${error}`)
        } finally {
            setIsLoading(false);
        }
    }


    useEffect(() => {
        fetchPokemonDetails();
    }, [url]);

    return (
        <div className="poke-card">
            <h1 className="pokemon-name">{name}</h1>
            {
                isLoading ?
                    (<Spinner />) :
                    <img className="pokemon-img" src={image} alt={name} onError={(event) => (event.target.src = "https://via.placeholder.com/150")} />
            } 
        </div>
    )
}

export default PokemonCard;