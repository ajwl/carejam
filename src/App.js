import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import './App.css';

import Scene from './Scene.js'
import Intro from './Intro.js'
import hallImg from './assets/intro-base.png'
import bedroomImg from './assets/bedroom-base.png'

function App() {

    // store a reference to the box div
    // const boxRef = useRef();

    // wait until DOM has been rendered
    // useEffect(() => {
    //   gsap.to(boxRef.current, { rotation: "+=360" });
    // });

  const [scene, setScene] = useState("intro");

  const hallTxt = "Mrs Pearlson, Mrs Pearlson - are you there?"
  const bedTxt = "Strange Mrs Pearlson never turned the lights out"

  const getSceneCompoonent = () => {
    if(scene === 'intro') {
      return (
        <>
          <Intro></Intro>
          <div className="button-strip">
            <button onClick={() => setScene("hall")}>Open the door</button>
          </div>
        </>
      )
    }
    else if(scene === 'hall') {
      return (
        <>
          <Scene text={hallTxt} name="hall" png={hallImg}></Scene>
          <div className="button-strip">
            <button onClick={() => setScene("bedroom")}>Go to Bedroom</button>
            <button onClick={() => setScene("intro")}>Return to intro</button>
          </div>
        </>
      )
    }
    else if(scene === 'bedroom'){
      return(
        <>
          <Scene text={bedTxt} name="bedroom" png={bedroomImg}></Scene>
          <div className="button-strip">
            <button onClick={() => setScene("hall")}>Go to hall</button>
          </div>
        </>
      )
    }
  }

  return (
    <div className="App">
      <div className="app-wrapper">
        <div className="header-strip"></div>

          {getSceneCompoonent(scene)}
        </div>
    </div>
  );
}

export default App;
