
import { ThemeProvider } from "@mui/system";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/routing";
import {themeMain} from "./theme/themeMain";

function App() {

  return (
    <ThemeProvider theme={themeMain}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
