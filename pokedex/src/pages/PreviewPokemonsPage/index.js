import Header from "../../components/header";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";
import ActionAreaCard from "../../components/card";

export default function PreviewPage() {
  return (
    <div>
      <Header
        title="ir para Home"
        to="/"
        icon={<HomeIcon variant="contained" color="secondary" />}
      />
    
      <Grid container spacing={2}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <ActionAreaCard />
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <ActionAreaCard />
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <ActionAreaCard />
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <ActionAreaCard />
        </Grid>
      </Grid>
    </div>
  );
}
