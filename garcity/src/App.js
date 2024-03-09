import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/home'  element={<Home />}/>
        <Route path='/'  element={<Home />}/>
        <Route path='/home'  element={<Home />}/>

      </Routes>
      <Footer />
    </>
  );
}

export default App;
