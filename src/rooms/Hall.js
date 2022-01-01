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


function Hall({ onwards, setScene, firstTimeInHall, setFirstTimeInHall }) {

    const [textVisible, setTextVisible] = useState(false)
    const [text, setText] = useState(""); 
    const [soundUrlToPlay, setSoundUrlToPlay] = useState(null)

    const svgRef = useRef();
    const q = gsap.utils.selector(svgRef);

    const handAllId = "#PhoneHand"
    const call1Id = "#Call1_Image"
    const call2Id = "#Call2_Image"
    const call3Id = "#cALL3_Image"
    const endCallId = "#ENDcALL_Image"

    const svgBg = "#Layer_2_Image"

    // nav arrows

    const arwLivRoom = "#ToLivingroomPath"
    const arwBedroom = "#ToBedroomPath"
    const arwDriveway = "#ToDrivePath"


    // wait until DOM has been rendered
    useEffect(() => {

        if(firstTimeInHall) {
            showText(introText, setText, setTextVisible)
            setSoundUrlToPlay(soundintro)
            gsap.set(q(handAllId), { y: 1500});
            gsap.to(q(handAllId), { y: 0, delay: 0.6, duration: 3, ease: "power.inOut" });
       
        }
        setFirstTimeInHall(false)



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

        // click anywhere on bg 
        // bring hand up
        // svgRef.current.querySelector(svgBg).onclick=(()=>{
        // })

        // 1 call mrs Galavaten ----------
        svgRef.current.querySelector(call1Id).onclick=(()=>{
            // showText(textCallOne, setText, setTextVisible)
            setTextVisible(false)
            setSoundUrlToPlay(soundone)
            gsap.to(q(call1Id), { opacity: 0.5, duration: 0.6, repeat: 4, ease: "power.inOut" });
        })

        // 2 call mrs Galavaten's son ----------
        svgRef.current.querySelector(call2Id).onclick=(()=>{
            // showText(textCallTwo, setText, setTextVisible)
            setTextVisible(false)
            setSoundUrlToPlay(soundtwo)
            gsap.to(q(call2Id), { opacity: 0.5, duration: 0.6, repeat: 4, ease: "power.inOut" });
        })

        // 3 call the care agency ----------
        svgRef.current.querySelector(call3Id).onclick=(()=>{
            // showText(textCallThree, setText, setTextVisible)
            setTextVisible(false)
            setSoundUrlToPlay(soundthree)
            gsap.to(q(call3Id), { opacity: 0.5, duration: 0.6, repeat: 4, ease: "power.inOut" });
        })
    

        // end call ----------
        svgRef.current.querySelector(endCallId).onclick=(()=>{
            setTextVisible(false)
            setSoundUrlToPlay(null)
            gsap.to(q(handAllId), { y: 900, delay: 0.6, duration: 3, ease: "power.inOut" });
        })

        // 4 background - clear out
        svgRef.current.querySelector(svgBg).onclick=((targ)=>{
            setTextVisible(false)
            setSoundUrlToPlay(null)
        })



        // NAVIGATION --------
        // 1. bedroom 
        svgRef.current.querySelector(arwBedroom).onclick=(()=>{
            gsap.fromTo(q(arwBedroom), { fill: "#FFED00;"},{ fill: "transparent", duration: 0.3, repeat: 3, ease: "power.inOut" });
            setTimeout(() => { setScene("bedroom") }, 900);
        })

        // 2. living room 
        svgRef.current.querySelector(arwLivRoom).onclick=(()=>{
            gsap.fromTo(q(arwLivRoom), { fill: "#FFED00;"},{ fill: "transparent", duration: 0.3, repeat: 3, ease: "power.inOut" });
            setTimeout(() => { setScene("living") }, 900);
        })

        // 3.  driveway
        svgRef.current.querySelector(arwDriveway).onclick=(()=>{
            gsap.fromTo(q(arwDriveway), { fill: "#FFED00;"},{ fill: "transparent", duration: 0.3, repeat: 3, ease: "power.inOut" });
            setTimeout(() => { setScene("driveway") }, 900);
        })




    },[q]);


  return (
    <>
        <div className="Scene">
            <div className="wrapper svg-wrapper">
                <HallSvg ref={svgRef}/> 
            </div>
        </div>
        <TextBox text={text} setTextVisible={setTextVisible} visible={textVisible}/>
        <Audio soundUrl={soundUrlToPlay} />
    </>
  );
}

export default Hall;