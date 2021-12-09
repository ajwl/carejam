import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import '../App.css';
import { ReactComponent as HallSvg } from "../assets/hall.svg";


const callup = () => {
    console.log("callup rang")
}


function Hall({ text, name, onwards, setScene }) {

    // store a reference to the box div
    const svgRef = useRef();
    const q = gsap.utils.selector(svgRef);

    const handAllId = "#PhoneHand"
    const call1Id = "#Call1_Image"
    const call2Id = "#Call2_Image"
    const call3Id = "#cALL3_Image-2"
    const endCallId = "#ENDcALL_Image"


    // wait until DOM has been rendered
    useEffect(() => {
      gsap.fromTo(q(handAllId), {y: 700}, { y: 0, delay: 0.6, duration: 3, ease: "power.inOut" });
      // noooo bad 
    //   svgRef.current.querySelector(call3Id).onclick=(tar)=>{
    //       console.log("targ", tar)
    //       callup("agency")
    //       gsap.fromTo(q(call3Id), {opacity: 0.1}, { opacity: 0.75, duration: 1.2, repeat: 3, ease: "power.inOut" });
    //     }
    });


  return (
    <>
        <div className="Scene">
            <div className="wrapper svg-wrapper">
                <HallSvg ref={svgRef}/> 
            </div>
        </div>
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

export default Hall;