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
import wp from './Images/im1.jpeg'
import wp2 from './Images/whatsapplogo.png'
import GalleryPage from './components/GalleryPage';
import LiveChat from './components/LiveChat';
import StudyInCyprus from './components/StudyInCyprus';
import StudyInScotlandPage from './components/StudyInScotLand';
import StudyInTurkey from './components/StudyInTurkey';
import StudyInCanada from './components/StudyInCanada';
import StudyInUk from './components/StudyInUk';
import StudyInGeorgia from './components/StudyInGeorgia';


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
    <Route path='/studyinbarbados' element={<SchoolInfo/>}/>
    <Route path='/gallery' element={<GalleryPage/>}/>
    <Route path ='/studyincyprus' element ={<StudyInCyprus/>}/>
    <Route path = '/studyinscotland' element={<StudyInScotlandPage/>}/>
    <Route path='/studyinturkey' element={<StudyInTurkey/>}/>
    <Route path='/studyincanada' element={<StudyInCanada/>}/>
    <Route path='/studyinuk' element={<StudyInUk/>}/>
    <Route path='/studyingeorgia' element={<StudyInGeorgia/>}/>
  </Routes>
  <a><img src={wp} alt="logo" className="WhatsAppIcon" /></a> 

  <a><img src={wp2} alt="logo"  onClick={() => window.open("https://wa.me/2349014444327", "_blank")}  className="WhatsAppIcon2" /></a> 
     
  <Footer/>
  <LiveChat/>
  </BrowserRouter>
  );
}

export default App;



// lie chat credetials
// 
// info@zutigoeduconsult.com

// zutigo123zutigo