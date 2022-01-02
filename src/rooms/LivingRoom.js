import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import '../App.css';
import { ReactComponent as LivingSvg } from "../assets/livingroom.svg";
import TextBox from "../TextBox.js"
import Audio from "../Audio.js"
import { showText, pulseCircle } from '../helpers.js';

import soundCert from "../assets/sounds/living-certificate.mp3"
import soundPortrait from "../assets/sounds/living-portrait.mp3"
import soundScarf from "../assets/sounds/living-scarf.mp3"
import soundWalk from "../assets/sounds/living-walk.mp3"

const livTextCertificate = "Her certificate of achievement. Let me read this one: “Margate’s Local Hero Award 2015. 30 Years of Dedication and Service to the Community.” Even though we were boss and employee, activism was one of the few ways Mrs. Galavaten and I connected as friends. Yeah, she was an activist. I’m an activist. I love that."
const livTextScarf = "Hmm her scarf. Mrs. Galavaten takes this scarf everywhere with her. In fact, she never leaves the house without it. It was a gift from an old colleague at her school, where she taught."
const livTextPortrait = "Portrait of Mr. Galavaten. Mr. Galavaten was an avid fisherman. He passed away in 2017 – just a year before I started caring for Mrs. Galavaten. By then, she had already been diagnosed with dementia. The two got married in 1954 – when she was only 18 years-old. I heard from one care worker that it was a marriage of convenience. Another told me Mr. Galavaten had many lovers on the side. "


function Living({ setScene }) {

    const [textVisible, setTextVisible] = useState(false)
    const [text, setText] = useState(""); 
    const [soundUrlToPlay, setSoundUrlToPlay] = useState(soundWalk)

    const svgRef = useRef();
    const q = gsap.utils.selector(svgRef);

    const certId = "#l-certificate"
    const portraitId = "#l-portrait"
    const scarfId = "#l-scarf"
    const lDoorKitchen = "#l-door-kitchen"

    const backgroundLivId = "#Cloours_Image"
    

    useEffect(() => {

        // 1. certificate 
        svgRef.current.querySelector(certId).onclick=(()=>{
            showText(livTextCertificate, setText, setTextVisible)
            setSoundUrlToPlay(soundCert)
            pulseCircle(q, certId)
        })

        // 2. portrait
        svgRef.current.querySelector(portraitId).onclick=(()=>{
            showText(livTextPortrait, setText, setTextVisible)
            setSoundUrlToPlay(soundPortrait)
            pulseCircle(q, portraitId)
        })

        // 3. scarf
        svgRef.current.querySelector(scarfId).onclick=(()=>{
            showText(livTextScarf, setText, setTextVisible)
            setSoundUrlToPlay(soundScarf)
            pulseCircle(q, scarfId)
        })

        // 4 background - clear out
        svgRef.current.querySelector(backgroundLivId).onclick=((targ)=>{
            setTextVisible(false)
            setSoundUrlToPlay(null)
        })

        // 5 NAVIGATION to kitchen 
        svgRef.current.querySelector(lDoorKitchen).onclick=((targ)=>{
            gsap.fromTo(q(lDoorKitchen), { fill:  "#FFED00;" },{ fill: "transparent", duration: 0.3, repeat: 3, ease: "power.inOut" });
            setTimeout(() => { setScene("kitchen") }, 900);
        })
        
        
    },[q, setScene]);


  return (
    <>
        <div className="Scene" id="living">
            <div className="wrapper svg-wrapper">
                <LivingSvg ref={svgRef}/> 
            </div>
        </div>
        <TextBox text={text} setTextVisible={setTextVisible} visible={textVisible}/>
        <Audio soundUrl={soundUrlToPlay} />
    </>
  );
}

export default Living;