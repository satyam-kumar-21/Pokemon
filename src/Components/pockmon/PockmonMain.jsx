import axios from "axios";
import { useEffect, useState } from "react";
import "./pockmonMain.css";

const PokemonMain = () => {
  const [pockData, setPockData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPokemonData = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      setPockData(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
      setLoading(false); 
    }
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <>
      <div className="search">
        <h3>Pokemon</h3>
        <input type="text" placeholder="Search Pokemon" />
      </div>

      <div className="pock-section">
        {loading ? (
          <p>Loading...</p> 
        ) : (
          pockData.map((pokemon, index) => (
            <div key={index} className="pock-box">
              <h4>Name: {pokemon.name}</h4>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default PokemonMain;
