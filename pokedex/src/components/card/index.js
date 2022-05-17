import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ContextPokémons } from "../../hooks/useContextPokémons";

export default function ActionAreaCard(props) {
  const { addPokémon } = React.useContext(ContextPokémons);
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.item.sprites.front_default}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.item.forms[0].name}
          </Typography>
          <Button variant="contained">
            <NavLink to={`/details/${props.item.id}`}>Ver Detalhes</NavLink>
          </Button>
          <Button variant="contained" onClick={() => addPokémon(props.item)}>
            Adcionar à pokédex
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
