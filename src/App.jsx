import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Shop from "./Routes/Shop.Routes";
import CartContext from "./context/CartContext";
function App() {
  return (
    <CartContext>
    <BrowserRouter>
      <Navbar />
      <Shop/>
    </BrowserRouter>
    </CartContext>
  );
}

export default App;
