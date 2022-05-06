import Header from "../../components/header";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";

export default function PreviewPage() {
  return (
    <div>
      <Header
        title="ir para Home"
        to="/"
        icon={<HomeIcon variant="contained" color="secondary" />}
      />
      <NavLink to="/details">Ver Detalhes</NavLink>
    </div>
  );
}
