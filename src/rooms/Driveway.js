import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import { ReactComponent as DrivewaySvg } from "../assets/driveway.svg";
import '../App.css';
import TextBox from "../TextBox.js"
import Audio from "../Audio.js"
import { showText, pulseCircle } from '../helpers.js';

import soundCar from "../assets/sounds/drive-car-far.mp3"
import soundCarDoor from "../assets/sounds/drive-car-close.mp3"
import soundPostcard from "../assets/sounds/drive-postcards.mp3"
import soundAfternoon from "../assets/sounds/drive-afternoon.mp3"

import {driveTextCar, driveTextCarDoor, driveTextPostcard} from "../allText.js"


function Driveway({ onwards, setScene }) {

    const [textVisible, setTextVisible] = useState(false)
    const [text, setText] = useState(""); 
    const [soundUrlToPlay, setSoundUrlToPlay] = useState(soundAfternoon)

    const svgRef = useRef();
    const q = gsap.utils.selector(svgRef);

    const carId = "#d-car"
    const carDoorId = "#d-cardoor"
    const carExpandedId = "#closeUPcar-2"
    const postcardId = "#d-postcard"
    const expandedPostcardFrontId = "#frontpostcard"
    const expandedPostcardBackId = "#backpostcard"

    const backgroundDrivewayId = "#Colours_Image"
    const dDoorHall = "#d-door-hall"



    // wait until DOM has been rendered
    useEffect(() => {
        let isCarShowing = false;
        let isPostcardShowing = false;

        // 1 car
        svgRef.current.querySelector(carId).onclick=((targ)=>{
            showText(driveTextCar, setText, setTextVisible)
            setSoundUrlToPlay(soundCar)
            pulseCircle(q, carId)
        })

        // 2 car door 
        svgRef.current.querySelector(carDoorId).onclick=((targ)=>{
            showText(driveTextCarDoor, setText, setTextVisible)
            setSoundUrlToPlay(soundCarDoor)
            pulseCircle(q, carDoorId)
            if(isCarShowing) {
                gsap.to(q(carExpandedId), { opacity: 0, duration: 0.6, ease: "power1.out" });
                isCarShowing = false;
            } else {
                gsap.to(q(carExpandedId), {opacity: 1, duration: 0.6, ease: "power1.out"})
                isCarShowing = true;
            }
        })

        // 3 postcard
        svgRef.current.querySelector(postcardId).onclick=((targ)=>{
            showText(driveTextPostcard, setText, setTextVisible)
            setSoundUrlToPlay(soundPostcard)
            pulseCircle(q, postcardId)
            if(isPostcardShowing) {
                gsap.to(q(expandedPostcardFrontId), { opacity: 0, duration: 0.6, ease: "power1.out" });
                gsap.to(q(expandedPostcardBackId), { opacity: 0, duration: 0.6, ease: "power1.out" });
                isPostcardShowing = false;
            } else {
                gsap.to(q(expandedPostcardFrontId), {opacity: 1, duration: 0.6, ease: "power1.out"})
                gsap.to(q(expandedPostcardBackId), { opacity: 1, duration: 1.2, ease: "power1.out" });
                isPostcardShowing = true;
            }
        })

        // 4 Navigation to hall 
        svgRef.current.querySelector(dDoorHall).onclick=((targ)=>{
            gsap.fromTo(q(dDoorHall), { fill:  "#FFED00;" },{ fill: "transparent", duration: 0.3, repeat: 3, ease: "power.inOut" });
            setTimeout(() => { setScene("hall") }, 900);
        })

        // 5 Navigation to beach 
        svgRef.current.querySelector(expandedPostcardBackId).onclick=((targ)=>{
            gsap.fromTo(q(), { fill:  "#FFED00;" },{ fill: "transparent", duration: 0.3, repeat: 3, ease: "power.inOut" });
            setTimeout(() => { setScene("bench") }, 900);
        })


        // 6 background - clear out
        svgRef.current.querySelector(backgroundDrivewayId).onclick=((targ)=>{
            setTextVisible(false)
            setSoundUrlToPlay(null)

            gsap.to(q(expandedPostcardFrontId), { opacity: 0 });
            gsap.to(q(expandedPostcardBackId), { opacity: 0 });
            gsap.to(q(carExpandedId), { opacity: 0 });
            isCarShowing = false;
            isPostcardShowing = false;
        })

    },[q]);

  return (
    <>
        <div className="Scene">
            <div className="wrapper svg-wrapper">
                <DrivewaySvg ref={svgRef}/> 
            </div>
        </div>
        <TextBox text={text} setTextVisible={setTextVisible} visible={textVisible}/>
        <Audio soundUrl={soundUrlToPlay} />
    </>
  );
}

export default Driveway;





