import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import Home from './Components/HomePage/HeroImage';
import About from './Components/Pages/Aboutus';
import Driver from './Components/Pages/Drive';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import ContactUs from './Components/Pages/ContactUs';
import OneWayCarList from './Components/Pages/oneWay-car-list';
import RoundTripCarList from './Components/Pages/rounTrip-car-list';
import BookingForm from './Components/Pages/BookingForm';
import Tours from './Components/HomePage/Tours';


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
          <Route path='/car-list/one-way' element={<OneWayCarList />} />
          <Route path='/car-list/round-trip' element={<RoundTripCarList />} />
          <Route path='/booking-form' element={<BookingForm  />} />
          <Route path='/tours' element={<Tours  />} />


        </Routes>
        <ToastContainer closeButton={false} position="bottom-right" />

        <Footer />
      </Router>
    
    </>
  );
}

export default App
