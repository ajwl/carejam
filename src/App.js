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


  const [scene, setScene] = useState("intro");
  const [firstTimeInHall, setFirstTimeInHall] = useState(true);


  const getSceneCompoonent = () => {
    if(scene === 'intro') {
      return (
        <Intro 
            name="intro" 
            onwards={["hall"]}
            setScene={setScene}>
          </Intro>
      )
    }
    else if(scene === 'hall') {
      return (
        <Hall 
          name="hall" 
          onwards={["bedroom", "living", "driveway", "kitchen", "intro"]}
          firstTimeInHall={firstTimeInHall}
          setFirstTimeInHall={setFirstTimeInHall}
          setScene={setScene}>
        </Hall>
      )
    }
    else if(scene === 'bedroom'){
      
      return(
        <Bedroom 
          name="bedroom" 
          onwards={["hall"]}
          setScene={setScene}>
        </Bedroom>
      )
    }
    else if(scene === 'living') {
      return (
        <Living 
          name="living" 
          onwards={["hall"]}
          setScene={setScene}>
        </Living>
      )
    }
    else if(scene === 'kitchen') {
      return (
          <Kitchen 
            name="kitchen" 
            onwards={["hall"]}
            setScene={setScene}>
          </Kitchen>
      )
    }
    else if(scene === 'driveway') {
      return (
          <Driveway 
            name="driveway" 
            onwards={["hall","bench"]}
            setScene={setScene}>
          </Driveway>
      )
    }
    else if(scene === 'bench') {
      return (
        <Bench 
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
