import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import './App.css';

import Scene from './Scene.js'
import Intro from './Intro.js'

import hallImg from './assets/intro-base.jpg'
import bedroomImg from './assets/bedroom-base.png'
import signImg from './assets/sign.png'
import kitchenImg from './assets/bedroom-base.png'
import drivewayImg from './assets/bedroom-base.png'
import benchImg from './assets/bedroom-base.png'
import livingImg from './assets/livingroom-base.jpg'

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
  const kitchenTxt = ""
  const drivewayTxt = ""
  const benchTxt = ""
  const livingTxt = ""


  // const handleChange(newValue) {
  //   setValue(newValue);
  // }

  const getSceneCompoonent = () => {
    if(scene === 'intro') {
      return (
          <Intro png={signImg} setScene={setScene}></Intro>
      )
    }
    else if(scene === 'hall') {
      return (
          <Scene 
            text={hallTxt} 
            name="hall" 
            png={hallImg} 
            onwards={["bedroom", "living", "driveway", "kitchen", "intro"]}
            setScene={setScene}>
            </Scene>
      )
    }
    else if(scene === 'bedroom'){
      return(
          <Scene 
            text={bedTxt} 
            name="bedroom" 
            png={bedroomImg}
            onwards={["hall"]}
            setScene={setScene}>
          </Scene>
      )
    }
    else if(scene === 'living') {
      return (
          <Scene 
            text={livingTxt} 
            name="living" 
            png={livingImg} 
            onwards={["hall"]}
            setScene={setScene}>
          </Scene>
      )
    }
    else if(scene === 'kitchen') {
      return (
          <Scene 
            text={kitchenTxt} 
            name="kitchen" 
            png={kitchenImg} 
            onwards={["hall"]}
            setScene={setScene}>
            </Scene>
      )
    }
    else if(scene === 'driveway') {
      return (
          <Scene 
            text={drivewayTxt} 
            name="driveway" 
            png={drivewayImg} 
            onwards={["hall","bench"]}
            setScene={setScene}>
          </Scene>
      )
    }
    else if(scene === 'bench') {
      return (
          <Scene 
            text={benchTxt} 
            name="bench" 
            png={benchImg} 
            onwards={[]}
            setScene={setScene}>
          </Scene>
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
