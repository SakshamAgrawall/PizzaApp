import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import {Routes,Route, BrowserRouter} from "react-router-dom"
import Cart from "./components/Cart";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path="/" Component={HomePage} exact />
      <Route path="/login" Component={Login} exact />
      <Route path="/signup" Component={SignUp} exact />
      <Route path="/cart" Component={Cart} exact />
     </Routes>

    </BrowserRouter>
  );
}

export default App;
