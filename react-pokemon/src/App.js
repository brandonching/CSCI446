import "./App.css";
import "bulma/css/bulma.css";
import { useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";

function App() {
  // State to manage Pokemon data
  const [pokemonData, setPokemonData] = useState([]);
  // State to manage form input
  const [pokemonName, setPokemonName] = useState("");
  const [showStats, setShowStats] = useState(false);

  let pokemonList = [];

  // Set a unique ID for each Pokemon card
  let PUID = 1;

  const getPokemonList = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000"
      );
      for (const element of response.data.results) {
        pokemonList.push(element.name);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  getPokemonList();

  // Call the PokéAPI to fetch a list of Pokémon
  // Placeholder function for "Toggle Stats" button
  const toggleStats = () => {
    setShowStats((prevShowStats) => !prevShowStats);
  };

  // Function to add a new Pokemon card
  const addCard = async (pokemon) => {
    const newPokemon = await fetchPokemonData(pokemon);

    // Update state with new Pokemon data
    setPokemonData((prevData) => [...prevData, newPokemon]);
    // Clear the input field
    setPokemonName("");
  };

  const fetchPokemonData = async (input_name) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${input_name.toLowerCase()}`
      );
      return response.data;
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  // Function to handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Get the name of the submit button pressed and call the corresponding function
    const buttonName = event.nativeEvent.submitter.name;
    switch (buttonName) {
      case "add-pokemon":
        // If the input field is empty, return
        if (!pokemonName) {
          return;
        }
        addCard(pokemonName);

        break;
      case "feeling-lucky": {
        // Get a random Pokemon name from the list of Pokemon
        const randomIndex = Math.floor(Math.random() * pokemonList.length);
        const randomPokemon = pokemonList[randomIndex];
        addCard(randomPokemon);
        break;
      }
      case "clear-all":
        // Prompt the user to confirm before clearing all Pokemon cards
        if (
          window.confirm(
            "Are you sure you want to clear all Pokémon cards? This action cannot be undone."
          )
        ) {
          setPokemonData([]);
        }
        break;
      case "toggle-stats":
        toggleStats();
        break;
      default:
        console.error("Invalid button name:", buttonName);
    }
  };

  // Functions to handle card actions
  const handleDelete = (index) => {
    // Remove the Pokemon card at the specified index
    setPokemonData((prevData) => prevData.filter((pokemon, i) => i !== index));
  };

  const handleUpdate = async (index, newName) => {
    if (!newName) {
      return;
    } else if (pokemonList.includes(newName.toLowerCase()) === false) {
      alert("Invalid Pokemon name");
      return;
    } else {
      // Get the new pokemon data
      const newPokemon = await fetchPokemonData(newName);
      // Update the Pokemon card at the specified index with a new name
      setPokemonData((prevData) =>
        prevData.map((pokemon, i) => (i === index ? newPokemon : pokemon))
      );
    }
  };

  return (
    <div className="App">
      <header className="hero is-primary">
        <div className="hero-body has-text-left">
          <p className="title">Pokémon Card Generator</p>
          <p className="subtitle">
            Enter a Pokémon name to generate a Pokémon card
          </p>
        </div>
      </header>

      {/* Form for adding new Pokemon */}
      <div className="container has-text-left" style={{ marginTop: "2%" }}>
        <div className="box">
          <form onSubmit={handleFormSubmit}>
            <div className="field">
              <label className="label">
                Enter Pokémon Name: {"  "}
                <input
                  className="input"
                  type="text"
                  placeholder="e.g., Pikachu, Charizard"
                  value={pokemonName}
                  onChange={(e) => setPokemonName(e.target.value)}
                />
              </label>
            </div>
            <div className="control"></div>
            <div className="field">
              <button
                type="submit"
                name="add-pokemon"
                className="button is-primary"
              >
                Add Pokémon Card
              </button>
              {"  "}
              <button
                type="submit"
                name="feeling-lucky"
                className="button is-link"
              >
                I'm Feeling Lucky
              </button>
              {"  "}
              <button
                type="submit"
                name="clear-all"
                className="button is-danger"
              >
                Clear All
              </button>
              {"  "}
              <button
                type="submit"
                name="toggle-stats"
                className="button is-warning"
              >
                Toggle Stats
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Display Pokemon cards */}
      <div
        id="cards"
        className="container"
        style={{ display: "flex", flexWrap: "wrap", marginBottom: "20%" }}
      >
        {/* Render Pokemon cards */}
        {pokemonData.map((pokemon, index) => (
          <PokemonCard
            key={PUID++}
            index={index} // Pass the index as a prop
            data={{
              name: pokemon.name,
              imageUrl: pokemon.sprites.front_default,
              type: pokemon.types[0].type.name,
              stats: {
                hp: pokemon.stats[0].base_stat,
                attack: pokemon.stats[1].base_stat,
                defense: pokemon.stats[2].base_stat,
                specialAttack: pokemon.stats[3].base_stat,
                specialDefense: pokemon.stats[4].base_stat,
                speed: pokemon.stats[5].base_stat,
              },
            }}
            newName={pokemonName} // Pass newName to PokemonCard
            showStats={showStats} // Pass showStats to PokemonCard
            onDelete={() => handleDelete(index)}
            onUpdate={(newName) => handleUpdate(index, newName)} // Pass newName to handleUpdate
          />
        ))}
      </div>

      <footer className="page-footer">
        <div className="content has-text-centered">
          <p>
            <a href="https://pokeapi.co/">Powered by PokéAPI</a>
          </p>

          <i>
            <a href="https://poke-holo.simey.me/">
              Check out this cool project
            </a>{" "}
            that makes Pokémon cards shiny using CSS!
          </i>
        </div>
      </footer>
    </div>
  );
}

export default App;
