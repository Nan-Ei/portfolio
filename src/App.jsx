import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./styles/global.css"
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
    <Navbar/>    
      <Routes>  
        <Route path="/" element={<Hero/>}/> 
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/> 
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
    
  )
}