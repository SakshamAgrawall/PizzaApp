import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import {Routes,Route, BrowserRouter} from "react-router-dom"
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path="/" Component={HomePage} exact />
      <Route path="/cart" Component={Cart} exact />
     </Routes>

    </BrowserRouter>
  );
}

export default App;
