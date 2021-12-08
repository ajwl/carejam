
import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import './App.css';
import signImg from './assets/sign.png';

function Intro({text, png, onwards }) {


  return (
    <div className="Scene">
      <div className="wrapper">
      
        <header className="App-header">
            <p>
                Margate, England. June 21, 2021. 4:55PM: You arrive early for your shift.
            </p>
            <img src={signImg} className="sign" alt="margate sign" />


        </header>
      </div>
    </div>
  );
}

export default Intro;



