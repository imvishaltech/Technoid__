

import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Expertise from "./routes/Expertise";
import Contact from "./routes/Contact";
import DashRoute from "./routes/DashRoute";
import { Route, Routes } from "react-router-dom"

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return ( 
    <>
    <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/Expertise" element={<Expertise />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/DashRoute" element={<DashRoute />} />
       
        
        </Routes>
    </>
    );
}



export default App;






