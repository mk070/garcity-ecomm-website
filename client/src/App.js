import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import PageLoader from './components/Pageloader.js';
import { MoveupButton } from './components/MoveupButton';
import { ContactButton } from './components/ContactButton';
import { NotFound } from './components/NotFound';

// Lazy load components
const Nav = lazy(() => import('./components/Nav'));
const Footer = lazy(() => import('./components/Footer'));
const Home = lazy(() => import('./pages/Home'));
const Product = lazy(() => import('./pages/Product'));
const Gallery = lazy(() => import('./pages/Gallery'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const MensWear = lazy(() => import('./pages/MensWear'));
const WomensWear = lazy(() => import('./pages/WomensWear'));
const Admin = lazy(() => import('./pages/Admin'));
const Dashboard = lazy(() => import('./components/adminpage/Dashboard'));
const KidsWear = lazy(() => import('./pages/KidsWear'));
const SportsWear = lazy(() => import('./pages/SportsWear'));
const ManageGallery = lazy(() => import('./components/adminpage/ManageGallery'));
const ManageClientLogos = lazy(() => import('./components/adminpage/ManageClientLogos'));
const ManagePopularWork = lazy(() => import('./components/adminpage/ManagePopularWork'));
const ManageYoutubeVideo = lazy(() => import('./components/adminpage/ManageYoutubeVideo'));

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
      <Suspense fallback={<PageLoader />}>
        {shouldRenderFooterButtons && <Nav />}
      </Suspense>

      <Routes>
        <Route path='/' element={
          <Suspense fallback={<PageLoader />}>
            <Home />
          </Suspense>
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
