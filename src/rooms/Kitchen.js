import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import '../App.css';
import { ReactComponent as KitchenSvg } from "../assets/kitchen.svg";
import TextBox from "../TextBox.js"
import Audio from "../Audio.js"
import { showText, pulseCircle } from '../helpers.js';

import soundCash from "../assets/sounds/kitchen-cash.mp3"
import soundObit from "../assets/sounds/kitchen-obit.mp3"
import soundPhone from "../assets/sounds/kitchen-phone.mp3"
import soundBuzz from "../assets/sounds/kitchen-buzzing.mp3"

import {ktTextCash, ktTextObit, ktTextPhone} from "../allText.js"

function Kitchen({ onwards, setScene }) {

    const [textVisible, setTextVisible] = useState(false)
    const [text, setText] = useState(""); 
    const [soundUrlToPlay, setSoundUrlToPlay] = useState(soundBuzz)
    const [isObitShowing, setIsObitShowing] = useState(false)

    const svgRef = useRef();
    const q = gsap.utils.selector(svgRef);

    const cashId = "#k-cash"
    const phoneId = "#k-phone"
    const obitId = "#k-obit"
    const expandedObitId = "#obituaryBig_Image"

    const kDoorHall = "#k-door-hall"
    const kDoorLiving = "#k-door-living"
    const backgroundKId = "#colours_Image"


    // wait until DOM has been rendered
    useEffect(() => {

        const hideItem = (id) =>{
            return gsap.to(q(id), { opacity: 0, duration: 0.6, ease: "power1.out" });
        }
    
        const showItem = (id) => {
            return gsap.to(q(id), {opacity: 1, duration: 0.6, ease: "power1.out"})
        }

        // 1 cash 
        svgRef.current.querySelector(cashId).onclick=((targ)=>{
            showText(ktTextCash, setText, setTextVisible)
            setSoundUrlToPlay(soundCash)
            pulseCircle(q, cashId)
        })

        // 2 phone 
        svgRef.current.querySelector(phoneId).onclick=((targ)=>{
            showText(ktTextPhone, setText, setTextVisible)
            setSoundUrlToPlay(soundPhone)
            pulseCircle(q, phoneId)
        })

        // 3 obit
        svgRef.current.querySelector(obitId).onclick=((targ)=>{
            showText(ktTextObit, setText, setTextVisible)
            setSoundUrlToPlay(soundObit)
            pulseCircle(q, obitId)
            if(isObitShowing) {
                hideItem(expandedObitId)
                setIsObitShowing(false)
            } else {
                showItem(expandedObitId)
                setIsObitShowing(true)
            }
        })


        // 4 background - clear out
        svgRef.current.querySelector(backgroundKId).onclick=((targ)=>{
            setTextVisible(false)
            setSoundUrlToPlay(null)
            hideItem(expandedObitId)
            setIsObitShowing(false)
        })

        // 5 NAVIGATION to hall 
        svgRef.current.querySelector(kDoorHall).onclick = (() => {
            gsap.fromTo(q(kDoorHall), { fill: "#00ffed;" }, { fill: "transparent", duration: 0.3, repeat: 3, ease: "power.inOut" });
            setTimeout(() => { setScene("hall") }, 900);
        })


        // 6 NAVIGATION to living
        svgRef.current.querySelector(kDoorLiving).onclick = (() => {
            gsap.fromTo(q(kDoorLiving), { fill: "#00ffed;" }, { fill: "transparent", duration: 0.3, repeat: 3, ease: "power.inOut" });
            setTimeout(() => { setScene("living") }, 900);
        })


    },[q, setScene, isObitShowing]);


  return (
    <>
        <div className="Scene" id="living">
            <div className="wrapper svg-wrapper">
                <KitchenSvg ref={svgRef}/> 
            </div>
        </div>
        <TextBox text={text} setTextVisible={setTextVisible} visible={textVisible}/>
        <Audio soundUrl={soundUrlToPlay} />
    </>
  );
}

export default Kitchen;





