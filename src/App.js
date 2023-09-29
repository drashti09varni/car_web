import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import Home from './Components/HomePage/HeroImage';
import About from './Components/Pages/Aboutus';
import Driver from './Components/Pages/Drive';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/driver' element={<Driver />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App
