import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import AboutPage from "./pages/Aboutpage"
import Homepage from "./pages/Homepage";
import Contactpage from "./pages/Contactpage";
import Coffeepage from "./pages/Coffeepage";


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/home" element={<Homepage />}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/coffee" element={<Coffeepage/>}/>
      <Route path="/contact" element={<Contactpage/>}/>
    </Routes>
  </BrowserRouter>

  )
}

export default App
