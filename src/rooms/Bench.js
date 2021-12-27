import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import '../App.css';
import { ReactComponent as BenchSvg } from "../assets/bench.svg";
import TextBox from "../TextBox.js"
import Audio from "../Audio.js"
import { showText } from '../helpers.js';

import soundBeach from "../assets/sounds/bench-beach.mp3"
import soundMrsG from "../assets/sounds/bench-mrs-g.mp3"
import soundPasser from "../assets/sounds/bench-passerby.mp3"
import soundWaves from "../assets/sounds/bench-waves.mp3"


const benchTextMrsG = "Mrs. Galavaten. I found you! Hello Mrs. Galavaten. You look beautiful today. Should we look at the waves a bit longer? I’m in the mood for it. I’m so happy I found you. I can’t believe I found you. Mrs. Galavaten."
const benchTextBeach = "The beach. What a beautiful waterfront. I have walked along these sands so many times with Lililove. Laughing and holding hands. Stealing kisses and catching glimpses of each other’s gaze. Our matching guayabera shirts flapping in the salty winds of Margate."
const benchTextPasser = "Have you seen an elderly lady? Oh… you haven’t? Thank you anyway."


function Bench({ onwards, setScene }) {

    const [textVisible, setTextVisible] = useState(true)

    // store a reference to the box div
    const svgRef = useRef();
    const q = gsap.utils.selector(svgRef);

    // closeUP

    // wait until DOM has been rendered
    useEffect(() => {
      gsap.fromTo(q("#closeUP"), {opacity: 0}, { opacity: 1, duration: 6, ease: "power.inOut" });
      // noooo bad 

    });


  return (
    <>
        <div className="Scene">
            <div className="wrapper svg-wrapper">
                <BenchSvg ref={svgRef}/> 
            </div>
        </div>
        <TextBox text={benchTextBeach} setTextVisible={setTextVisible} visible={textVisible}/>
        <div className="button-strip">
            {
                onwards.map(path => {
                    return  <button onClick={() => setScene(path)}>Go to {path}</button>
                })
            }
        </div>
    </>
  );
}

export default Bench;