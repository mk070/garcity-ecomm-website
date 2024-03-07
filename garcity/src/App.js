import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        
        <Route path='/' to/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
