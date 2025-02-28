import { BrowserRouter } from "react-router-dom";
import RouterApp from "./Router";
import GlobalStyled from "./styles/globalStyled";

function App() {
  return (
    <BrowserRouter>
      <RouterApp />
      <GlobalStyled />
    </BrowserRouter>
  );
}

export default App;
