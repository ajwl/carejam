import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import '../App.css';
import { ReactComponent as IntroSvg } from "../assets/intro.svg";
import TextBox from "../TextBox.js"
import Audio from "../Audio.js"

import soundone from "../assets/sounds/intro-water-lapping.mp3"
import soundtwo from "../assets/sounds/intro-door.mp3"


function Intro({ setScene }) {

    const [textVisible, setTextVisible] = useState(true)
    const [soundUrlToPlay, setSoundUrlToPlay] = useState(soundone)

    const textOne = "Margate, England. June 21, 2021. 4:55PM: You arrive early for your shift."

    // store a reference to the box div
    const svgRef = useRef();
    const q = gsap.utils.selector(svgRef);

    // wait until DOM has been rendered
    useEffect(() => {
      gsap.fromTo(q("#doorPath_"), {opacity: 0.1}, { opacity: 0.75, duration: 1.2, repeat: 3, ease: "power.inOut" });

      // noooo bad 
      svgRef.current.querySelector("#doorPath_").onclick=(()=> {
        setSoundUrlToPlay(soundtwo)
        setTimeout(() => { setScene("hall") }, 2500);
      })
    });


  return (
    <>
        <div className="Scene">
            <div className="wrapper svg-wrapper">
                <IntroSvg ref={svgRef}/> 
            </div>
        </div>
        <TextBox text={textOne} setTextVisible={setTextVisible} visible={textVisible}/>
        <Audio soundUrl={soundUrlToPlay} />
    </>
  );
}

export default Intro;





