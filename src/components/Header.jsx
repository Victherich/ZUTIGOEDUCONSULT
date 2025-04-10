import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { FaBars, FaChevronCircleDown, FaTimes } from "react-icons/fa";
import logo from '../Images/im1.jpeg'
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
const menuRef = useRef()


useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false); 
      } 
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, setMenuOpen]);




  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowDropDown(false); 
      }
    };

    if (showDropDown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropDown, setShowDropDown]);



  return (
    <Nav>
      <Logo onClick={()=>navigate('/')}><Img src={logo} alt="logo"/>Zutigo EduConsult</Logo>
      <NavLinks open={menuOpen}>
      <NavItem  onClick={()=>{navigate('/');setMenuOpen(false)}} style={{color:location.pathname==='/'?"#ffcc00":""}}>Home</NavItem>
        <NavItem onClick={()=>{navigate('/aboutus');setMenuOpen(false)}} style={{color:location.pathname==='/aboutus'?"#ffcc00":""}}>About</NavItem>
        <NavItem onClick={()=>{navigate('/services');setMenuOpen(false)}} style={{color:location.pathname==='/services'?"#ffcc00":""}}>Services</NavItem>
        <NavItem onClick={()=>{setShowDropDown(!showDropDown);setMenuOpen(true)}} style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:"5px"}}>Study Abroad <FaChevronCircleDown/></NavItem>
      {showDropDown&&<Dd ref={menuRef}>
        <NavItem onClick={()=>{navigate('/studyinbarbados');setShowDropDown(false);setMenuOpen(false)}} style={{color:"",fontSize:"1rem",marginBottom:"10px"}}>Study in Barbados</NavItem>
        <NavItem onClick={()=>{navigate('/studyincyprus');setShowDropDown(false);setMenuOpen(false)}} style={{color:"",fontSize:"1rem",marginBottom:"10px"}}>Study in Cyprus</NavItem>
        <NavItem onClick={()=>{navigate('/studyinscotland');setShowDropDown(false);setMenuOpen(false)}} style={{color:"",fontSize:"1rem",marginBottom:"10px"}}>Study in Scotland</NavItem>
        <NavItem onClick={()=>{navigate('/studyinturkey');setShowDropDown(false);setMenuOpen(false)}} style={{color:"",fontSize:"1rem",marginBottom:"10px"}}>Study in Turkey</NavItem>
        <NavItem onClick={()=>{navigate('/studyincanada');setShowDropDown(false);setMenuOpen(false)}} style={{color:"",fontSize:"1rem",marginBottom:"10px"}}>Study in Canada</NavItem>
        <NavItem onClick={()=>{navigate('/studyinuk');setShowDropDown(false);setMenuOpen(false)}} style={{color:"",fontSize:"1rem",marginBottom:"10px"}}>Study in United Kingdom</NavItem>
        <NavItem onClick={()=>{navigate('/studyingeorgia');setShowDropDown(false);setMenuOpen(false)}} style={{color:"",fontSize:"1rem",marginBottom:"10px"}}>Study in Georgia</NavItem>
        <NavItem onClick={()=>{navigate('/studyinluxemburg');setShowDropDown(false);setMenuOpen(false)}} style={{color:"",fontSize:"1rem",marginBottom:"10px"}}>Study in Luxemburg</NavItem>
        <NavItem onClick={()=>{navigate('/studyinaustralia');setShowDropDown(false);setMenuOpen(false)}} style={{color:"",fontSize:"1rem",marginBottom:"10px"}}>Study in Australia</NavItem>
      
      </Dd>}
      <NavItem onClick={()=>{navigate('/application');setMenuOpen(false)}} style={{color:location.pathname==='/application'?"#ffcc00":""}}>Apply Now</NavItem>
      
        <NavItem onClick={()=>{navigate('/contactus');setMenuOpen(false)}} style={{color:location.pathname==='/contactus'?"#ffcc00":""}}>Contact</NavItem>
      </NavLinks>
      <MenuIcon >
        {menuOpen ? <FaTimes onClick={() => setMenuOpen(!menuOpen)}/> : <FaBars onClick={() => setMenuOpen(!menuOpen)} />}
      </MenuIcon>
    </Nav>
  );
};

// Styled Components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: #004aad;
  color: white;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media(max-width:428px){
  padding:10px 20px;
  }
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
  color: #ffcc00;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:10px;

  @media(max-width:884px){
  font-size:1.2rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  position:relative;

  @media (max-width: 884px) {
    position: absolute;
    top: 70px;
    left: ${({ open }) => (open ? "0" : "-100%")};
    background: #004aad;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    transition: left 0.3s ease-in-out;
    gap:10px;
 
  }
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: 0.3s;
  cursor:pointer;
  &:hover {
    color: #ffcc00;
    text-decoration:underline;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 884px) {
    display: block;
  }
`;

const Img = styled.img`
width:40px;
border-radius:50%;


`
const Dd = styled.div`
  display:flex;
  padding :20px;
  position:absolute;
  top:150%;
  right:15%;
  background-color:rgb(2, 99, 226);
  border-radius:10px;

  z-index:99;
  flex-direction:column;

  @media(max-width:768px){
  position:relative;
  width:100%;
  right:0%;
  top:0%;

  }

@media(max-width:320px){

  height:200px;
  overflow-y:scroll;
  }

`


export default Header;
