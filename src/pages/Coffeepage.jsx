import React from 'react';
import Menu from '../components/Menu'
import Footer from '../components/Footer';
import Pagebar from "../components/Pagebar"

function Coffeepage() {
    return (
        <div>
            <Pagebar/>
            <Menu/>
            <Footer/>
        </div>
    );
}

export default Coffeepage;