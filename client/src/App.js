import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import PageLoader from './components/Pageloader.js';
import { MoveupButton } from './components/MoveupButton';
import { ContactButton } from './components/ContactButton';
import { NotFound } from './components/NotFound';
import { lazyLoad } from './lazyLoad.js';
// import {Product} from './pages/Product'
import { Home } from './pages/Home.js';
import { Helmet } from 'react-helmet';

// Lazy load components
const Nav = lazyLoad("./components/Nav", "Nav");
const Footer = lazyLoad('./components/Footer','Footer');
// const Home = lazyLoad('./pages/Home','Home');
const Product = lazyLoad('./pages/Product','Product');
const Gallery = lazyLoad('./pages/Gallery','Gallery');
const About = lazyLoad('./pages/About','About');
const Contact = lazyLoad('./pages/Contact','Contact');
const MensWear = lazyLoad('./pages/MensWear','MensWear');
const WomensWear = lazyLoad('./pages/WomensWear','WomensWear');
const Admin = lazyLoad('./pages/Admin','Admin');
const Dashboard = lazyLoad('./components/adminpage/Dashboard','Dashboard');
const KidsWear = lazyLoad('./pages/KidsWear','KidsWear');
const SportsWear = lazyLoad('./pages/SportsWear','SportsWear');
const ManageGallery = lazyLoad('./components/adminpage/ManageGallery','ManageGallery');
const ManageClientLogos = lazyLoad('./components/adminpage/ManageClientLogos','ManageClientLogos');
const ManagePopularWork = lazyLoad('./components/adminpage/ManagePopularWork','ManagePopularWork');
const ManageYoutubeVideo = lazyLoad('./components/adminpage/ManageYoutubeVideo','ManageYoutubeVideo');

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    });

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
      <Helmet>
        <title>Garcity manufacturers</title>
        <meta name="description" content="Garcity is more than just a garment manufacturer – we are the architects of your unique style." />
        <meta property="og:title" content="Garcity - Architects of Your Unique Style" />
        <meta property="og:description" content="Garcity is more than just a garment manufacturer – we are the architects of your unique style." />
        <meta property="og:image" content="https://www.garcity.com/fav.png" />
        <meta property="og:url" content="https://www.yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Garcity - Architects of Your Unique Style" />
        <meta name="twitter:description" content="Garcity is more than just a garment manufacturer – we are the architects of your unique style." />
        <meta name="twitter:image" content="https://www.garcity.com/fav.png" />
      </Helmet>

      <Suspense fallback={<PageLoader />}>
        {shouldRenderFooterButtons && <Nav />}
      </Suspense>

      <Routes>
        <Route path='/' element={
            <Home />
        
        } />
        <Route path='/product' element={
          <Suspense fallback={<PageLoader />}>
            <Product />
          </Suspense>
        } />
        <Route path="/product/men'swear" element={
          <Suspense fallback={<PageLoader />}>
            <MensWear />
          </Suspense>
        } />
        <Route path="/product/women'swear" element={
          <Suspense fallback={<PageLoader />}>
            <WomensWear />
          </Suspense>
        } />
        <Route path="/product/kid'swear" element={
          <Suspense fallback={<PageLoader />}>
            <KidsWear />
          </Suspense>
        } />
        <Route path='/product/sportswear' element={
          <Suspense fallback={<PageLoader />}>
            <SportsWear />
          </Suspense>
        } />
        <Route path='/gallery' element={
          <Suspense fallback={<PageLoader />}>
            <Gallery />
          </Suspense>
        } />
        <Route path='/about' element={
          <Suspense fallback={<PageLoader />}>
            <About />
          </Suspense>
        } />
        <Route path='/contact' element={
          <Suspense fallback={<PageLoader />}>
            <Contact />
          </Suspense>
        } />
        <Route
          path='/only-admin'
          element={
            isAuthenticated() ? (
              <Navigate to='/only-admin/dashboard' replace />
            ) : (
              <Suspense fallback={<PageLoader />}>
                <Admin />
              </Suspense>
            )
          }
        />
        <Route
          path='/only-admin/dashboard'
          element={
            isAuthenticated() ? (
              <Suspense fallback={<PageLoader />}>
                <Dashboard />
              </Suspense>
            ) : (
              <Navigate to='/only-admin' replace />
            )
          }
        />
        <Route
          path='/only-admin/Managegallery'
          element={
            isAuthenticated() ? (
              <Suspense fallback={<PageLoader />}>
                <ManageGallery />
              </Suspense>
            ) : (
              <Navigate to='/only-admin' replace />
            )
          }
        />
        <Route
          path='/only-admin/Managelogo'
          element={
            isAuthenticated() ? (
              <Suspense fallback={<PageLoader />}>
                <ManageClientLogos />
              </Suspense>
            ) : (
              <Navigate to='/only-admin' replace />
            )
          }
        />
        <Route
          path='/only-admin/ManagePopularWork'
          element={
            isAuthenticated() ? (
              <Suspense fallback={<PageLoader />}>
                <ManagePopularWork />
              </Suspense>
            ) : (
              <Navigate to='/only-admin' replace />
            )
          }
        />
        <Route
          path='/only-admin/ManageYoutubevideo'
          element={
            isAuthenticated() ? (
              <Suspense fallback={<PageLoader />}>
                <ManageYoutubeVideo />
              </Suspense>
            ) : (
              <Navigate to='/only-admin' replace />
            )
          }
        />
        <Route path='/*' element={<NotFound />} />
      </Routes>

      <Suspense fallback={<PageLoader />}>
        {shouldRenderFooterButtons && <Footer />}
        {shouldRenderFooterButtons && <MoveupButton />}
        {shouldRenderFooterButtons && <ContactButton />}
      </Suspense>
    </>
  );
}

export default App;
