import React, { useState, useContext } from 'react';
import '../Input_Format.css'
import './Home_Screen.css'
import Navbar from "../../components/Navbar";
import Home from "../../Home";

function Home_Screen(){
    return(
        <><div>
            <Home />
        </div>
        <div>
          <Navbar/>
        </div>
        <div id='logo_padding'>
                <img src="/elmLogo.jpeg" alt="logo" id='logo_home' />
        </div></>
    )
}

export default Home_Screen