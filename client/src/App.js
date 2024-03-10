import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import {Gallery} from './pages/Gallery';
import {About} from './pages/About';
import {Contact} from "./pages/Contact";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/product'  element={<Product />}/>
        <Route path='/gallery'  element={<Gallery />}/>
        <Route path='/about'  element={<About />}/>
        <Route path='/contact'  element={<Contact />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
