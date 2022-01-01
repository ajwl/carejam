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

const driveTextCar = "Ah the Lexus. Mrs. Galavaten’s prized car. She used to cruise around the Margate in the late 90’s just before the seaside town started to decline. Decades of austerity and Thatcherism meant that everything went into disrepair, including the Dreamland amusement park."
const driveTextCarDoor = "Oh the Lexus. Oh the door appears to be locked."
const driveTextPostcard = `
            Oh let me see. Oh there are some postcards. Tons of them addressed to Mrs. Galavaten. The name of the sender appears illegible. It reads: 

            “21 June, 1954

            My beloved,

            The sun has barely cracked above the treetops. The lavender-orange is cascading off the graying buildings. This morning, as every morning, I thought of you. Our long walks on the Margate waterfront. The sharp and salty smell of the sea. Catching glimpses of your blue-green eyes – the colour of the waves. Your long flowing skirt tracing the outline of your legs. Our hands barely touching. 

            I miss you. I hope you have the pearl fish necklace I gave you. It was my grandmother’s. I’m in town until Thursday visiting family. I can’t help but wonder if we made the right decision. 

            Please meet me. Margate Waterfront at 4pm.

            Still yours,
            M

        I want to cry…`

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

        // 4 background - clear out
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
        <div className="button-strip">
            {
                onwards.map((path, i) => {
                    return  <button key={i} onClick={() => setScene(path)}>Go to {path}</button>
                })
            }
        </div>
        <Audio soundUrl={soundUrlToPlay} />
    </>
  );
}

export default Driveway;





