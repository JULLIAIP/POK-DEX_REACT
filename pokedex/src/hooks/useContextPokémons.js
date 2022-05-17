import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

export const ContextPokémons = React.createContext();

export function GlobalPokémons({ children }) {
  const [listPokemóns, setListPokémons] = useState([]);
  const [pokémonsCompleted, setPokémonsCompleted] = useState([]);
  const [pokédex, setPokédex] = useState([]);
  console.log({pokédex})

  const addPokémon = (item) => {
    setPokédex((oldValue) => [...oldValue, item]);
  };

  const getPokémons = async () => {
    await axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20")
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
    <ContextPokémons.Provider value={{ listPokemóns, pokémonsCompleted, pokédex,addPokémon }}>
      {children}
    </ContextPokémons.Provider>
  );
}
