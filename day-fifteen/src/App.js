import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComponent from "./Components/NavbarComponent";

import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourites from "./Components/Favourites";
import MainContent from "./Components/MainContent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
