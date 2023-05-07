import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import {Routes,Route, BrowserRouter} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path="/" Component={HomePage} exact />
     </Routes>

    </BrowserRouter>
  );
}

export default App;
