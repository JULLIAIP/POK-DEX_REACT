import Header from "../../components/header";
import HomeIcon from "@mui/icons-material/Home";

export default function PokedexPage() {
  return (
    <div>
      <Header
        to="/"
        icon={<HomeIcon variant="contained" color="secondary" />}
      />
    </div>
  );
}
