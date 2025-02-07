import Footer from "./components/Footer";
import Header from "./components/header";
import Pokedex from "./components/Pokedex";
import PokeInfo from "./components/PokeInfo";

const App = () => {

  return (
    <main>
      <header>
        <Header />
      </header>
      <section className="container">
        <div className="left-content">
          <Pokedex />
        </div>
        <div className="right-content">
          <PokeInfo />
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  )
}

export default App;