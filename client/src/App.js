import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav';
import  Footer  from './components/Footer';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import {Gallery} from './pages/Gallery';
import {About} from './pages/About';
import {Contact} from "./pages/Contact";
import { MensWear } from './pages/MensWear';
import { WomensWear } from './pages/WomensWear';
import Fqa from './components/order&Fqa/Fqa'
import { OrderFqa } from './pages/OrderFqa';
import VismeEmbed from './pages/VismeEmbed';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/product'  element={<Product />}/>
        <Route path='/product/menswear'  element={<MensWear />}/>
        <Route path='/product/womenswear'  element={<WomensWear />}/>
        <Route path='/product/menswear'  element={<MensWear />}/>
        <Route path='/gallery'  element={<Gallery />}/>
        <Route path='/about'  element={<About />}/>
        <Route path='/contact'  element={<Contact />}/>
        <Route path='/order & faq'  element={<OrderFqa />}/>
        <Route path='/only-admin'  element={<AdminDashboard />}/>
        {/* <Route path='/*'  element={< />}/> */}

        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
