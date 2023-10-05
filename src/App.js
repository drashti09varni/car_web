import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import Home from './Components/HomePage/HeroImage';
import About from './Components/Pages/Aboutus';
import Driver from './Components/Pages/Drive';
import './App.css';
import ContactUs from './Components/Pages/ContactUs';
import CarList from './Components/Pages/car-list';


function App() {


  return (
    <>


      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/driver' element={<Driver />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path='/car-list' element={<CarList />} />

        </Routes>
        <Footer />
      </Router>
    
    </>
  );
}

export default App
