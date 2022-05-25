import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ContextPokémons = React.createContext();

export function GlobalPokémons({ children }) {
  const [listPokemóns, setListPokémons] = useState([]);
  const [pokémonsCompleted, setPokémonsCompleted] = useState([]);
  const [pokédex, setPokédex] = useState([]);


  const addPokémon = (item) => {
    setPokédex((oldValue) => [...oldValue, item]);
    toast("Pokémon Capturado!")
  };

  const deletePokémon = (item) => {
    const filtered = pokédex.filter((element) =>
      element.id !== item.id);
    setPokédex(filtered);
  };

  const getPokémons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setListPokémons(res.data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPokémons();
  }, []);

  const getAllData = useCallback(() => {
    listPokemóns &&
      listPokemóns.forEach((item) => {
        axios
          .get(`${item.url}`)
          .then((res) =>
            setPokémonsCompleted((oldValue) => [...oldValue, res.data])
          )
          .catch((err) => console.log(err));
      });
  }, [listPokemóns]);

  useEffect(() => {
    getAllData();
  }, [getAllData]);

  return (
    <ContextPokémons.Provider
      value={{
        listPokemóns,
        pokémonsCompleted,
        pokédex,
        addPokémon,
        deletePokémon,
      }}
    >
      {children}
    </ContextPokémons.Provider>
  );
}
