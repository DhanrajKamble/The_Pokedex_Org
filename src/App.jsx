import { useState } from "react";
import Header from "./components/Header";
import Pokedex from "./components/Pokedex";
import PokeInfo from "./components/PokeInfo";
import Footer from "./components/Footer";

const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null); // Store selected Pokémon

  return (
    <main>
      <header>
        <Header />
      </header>
      <section className="container">
        <div className="left-content">
          {/* Pass setSelectedPokemon to Pokedex so it can update */}
          <Pokedex setSelectedPokemon={setSelectedPokemon} />
        </div>
        <div className="right-content">
          {/* Show PokeInfo only if a Pokémon is selected */}
          {selectedPokemon ? <PokeInfo pokemon={selectedPokemon} /> : <p className="empty-box">Select a Pokémon to see details</p>}
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default App;
