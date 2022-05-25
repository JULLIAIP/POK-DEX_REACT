import Header from "../../components/Header";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailsPage() {
  const [pokémonsDetails, setPokémonsDetails] = useState([]);
  console.log(pokémonsDetails.sprites);

  const id = useParams();

  const getDetails = useCallback(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id.id}`)
      .then((res) => setPokémonsDetails(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  
  useEffect(() => {
    getDetails();
  }, [getDetails]);

  return (
    <div>
      <Header
        title="Ver Pokémons"
        to="/pokemons"
        icon={<CatchingPokemonIcon variant="contained" color="secondary" />}
      />
      <img
        src={
          (pokémonsDetails &&
            pokémonsDetails.sprites &&
            pokémonsDetails.sprites.front_default) 
        }
        alt=""
      />
    </div>
  );
}
