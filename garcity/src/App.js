import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/'  />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
