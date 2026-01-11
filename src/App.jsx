import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Shop from "./Routes/Shop.Routes";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Shop/>
    </BrowserRouter>
  );
}

export default App;
