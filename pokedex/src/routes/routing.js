import {Route, Routes } from "react-router-dom";
import DetailsPage from "../pages/DetailsPage";
import HomePage from "../pages/HomePage";
import PokedexPage from "../pages/PokedexPage";
import PreviewPage from "../pages/PreviewPokemonsPage";

export default function Routing() {
  return (

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/pokemons" element={<PreviewPage />} />
        <Route exact path="/pokedex" element={<PokedexPage />} />
        <Route exact path="/details/:id" element={<DetailsPage />} />
      </Routes>

  );
}
