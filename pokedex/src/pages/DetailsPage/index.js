import Header from "../../components/header";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

export default function DetailsPage(){
    

    return(
        <div>
        <Header
        title="Ver Pokémons"
        to="/pokemons"
        icon={<CatchingPokemonIcon variant="contained" color="secondary" />}
      />
        </div>
    )
}