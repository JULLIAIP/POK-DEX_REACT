import Header from "../../components/header";
import HomeIcon from "@mui/icons-material/Home";
import { useContext } from "react";
import { ContextPokémons } from "../../hooks/useContextPokémons";
import ActionAreaCard from "../../components/card";
import { Grid } from "@mui/material";

export default function PokedexPage() {
  const { pokédex } = useContext(ContextPokémons);

  return (
    <div>
      <Header
        to="/"
        icon={<HomeIcon variant="contained" color="secondary" />}
      />
      {pokédex &&
        pokédex.map((item) => {
          return (
            <Grid container spacing={2} key={item.id}>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <ActionAreaCard item={item} />
              </Grid>
            </Grid>
          );
        })}
    </div>
  );
}
