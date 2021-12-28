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

const ktTextCash = "The cash register looks empty. This is where Mrs. Galavaten keeps her cash. She gives it to her grandkids and great grandkids whenever they visit, which is seldom these days."
const ktTextPhone = "The landline phone with the notepad next to it. It looks like Mrs. Galavaten’s handwriting. The scribbled note reads: “Michael Dayton called from HSBC. Suspicious activity on the account. Call Edgar to find out what happened."
const ktTextObit = "Maria Perez, 68, of Margate died on Wednesday, 9 June 2004 in Queen Elizabeth The Queen Mother Hospital. Born in Margate on May 26, 1936, she was the daughter of the late Alonzo Perez, Jr. and Rhoda Mae Perez. Never married, she was an avid traveler and loved her dog Skip. She is survived by her two sisters."

function Kitchen({ onwards, setScene }) {

    const [textVisible, setTextVisible] = useState(false)
    const [text, setText] = useState(""); 
    const [soundUrlToPlay, setSoundUrlToPlay] = useState(soundBuzz)

    const svgRef = useRef();
    const q = gsap.utils.selector(svgRef);

    const cashId = "#k-cash"
    const phoneId = "#k-phone"
    const obitId = "#k-obit"
    const expandedObitId = "#obituaryBig_Image"


    // wait until DOM has been rendered
    useEffect(() => {
        let isObitShowing = false;

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
                gsap.to(q(expandedObitId), { opacity: 0, duration: 0.6, ease: "power1.out" });
                isObitShowing = false;
            } else {
                gsap.to(q(expandedObitId), {opacity: 1, duration: 0.6, ease: "power1.out"})
                isObitShowing = true;
            }
        })
        



    });


  return (
    <>
        <div className="Scene">
            <div className="wrapper svg-wrapper">
                <KitchenSvg ref={svgRef}/> 
            </div>
        </div>
        <TextBox text={text} setTextVisible={setTextVisible} visible={textVisible}/>
        <div className="button-strip">
            {
                onwards.map(path => {
                    return  <button onClick={() => setScene(path)}>Go to {path}</button>
                })
            }
        </div>
        <Audio soundUrl={soundUrlToPlay} />
    </>
  );
}

export default Kitchen;





