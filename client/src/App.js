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
import { Admin } from './pages/Admin';
import { Dashboard } from './components/adminpage/Dashboard';

function App() {
  const currentPath = window.location.pathname;

  // Function to check if the current path is for the admin dashboard
  const isAdminDashboard = (path) => {
    return path === '/only-admin';
  };
  const isDashboard = (path) => {
    return path === '/only-admin/dashboard';
  };
  return (
    <>
      {/* Conditionally render Nav component if not on admin dashboard */}
      {!isAdminDashboard(currentPath) && !isDashboard(currentPath) && <Nav />}

      {/* Routes for the application */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/menswear' element={<MensWear />} />
        <Route path='/product/womenswear' element={<WomensWear />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/*' element={< />} /> */}

        {/* Route for AdminDashboard */}
        <Route path='/only-admin' element={<Admin />} />
        <Route path='/only-admin/dashboard' element={<Dashboard />} />
        <Route path='/only-admin/dashboard/gallery' element={<Gallery />} />
      </Routes>

      {/* Conditionally render Footer component if not on admin dashboard */}
      {!isAdminDashboard(currentPath) && !isDashboard(currentPath)  && <Footer />}
    </>
  );
}

export default App;
