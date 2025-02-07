const PokeInfo = ({ pokemon }) => {
    // Check if pokemon is undefined
    if (!pokemon) {
        return <h2>Loading Pokémon Info...</h2>;
    }

    return (
        <div className="pokemon-details">
            <h1>{pokemon.name.toUpperCase()}</h1>
            <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
            <p><strong>Attack:</strong> {pokemon.stats[1].base_stat}</p>
            <p><strong>Defense:</strong> {pokemon.stats[2].base_stat}</p>
            <p><strong>Stamina:</strong> {pokemon.stats[0].base_stat}</p>
            <h3>Fast Moves</h3>
            <ul>
                {pokemon.moves.slice(0, 2).map((move, index) => (
                    <li key={index}>{move.move.name}</li>
                ))}
            </ul>
            <h3>Charge Moves</h3>
            <ul>
                {pokemon.moves.slice(2, 4).map((move, index) => (
                    <li key={index}>{move.move.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PokeInfo;
