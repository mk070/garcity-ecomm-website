import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import  Nav  from './components/Nav';
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
import { MoveupButton } from './components/MoveupButton';
import { ContactButton } from './components/ContactButton';
import { NotFound } from './components/NotFound';
import { SportsWear } from './pages/SportsWear';
import { ManageGallery } from './components/adminpage/ManageGallery';
import { ManageClientLogos } from './components/adminpage/ManageClientLogos';
import { ManagePopularWork } from './components/adminpage/ManagePopularWork';
import { ManageYoutubeVideo } from './components/adminpage/ManageYoutubeVideo';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Clear timeout when component unmounts
    return () => clearTimeout(timeout);
  }, []);

  // Function to check if the user is authenticated (you need to implement this logic)
  const isAuthenticated = () => {
    // Check if the JWT token exists in local storage
    const token = localStorage.getItem('token');

    // Return true if the token exists, false otherwise
    return !!token; // !! converts the token value to a boolean
  };

  // Function to check if the current path is for the admin dashboard
  const isAdminPage = (path) => path.startsWith('/only-admin');

  const shouldRenderFooterButtons = !isAdminPage(window.location.pathname);

  return (
    <>
      {shouldRenderFooterButtons && <Nav />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path="/product/men'swear" element={<MensWear />} />
        <Route path="/product/women'swear" element={<WomensWear />} />
        <Route path="/product/kid'swear" element={<KidsWear />} />
        <Route path='/product/sportswear' element={<SportsWear />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route
          path='/only-admin'
          element={
            isAuthenticated() ? (
              <Navigate to='/only-admin/dashboard' replace />
            ) : (
              <Admin />
            )
          }
        />

        <Route
          path='/only-admin/dashboard'
          element={
            isAuthenticated() ? (
              <Dashboard />
            ) : (
              <Navigate to='/only-admin' replace />
            )
          }
        />
        <Route
          path='/only-admin/Managegallery'
          element={
            isAuthenticated() ? (
              <ManageGallery />
            ) : (
              <Navigate to='/only-admin' replace />
            )
          }
        />
        <Route
          path='/only-admin/Managelogo'
          element={
            isAuthenticated() ? (
              <ManageClientLogos />
            ) : (
              <Navigate to='/only-admin' replace />
            )
          }
        />
        <Route
          path='/only-admin/ManagePopularWork'
          element={
            isAuthenticated() ? (
              <ManagePopularWork />
            ) : (
              <Navigate to='/only-admin' replace />
            )
          }
        />
        <Route
          path='/only-admin/ManageYoutubevideo'
          element={
            isAuthenticated() ? (
              <ManageYoutubeVideo />
            ) : (
              <Navigate to='/only-admin' replace />
            )
          }
        />
        <Route path='/*' element={<NotFound />} />
      </Routes>

      {isLoading && <PageLoader />}
      {shouldRenderFooterButtons && <Footer />}
      {shouldRenderFooterButtons && <MoveupButton />}
      {shouldRenderFooterButtons && <ContactButton />}
    </>
  );
}

export default App;
