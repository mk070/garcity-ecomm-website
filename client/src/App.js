import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav';
import Footer from './components/Footer';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Gallery } from './pages/Gallery';
import { About } from './pages/About';
import { Contact } from "./pages/Contact";
import { MensWear } from './pages/MensWear';
import { WomensWear } from './pages/WomensWear';
import { Admin } from './pages/Admin';
import { Dashboard } from './components/adminpage/Dashboard';
import { KidsWear } from './pages/KidsWear';
import PageLoader from './components/Pageloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    // Clear timeout when component unmounts
    return () => clearTimeout(timeout);
  }, []);

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
      {!isAdminDashboard(currentPath) && !isDashboard(currentPath) && <Nav />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/menswear' element={<MensWear />} />
        <Route path='/product/womenswear' element={<WomensWear />} />
        <Route path='/product/kidswear' element={<KidsWear />} />
        <Route path='/product/sportswear' element={<WomensWear />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/only-admin' element={<Admin />} />
        <Route path='/only-admin/dashboard' element={<Dashboard />} />
        <Route path='/only-admin/dashboard/gallery' element={<Gallery />} />
      </Routes>
      {isLoading && <PageLoader />}
      {!isAdminDashboard(currentPath) && !isDashboard(currentPath) && <Footer />}
    </>
  );
}

export default App;
