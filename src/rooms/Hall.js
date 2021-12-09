import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import '../App.css';
import { ReactComponent as HallSvg } from "../assets/hall.svg";
import TextBox from "../TextBox.js"

import Sound from "react-sound"
import soundthree from "../assets/sounds/hall-ringing.mp3"
import soundtwo from "../assets/sounds/hall-mailbox-full.mp3"
import soundone from "../assets/sounds/hall-mailbox-not-setup.mp3"
import soundintro from "../assets/sounds/hall-intro-where.mp3"

const introText = "Gooooooood afternoon, Mrs. Galavaten! Hope you’re ready for a long walk… Hello? Mrs. Galavaten? Where are you…?"
const textCallOne = "Call Ms Galavaten.... okay she has probably not even switched that thing on"
const textCallTwo = "Call Ms Galavaten's son...  that useless guy never picks up"
const textCallThree = "Call the agency... great no-one's picking up"


function Hall({ onwards, setScene }) {

    const [textVisible, setTextVisible] = useState(true)
    const [text, setText] = useState(introText); 
    const [playSoundOne, setPlaySoundOne] = useState(Sound.status.STOPPED)
    const [playSoundTwo, setPlaySoundTwo] = useState(Sound.status.STOPPED)
    const [playSoundThree, setPlaySoundThree] = useState(Sound.status.STOPPED)
    const [playSoundIntro, setPlaySoundIntro] = useState(Sound.status.PLAYING)
    // const [entered, setEntered] = useState(true)

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

        // 1 call mrs Galavaten ----------
        svgRef.current.querySelector(call1Id).onclick=((targ)=>{
                setTextVisible(true)
                setText(textCallOne)
                setPlaySoundOne(Sound.status.PLAYING)
                setPlaySoundTwo(Sound.status.STOPPED)
                setPlaySoundThree(Sound.status.STOPPED)
                gsap.to(targ, { opacity: 0.75, duration: 0.6, repeat: 3, ease: "power.inOut" });
            })

        // 2 call mrs Galavaten's son ----------
        svgRef.current.querySelector(call2Id).onclick=((targ)=>{
            setTextVisible(true)
            setText(textCallTwo)
            setPlaySoundTwo(Sound.status.PLAYING)
            setPlaySoundOne(Sound.status.STOPPED)
            setPlaySoundThree(Sound.status.STOPPED)
            gsap.to(q(targ), { opacity: 0.75, duration: 0.6, repeat: 3, ease: "power.inOut" });
        })

        // 3 call the care agency ----------
        svgRef.current.querySelector(call3Id).onclick=((targ)=>{
            setTextVisible(true)
            setText(textCallThree)
            setPlaySoundThree(Sound.status.PLAYING)
            setPlaySoundOne(Sound.status.STOPPED)
            setPlaySoundTwo(Sound.status.STOPPED)
            gsap.to(q(targ), { opacity: 0.75, duration: 0.6, repeat: 3, ease: "power.inOut" });
        })
    

        // end call ----------
        svgRef.current.querySelector(endCallId).onclick=(()=>{
            setTextVisible(false)
            gsap.to(q(handAllId), { y: 900, delay: 0.6, duration: 3, ease: "power.inOut" });
            setPlaySoundOne(Sound.status.STOPPED)
            setPlaySoundTwo(Sound.status.STOPPED)
            setPlaySoundThree(Sound.status.STOPPED)
            setPlaySoundIntro(Sound.status.STOPPED)
        })

        // bring hand up 
        // svgRef.current.querySelector(handAllId).onclick=(()=>{
        //     gsap.to(q(handAllId), { y: -900, delay: 0.6, duration: 3, ease: "power.inOut" });
        // })
    },[]);


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
        <div className="audio-files">
            <Sound
                url={soundintro}
                playStatus={playSoundIntro}
                onFinishedPlaying={ () => setPlaySoundIntro(Sound.status.STOPPED)}
            />
            <Sound
            url={soundone} 
            playStatus={playSoundOne}
            onFinishedPlaying={ () => setPlaySoundOne(Sound.status.STOPPED)}
            />
            <Sound
            url={soundtwo}
            playStatus={playSoundTwo}
            onFinishedPlaying={ () => setPlaySoundTwo(Sound.status.STOPPED)}
            />
            <Sound
            url={soundthree}
            playStatus={playSoundThree}
            onFinishedPlaying={ () => setPlaySoundThree(Sound.status.STOPPED)}
            />
        </div>
    </>
  );
}

export default Hall;