import Header from "../../components/Header";
import HomeIcon from "@mui/icons-material/Home";
import { useContext } from "react";
import { ContextPokémons } from "../../hooks/useContextPokémons";
import ActionAreaCard from "../../components/Card";
import { Grid } from "@mui/material";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";

export default function PokedexPage() {
  const { pokédex, deletePokémon } = useContext(ContextPokémons);

  return (
    <div>
      <Header
        to="/"
        icon={<HomeIcon variant="contained" color="secondary" />}
      />
      <Grid container spacing={2}>
        {pokédex.length > 0
          ? pokédex.map((item) => {
              return (
                <Grid item lg={4} md={4} sm={6} xs={12} key={item.id}>
                  <ActionAreaCard
                    item={item}
                    action={'REMOVER'}
                    icon={<DoDisturbOnIcon />}
                    fc={deletePokémon}
                  />
                </Grid>
              );
            })
          : "A pokedéx está vazia"}
      </Grid>
    </div>
  );
}
