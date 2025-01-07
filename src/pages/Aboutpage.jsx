import React from "react";
import About from "../components/About";
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";
import Pagebar from "../components/Pagebar";

function Aboutpage() {
    return (
        <div>
            <Pagebar/>
            <About/>
            <Footer/>
        </div>
    );
}

export default Aboutpage;