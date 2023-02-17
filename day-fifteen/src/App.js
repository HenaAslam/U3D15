import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavbarComponent from './Components/NavbarComponent';
import Playlist from './Components/Playlist'
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favourites from './Components/Favourites';

function App() {
  return (
    <div >
      <BrowserRouter>
  <NavbarComponent/>
  <Routes>
  <Route path="/" element={<Playlist />} />
  <Route path="/favourites" element={<Favourites />} />
  
  </Routes>
  <Footer/>
  </BrowserRouter>
 
    </div>



  
 


  );
}

export default App;
