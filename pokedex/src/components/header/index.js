import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { HeaderWrapper, MenuContainer } from "./style";
import { NavLink } from "react-router-dom";
import useStyles from "../../hooks/useStyle"

export default function Header(props) {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <HeaderWrapper>
        {props.to && props.icon && (
          <NavLink title={props.title} to={props.to}>
            {props.icon}
          </NavLink>
        )}
        <MenuContainer>
          <NavLink to="/pokemons">
            <Button
              title="Ver pokémons"
              variant="text"
              color="secondary"
              className={classes.buttonMenu}
            >
              Pokémons
            </Button>
          </NavLink>
          <NavLink to="/pokedex">
            <Button
              title="Ver pokédex"
              variant="text"
              color="secondary"
              className={classes.buttonMenu}
            >
              Pokédex
            </Button>
          </NavLink>
        </MenuContainer>
      </HeaderWrapper>
    </AppBar>
  );
}
