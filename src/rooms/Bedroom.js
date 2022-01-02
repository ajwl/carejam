import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import '../App.css';
import { ReactComponent as BedroomSvg } from "../assets/bedroom.svg";
import TextBox from "../TextBox.js"
import Audio from "../Audio.js"
import { showText, pulseCircle } from '../helpers.js';

import soundone from "../assets/sounds/bedroom-cellphone.mp3"
import soundtwo from "../assets/sounds/bedroom-blouses.mp3"
import soundthree from "../assets/sounds/bedroom-chopsticks.mp3"
import soundfour from "../assets/sounds/bedroom-doll.mp3"
import soundfive from "../assets/sounds/bedroom-jewelry.mp3"
import soundsix from "../assets/sounds/bedroom-lights.mp3"
import soundseven from "../assets/sounds/bedroom-police-report.mp3"
import soundeight from "../assets/sounds/bedroom-shoes.mp3"

import { bmTextCellphone, bmTextShoes, bmTextClothes, bmTextSwitch, bmTextChopsticks, bmTextJewelry, bmTextDoll, bmTextReport} from "../allText.js"


function Bedroom({name, setScene }) {

    const [textVisible, setTextVisible] = useState(false)
    const [isReportShowing, setIsReportShowing] = useState(false)
    const [lightOn, setLightOn] = useState(false)
    const [text, setText] = useState(""); 

    const [soundUrlToPlay, setSoundUrlToPlay] = useState(null)

    const svgRef = useRef();
    const q = gsap.utils.selector(svgRef);

    const cellPhoneId = "#b-cellphone"
    const shoesId = "#b-shoes"
    const switchId = "#b-switch"
    const chopsticksId = "#b-chopsticks"
    const jewelryId ="#b-jewelry"
    const clothesId = "#b-clothes"
    const dollId = "#b-doll"
    const reportId = "#b-report"
    const expandedReportId = "#policeRportBig_Image"
    const lightOnId = "#LightON_Image"

    const bDoorHall = "#b-door-hall"



  
    // wait until DOM has been rendered
    useEffect(() => {

        const hideItem = (id) =>{
            return gsap.to(q(id), { opacity: 0, duration: 0.6, ease: "power1.out" });
        }
    
        const showItem = (id) => {
            return gsap.to(q(id), {opacity: 1, duration: 0.6, ease: "power1.out"})
        }
    

        // 1 cellphone 
        svgRef.current.querySelector(cellPhoneId).onclick=((targ)=>{
            showText(bmTextCellphone, setText, setTextVisible)
            setSoundUrlToPlay(soundone)
            pulseCircle(q, cellPhoneId)
        })

        // 2 shoes 
        svgRef.current.querySelector(shoesId).onclick=((targ)=>{
            showText(bmTextShoes, setText, setTextVisible)
            setSoundUrlToPlay(soundeight)
            pulseCircle(q, shoesId)
        })

        // 3 report
        svgRef.current.querySelector(reportId).onclick=((targ)=>{
            showText(bmTextReport, setText, setTextVisible)
            setSoundUrlToPlay(soundseven)
            pulseCircle(q, reportId)
            if(isReportShowing) {
                hideItem(expandedReportId)
                setIsReportShowing(false)
            } else {
                showItem(expandedReportId)
                setIsReportShowing(true)
            }
        })

        // 4 switch
        svgRef.current.querySelector(switchId).onclick=(()=>{
            showText(bmTextSwitch, setText, setTextVisible)
            setSoundUrlToPlay(soundsix)
            pulseCircle(q, switchId)
            if(lightOn) {
                gsap.to(q(lightOnId), { opacity: 0, duration: 1.2, ease: "power1.out" });
                setLightOn(false);
            } else {
                gsap.to(q(lightOnId), {opacity: .93, duration: 3, ease: "power1.out"})
                setLightOn(true);
            }
        })

        // 5 clothes IF LIGHT ON
        svgRef.current.querySelector(clothesId).onclick=((targ)=>{
            if(lightOn) {
                showText(bmTextClothes, setText, setTextVisible)
                setSoundUrlToPlay(soundtwo)
                pulseCircle(q, clothesId)
            }
        })

        // 6 chopsticks IF LIGHT ON 
        svgRef.current.querySelector(chopsticksId).onclick=((targ)=>{
            if(lightOn) {
                showText(bmTextChopsticks, setText, setTextVisible)
                setSoundUrlToPlay(soundthree)
                pulseCircle(q, chopsticksId)
            }
        })

        // 7 jewelry IF LIGHT ON 
        svgRef.current.querySelector(jewelryId).onclick=((targ)=>{
            if(lightOn) {
                showText(bmTextJewelry, setText, setTextVisible)
                setSoundUrlToPlay(soundfive)
                pulseCircle(q, jewelryId)
            }
        })

        // 8 doll IF LIGHT ON 
        svgRef.current.querySelector(dollId).onclick=((targ)=>{
            if(lightOn) {
                showText(bmTextDoll, setText, setTextVisible)
                setSoundUrlToPlay(soundfour)
                pulseCircle(q, dollId)
            }
        })


        // 9 background - clear out
        svgRef.current.querySelector(lightOnId).onclick=(()=>{
            hideItem(expandedReportId)
            setIsReportShowing(false)
            setTextVisible(false)
            setSoundUrlToPlay(null)
        })

        // NAVIGATION ------- 
        // 1. hall  
        svgRef.current.querySelector(bDoorHall).onclick=(()=>{
            gsap.fromTo(q(bDoorHall), { fill: ( lightOn ? "#FFED00;" : "#00ffed" )},{ fill: "transparent", duration: 0.3, repeat: 3, ease: "power.inOut" });
            setTimeout(() => { setScene("hall") }, 900);
        })

    },[q, isReportShowing, lightOn, setLightOn, setScene]);


  return (
    <>
        <div className={lightOn ? "Scene" : "Scene lightoff"} id={name}>
            <div className="wrapper svg-wrapper">
                <BedroomSvg ref={svgRef}/> 
            </div>
        </div>
        <TextBox text={text} setTextVisible={setTextVisible} visible={textVisible}/>
        <Audio soundUrl={soundUrlToPlay} />
    </>
  );
}

export default Bedroom;