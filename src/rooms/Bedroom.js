import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import '../App.css';
import { ReactComponent as BedroomSvg } from "../assets/bedroom.svg";
import TextBox from "../TextBox.js"
import Audio from "../Audio.js"
import { showText } from '../helpers.js';

import soundone from "../assets/sounds/bedroom-cellphone.mp3"
import soundtwo from "../assets/sounds/bedroom-blouses.mp3"
import soundthree from "../assets/sounds/bedroom-chopsticks.mp3"
import soundfour from "../assets/sounds/bedroom-doll.mp3"
import soundfive from "../assets/sounds/bedroom-jewelry.mp3"
import soundsix from "../assets/sounds/bedroom-lights.mp3"
import soundseven from "../assets/sounds/bedroom-police-report.mp3"
import soundeight from "../assets/sounds/bedroom-shoes.mp3"


const bmTextCellphone = "Hmm I wonder why Mrs. Galavaten didn’t take her phone. Hmm. Oh my it appears to be locked"
const bmTextShoes = "Oh no! Mrs. Galavaten’s favourite shoes. She never leaves them behind. She nevers leaves the house without them"
const bmTextClothes = "Mrs. Galavaten had a larger than life personality – and her wardrobe matches her Liberace style! But even these clothes look like they are for a special occasion…"
const bmTextSwitch = "Hmm strange. The lights are turned off. Mrs. Galavaten never turned the lights off in her bedroom."
const bmTextChopsticks = "Mrs. Galavaten was a hoarder. One of her favourite collectibles were Japanese fans and chopsticks. Travel was another thing we bonded over. Even before I moved to the UK, I loved traveling to the United States, Germany and even South Africa. Mrs. Galavaten really perked up when I showed her my photos."
const bmTextJewelry = "The jewelry box. It’s empty! The fish necklace that is usually there seems to be missing. It was Mrs. Galavaten’s favorite piece of jewelry. Oh no."
const bmTextDoll = "Oh no that creepy doll. This doll always gives me the creeps. Mrs. Galavaten got it from a friend in the Bahamas 40 years ago. I always thought it was a bit racist. Back home in Jamaica, dolls like this were only bought by white tourists. A little memento of their exotic adventure. I wish she’d let me move it…"
const bmTextReport = "Police report filed by Edgar Galavaten. Looks like a police report filed by Mrs. Galavaten’s older son. It’s hard to make out the text, but from what I can read: “On June 14, 2021, at 6:30pm, an altercation occurred between Edgar Galavaten and James Galavaten in their mother’s home… Alleged disagreement over money owed… large debts unpaid. Charges were dropped by Edgar Galavaten.”"


function Bedroom({onwards, setScene }) {

    const [textVisible, setTextVisible] = useState(false)
    // const [isReportShowing, setIsReportShowing] = useState(false)
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

    const pulseCircle = (id) => {
        gsap.to(q(id), { opacity: 0.5, duration: 0.6, repeat: 3, ease: "power.inOut" });
    }
  
    // wait until DOM has been rendered
    useEffect(() => {
        let isReportShowing = false;
        let lightsOn = false;


        // 1 cellphone 
        svgRef.current.querySelector(cellPhoneId).onclick=((targ)=>{
            showText(bmTextCellphone, setText, setTextVisible)
            setSoundUrlToPlay(soundone)
            pulseCircle(cellPhoneId)
        })

        // 2 shoes 
        svgRef.current.querySelector(shoesId).onclick=((targ)=>{
            showText(bmTextShoes, setText, setTextVisible)
            setSoundUrlToPlay(soundeight)
            pulseCircle(shoesId)
        })

        // 3 clothes
        svgRef.current.querySelector(clothesId).onclick=((targ)=>{
            showText(bmTextClothes, setText, setTextVisible)
            setSoundUrlToPlay(soundtwo)
            pulseCircle(clothesId)
        })

        // 4 chopsticks
        svgRef.current.querySelector(chopsticksId).onclick=((targ)=>{
            showText(bmTextChopsticks, setText, setTextVisible)
            setSoundUrlToPlay(soundthree)
            pulseCircle(chopsticksId)
        })

        // 5 jewelry
        svgRef.current.querySelector(jewelryId).onclick=((targ)=>{
            showText(bmTextJewelry, setText, setTextVisible)
            setSoundUrlToPlay(soundfive)
            pulseCircle(jewelryId)
        })

        // 6 doll
        svgRef.current.querySelector(dollId).onclick=((targ)=>{
            showText(bmTextDoll, setText, setTextVisible)
            setSoundUrlToPlay(soundfour)
            pulseCircle(dollId)
        })

        // 7 report
        svgRef.current.querySelector(reportId).onclick=((targ)=>{
            showText(bmTextReport, setText, setTextVisible)
            setSoundUrlToPlay(soundseven)
            pulseCircle(reportId)
            if(isReportShowing) {
                gsap.to(q(expandedReportId), { opacity: 0, duration: 0.6, ease: "power1.out" });
                isReportShowing = false;
            } else {
                gsap.to(q(expandedReportId), {opacity: 1, duration: 0.6, ease: "power1.out"})
                isReportShowing = true;
            }
        })

        // 8 switch
        svgRef.current.querySelector(switchId).onclick=((targ)=>{
            showText(bmTextSwitch, setText, setTextVisible)
            setSoundUrlToPlay(soundsix)
            pulseCircle(switchId)
            if(lightsOn) {
                gsap.to(q(lightOnId), { opacity: 0, duration: 1.2, ease: "power1.out" });
                lightsOn = false;
            } else {
                gsap.to(q(lightOnId), {opacity: .93, duration: 3, ease: "power1.out"})
                lightsOn = true;
            }
        })

     



    },[]);


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