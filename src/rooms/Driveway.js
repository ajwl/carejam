import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import { ReactComponent as DrivewaySvg } from "../assets/driveway.svg";
import '../App.css';

function Driveway({ text, name, onwards, setScene }) {

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





