import Header from "../../components/header";
import HomeIcon from "@mui/icons-material/Home";
import { Grid } from "@mui/material";
import ActionAreaCard from "../../components/card";
import { useContext } from "react";
import { ContextPokémons } from "../../hooks/useContextPokémons";

export default function PreviewPage() {
  const listPokemóns = useContext(ContextPokémons);
  return (
    <div>
      <Header
        title="ir para Home"
        to="/"
        icon={<HomeIcon variant="contained" color="secondary" />}
      />
      {listPokemóns.pokémonsCompleted &&
        listPokemóns.pokémonsCompleted.map((item) => {
          return (
            <Grid container spacing={2} key={item.id+Math.random()}>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <ActionAreaCard item={item} />
              </Grid>
            </Grid>
          );
        })}
    </div>
  );
}
