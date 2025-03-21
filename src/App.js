import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUsPage';
import Services from './components/OurServicesPage';
import SchoolInfo from './components/SchoolInfo';


function App() {
  return (
  <BrowserRouter>
  <ScrollToTop/>
  <Header/>
  <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/aboutus' element={<AboutUs/>}/>
    <Route path='/contactus' element={<ContactUs/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/schoolinfo' element={<SchoolInfo/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  );
}

export default App;
