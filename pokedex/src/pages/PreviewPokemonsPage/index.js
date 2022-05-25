import Header from "../../components/Header";
import HomeIcon from "@mui/icons-material/Home";
import { Grid } from "@mui/material";
import ActionAreaCard from "../../components/Card";
import { useContext } from "react";
import { ContextPokémons } from "../../hooks/useContextPokémons";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

export default function PreviewPage() {
  const { addPokémon, pokémonsCompleted } = useContext(ContextPokémons);
  return (
    <div>
      <Header
        title="ir para Home"
        to="/"
        icon={<HomeIcon variant="contained" color="secondary" />}
      />
      <Grid container spacing={2}>
        {pokémonsCompleted &&
          pokémonsCompleted.map((item) => {
            return (
              <Grid
                item
                lg={2}
                md={2}
                sm={3}
                xs={6}
                key={item.id + Math.random()}
              >
                <ActionAreaCard
                  item={item}
                  action={"CAPTURAR"}
                  icon={<CatchingPokemonIcon />}
                  fc={addPokémon}
                />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}
