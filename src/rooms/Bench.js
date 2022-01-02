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

import {benchTextBeach, benchTextMrsG, benchTextPasser} from "../allText.js"

function Bench({ onwards, setScene }) {

    const [textVisible, setTextVisible] = useState(false)
    const [text, setText] = useState(""); 
    const [soundUrlToPlay, setSoundUrlToPlay] = useState(soundWaves)

    const svgRef = useRef();
    const q = gsap.utils.selector(svgRef);

    const beachId = "#b-beach"
    const passerId = "#b-passer"
    const mrsGId = "#b-ms-g"
    const mrsGExpandedId = "#closeUP"

    const backgroundBenchId = "#backgound"

    // wait until DOM has been rendered
    useEffect(() => {
        let isMsGShowing = false;

        // 1 beach
        svgRef.current.querySelector(beachId).onclick=((targ)=>{
            showText(benchTextBeach, setText, setTextVisible)
            setSoundUrlToPlay(soundBeach)
            // pulseCircle(beachId, q)
        })

        // 2 passerby
        svgRef.current.querySelector(passerId).onclick=((targ)=>{
            showText(benchTextPasser, setText, setTextVisible)
            setSoundUrlToPlay(soundPasser)
            // pulseCircle(passerId, q)
        })

        // 3 mrs g 
        svgRef.current.querySelector(mrsGId).onclick=((targ)=>{
            showText(benchTextMrsG, setText, setTextVisible)
            setSoundUrlToPlay(soundMrsG)
            if(isMsGShowing) {
                gsap.to(q(mrsGExpandedId), { opacity: 0, duration: 0.6, ease: "power1.out" });
                isMsGShowing = false;
            } else {
                gsap.to(q(mrsGExpandedId), {opacity: 1, duration: 0.6, ease: "power1.out"})
                isMsGShowing = true;
            }
        })

        // 4 background - clear out
        svgRef.current.querySelector(backgroundBenchId).onclick=((targ)=>{
            setTextVisible(false)
            setSoundUrlToPlay(null)

            gsap.to(q(mrsGExpandedId), { opacity: 0 });
            isMsGShowing = false;
        })

    },[q]);


  return (
    <>
        <div className="Scene">
            <div className="wrapper svg-wrapper">
                <BenchSvg ref={svgRef}/> 
            </div>
        </div>
        <TextBox text={text} setTextVisible={setTextVisible} visible={textVisible}/>
        <Audio soundUrl={soundUrlToPlay} />
    </>
  );
}

export default Bench;