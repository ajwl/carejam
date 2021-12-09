import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import './App.css';

import Scene from './Scene.js'
import Intro from './rooms/Intro.js'
import Hall from './rooms/Hall.js'
import Bench from './rooms/Bench.js'

import introImg from './assets/intro-base.jpg'
import hallImg from './assets/intro-base.jpg'
import bedroomImg from './assets/bedroom-base.png'
import kitchenImg from './assets/bedroom-base.png'
import drivewayImg from './assets/driveway-base.jpg'
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

  const introTxt = "Margate, 4:55pm, you are 5 minutes early"
  const hallTxt = "Gooooooood afternoon, Mrs. Galavaten! Hope you’re ready for a long walk… Hello? Mrs. Galavaten? Where are you…?"
  const bedTxt = "Strange Mrs Pearlson never turned the lights out"
  const kitchenTxt = ""
  const drivewayTxt = ""
  const benchTxt = ""
  const livingTxt = ""


  const getSceneCompoonent = () => {
    if(scene === 'intro') {
      return (
        <Intro 
            text={introTxt} 
            name="intro" 
            onwards={["hall"]}
            setScene={setScene}>
          </Intro>
      )
    }
    else if(scene === 'hall') {
      return (
        <Hall 
          text={hallTxt} 
          name="hall" 
          onwards={["bedroom", "living", "driveway", "kitchen", "intro"]}
          setScene={setScene}>
        </Hall>
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
        <Bench 
          text={benchTxt} 
          name="bench" 
          onwards={["bedroom", "living", "driveway", "kitchen", "intro"]}
          setScene={setScene}>
        </Bench>
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
