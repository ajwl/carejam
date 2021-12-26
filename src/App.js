import React, { useState } from 'react';
import './App.css';

import Intro from './rooms/Intro.js'
import Hall from './rooms/Hall.js'
import Bench from './rooms/Bench.js'
import Kitchen from './rooms/Kitchen.js'
import Driveway from './rooms/Driveway.js'
import Living from './rooms/LivingRoom.js'
import Bedroom from './rooms/Bedroom.js'


function App() {

    // store a reference to the box div
    // const boxRef = useRef();

    // wait until DOM has been rendered
    // useEffect(() => {
    //   gsap.to(boxRef.current, { rotation: "+=360" });
    // });

  const [scene, setScene] = useState("bedroom");

  const introTxt = "Margate, 4:55pm, you are 5 minutes early"
  const hallTxt = "Gooooooood afternoon, Mrs. Galavaten! Hope you’re ready for a long walk… Hello? Mrs. Galavaten? Where are you…?"
  const bedroomTxt = "Strange Mrs Pearlson never turned the lights out"
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
        <Bedroom 
          text={bedroomTxt} 
          name="bedroom" 
          onwards={["hall"]}
          setScene={setScene}>
        </Bedroom>
      )
    }
    else if(scene === 'living') {
      return (
        <Living 
          text={livingTxt} 
          name="living" 
          onwards={["hall"]}
          setScene={setScene}>
        </Living>
      )
    }
    else if(scene === 'kitchen') {
      return (
          <Kitchen 
            text={kitchenTxt} 
            name="kitchen" 
            onwards={["hall"]}
            setScene={setScene}>
          </Kitchen>
      )
    }
    else if(scene === 'driveway') {
      return (
          <Driveway 
            text={drivewayTxt} 
            name="driveway" 
            onwards={["hall","bench"]}
            setScene={setScene}>
          </Driveway>
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
