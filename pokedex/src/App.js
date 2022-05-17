import { ThemeProvider } from "@mui/system";
import { BrowserRouter } from "react-router-dom";
import { GlobalPokémons } from "./hooks/useContextPokémons";
import Routing from "./routes/routing";
import { themeMain } from "./theme/themeMain";

function App() {
  return (
    <ThemeProvider theme={themeMain}>
      <GlobalPokémons>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </GlobalPokémons>
    </ThemeProvider>
  );
}

export default App;
