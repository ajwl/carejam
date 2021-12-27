import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import { ReactComponent as DrivewaySvg } from "../assets/driveway.svg";
import '../App.css';
import TextBox from "../TextBox.js"

import soundCar from "../assets/sounds/drive-car-far.mp3"
import soundCarClose from "../assets/sounds/drive-car-close.mp3"
import soundPostcard from "../assets/sounds/drive-postcards.mp3"
import soundAfternoon from "../assets/sounds/drive-afternoon.mp3"

const driveTextCar = "Ah the Lexus. Mrs. Galavaten’s prized car. She used to cruise around the Margate in the late 90’s just before the seaside town started to decline. Decades of austerity and That cherism meant that everything went into disrepair, including the Dreamland amusement park."
const driveTextCarClose = "Oh the Lexus. Oh the door appears to be locked."
const driveTextPostcard = `
            Oh let me see. Oh there are some postcards. Tons of them addressed to Mrs. Galavaten. The name of the sender appears illegible. It reads: 

            “21 June, 1954

            My beloved,

            The sun has barely cracked above the treetops. The lavender-orange is cascading off the graying buildings. This morning, as every morning, I thought of you. Our long walks on the Margate waterfront. The sharp and salty smell of the sea. Catching glimpses of your blue-green eyes – the colour of the waves. Your long flowing skirt tracing the outline of your legs. Our hands barely touching. 

            I miss you. I hope you have the pearl fish necklace I gave you. It was my grandmother’s. I’m in town until Thursday visiting family. I can’t help but wonder if we made the right decision. 

            Please meet me. Margate Waterfront at 4pm.

            Still yours,
            M

        I want to cry…
`

function Driveway({ text, name, onwards, setScene }) {

    const [textVisible, setTextVisible] = useState(true)

    const svgRef = useRef();
    const q = gsap.utils.selector(svgRef);


    // wait until DOM has been rendered
    useEffect(() => {
    //   gsap.fromTo(q("#doorPath_"), {opacity: 0.1}, { opacity: 0.75, duration: 1.2, repeat: 3, ease: "power.inOut" });

      // noooo bad 
    //   svgRef.current.querySelector("#doorPath_").onclick=()=>setScene("hall")

    });

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
                onwards.map(path => {
                    return  <button onClick={() => setScene(path)}>Go to {path}</button>
                })
            }
        </div>

    </>
  );
}

export default Driveway;





