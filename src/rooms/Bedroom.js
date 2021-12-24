import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import '../App.css';
import { ReactComponent as BedroomSvg } from "../assets/bedroom.svg";
import TextBox from "../TextBox.js"
import Audio from "../Audio.js"
import { showText } from '../helpers';

import Sound from "react-sound"
import soundone from "../assets/sounds/bedroom-cellphone.mp3"
import soundtwo from "../assets/sounds/bedroom-blouses.mp3"
import soundthree from "../assets/sounds/bedroom-chopsticks.mp3"
import soundfour from "../assets/sounds/bedroom-doll.mp3"
import soundfive from "../assets/sounds/bedroom-jewelry.mp3"
import soundsix from "../assets/sounds/bedroom-lights.mp3"
import soundseven from "../assets/sounds/bedroom-police-report.mp3"
import soundeight from "../assets/sounds/bedroom-shoes.mp3"


const bmTextCellphone = "Hmm I wonder why Mrs. Galavaten didn’t take her phone. Hmm. Oh my it appears to be locked"

function Bedroom({onwards, setScene }) {

    const [textVisible, setTextVisible] = useState(false)
    const [text, setText] = useState(""); 

    const [soundUrlToPlay, setSoundUrlToPlay] = useState(null)

    const svgRef = useRef();
    const q = gsap.utils.selector(svgRef);

    const cellPhoneId = "#cellphone_Image"
  
    // wait until DOM has been rendered
    useEffect(() => {

    // 1 cellphone 
    svgRef.current.querySelector(cellPhoneId).onclick=((targ)=>{
        console.log("cellphone clicked ", targ)
        showText(bmTextCellphone, setText, setTextVisible)
        setSoundUrlToPlay(soundone)
        // gsap.to(q(cellPhoneId), { opacity: 0.5, duration: 0.6, repeat: 4, ease: "power.inOut" });
    })

    });


  return (
    <>
        <div className="Scene">
            <div className="wrapper svg-wrapper">
                <BedroomSvg ref={svgRef}/> 
            </div>
        </div>
        <TextBox text={text} setTextVisible={setTextVisible} visible={textVisible}/>
        <div className="button-strip">
            {
                onwards.map((path, i) => {
                    return  <button onClick={() => setScene(path)} key={i}>Go to {path}</button>
                })
            }
        </div>
        <Audio soundUrl={soundUrlToPlay} />
    </>
  );
}

export default Bedroom;