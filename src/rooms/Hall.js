import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import '../App.css';
import { ReactComponent as HallSvg } from "../assets/hall.svg";
import TextBox from "../TextBox.js"
import Audio from "../Audio.js"
import { showText } from '../helpers';

import soundthree from "../assets/sounds/hall-ringing.mp3"
import soundtwo from "../assets/sounds/hall-mailbox-full.mp3"
import soundone from "../assets/sounds/hall-mailbox-not-setup.mp3"
import soundintro from "../assets/sounds/hall-intro-where.mp3"


gsap.registerPlugin(ScrollTrigger);

const introText = "Gooooooood afternoon, Mrs. Galavaten! Hope you’re ready for a long walk… Hello? Mrs. Galavaten? Where are you…?"
const textCallOne = "Call Ms Galavaten.... okay she has probably not even switched that thing on"
const textCallTwo = "Call Ms Galavaten's son...  that useless guy never picks up"
const textCallThree = "Call the agency... great no-one's picking up"


function Hall({ onwards, setScene }) {

    const [textVisible, setTextVisible] = useState(true)
    const [text, setText] = useState(introText); 
    const [soundUrlToPlay, setSoundUrlToPlay] = useState(soundintro)

    const svgRef = useRef();
    const q = gsap.utils.selector(svgRef);

    const handAllId = "#PhoneHand"
    const call1Id = "#Call1_Image"
    const call2Id = "#Call2_Image"
    const call3Id = "#cALL3_Image"
    const endCallId = "#ENDcALL_Image"


    // wait until DOM has been rendered
    useEffect(() => {
    //   gsap.fromTo(q(handAllId), {y: 700}, { y: 0, delay: 0.6, duration: 3, ease: "power.inOut" });

        // gsap.set(q(handAllId), { y: 900});

        // let mainTl = gsap.timeline( {scrollTrigger: {
        //     trigger: q(handAllId),
        //     // scroller: ,
        //     horizontal: true,
        //     start: 'left 80%',
        //     end: `right 50%`,
        //     scrub: true,
        //     scroll: "horizontal",
        //     toggleActions: "play pause reverse pause",
        //     toggleClass: "active", 
        //     markers: true,
        // }})

        // mainTl.to(q(handAllId), { y: -300, delay: 0.6, duration: 3, ease: "power.inOut" });


        // ScrollTrigger.create({
        //     trigger: q(handAllId),
        //     start: 'left left',
        //     end: `right 50%`,
        //     scrub: true,
        //     scroll: "horizontal",
        //     toggleActions: "play pause reverse pause",
        //     toggleClass: "active", 
        //     onToggle: self => console.log("toggled, isActive:", self.isActive),
        //     onUpdate: self => {
        //       console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
        //     }
        //   });

        // 1 call mrs Galavaten ----------
        svgRef.current.querySelector(call1Id).onclick=(()=>{
            showText(textCallOne, setText, setTextVisible)
            setSoundUrlToPlay(soundone)
            gsap.to(q(call1Id), { opacity: 0.5, duration: 0.6, repeat: 4, ease: "power.inOut" });
        })

        // 2 call mrs Galavaten's son ----------
        svgRef.current.querySelector(call2Id).onclick=(()=>{
            showText(textCallTwo, setText, setTextVisible)
            setSoundUrlToPlay(soundtwo)
            gsap.to(q(call2Id), { opacity: 0.5, duration: 0.6, repeat: 4, ease: "power.inOut" });
        })

        // 3 call the care agency ----------
        svgRef.current.querySelector(call3Id).onclick=(()=>{
            showText(textCallThree, setText, setTextVisible)
            setSoundUrlToPlay(soundthree)
            gsap.to(q(call3Id), { opacity: 0.5, duration: 0.6, repeat: 4, ease: "power.inOut" });
        })
    

        // end call ----------
        svgRef.current.querySelector(endCallId).onclick=(()=>{
            setTextVisible(false)
            setSoundUrlToPlay(null)
            gsap.to(q(handAllId), { y: 900, delay: 0.6, duration: 3, ease: "power.inOut" });
        })

        // bring hand up 
        // svgRef.current.querySelector(handAllId).onclick=(()=>{
        //     gsap.to(q(handAllId), { y: -300, delay: 0.6, duration: 3, ease: "power.inOut" });
        // })
    },[q]);


  return (
    <>
        <div className="Scene">
            <div className="wrapper svg-wrapper">
                <HallSvg ref={svgRef}/> 
            </div>
        </div>
        <TextBox text={text} setTextVisible={setTextVisible} visible={textVisible}/>
        <div className="button-strip">
            {
                onwards.map((path,i) => {
                    return  <button key={i} onClick={() => setScene(path)}>Go to {path}</button>
                })
            }
        </div>
        <Audio soundUrl={soundUrlToPlay} />
    </>
  );
}

export default Hall;