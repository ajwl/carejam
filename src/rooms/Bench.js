import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import '../App.css';
import { ReactComponent as BenchSvg } from "../assets/bench.svg";
import TextBox from "../TextBox.js"


function Bench({ text, name, onwards, setScene }) {

    const [textVisible, setTextVisible] = useState(true)

    // store a reference to the box div
    const svgRef = useRef();
    const q = gsap.utils.selector(svgRef);

    // closeUP

    // wait until DOM has been rendered
    useEffect(() => {
      gsap.fromTo(q("#closeUP"), {opacity: 0}, { opacity: 1, duration: 6, ease: "power.inOut" });
      // noooo bad 

    });


  return (
    <>
        <div className="Scene">
            <div className="wrapper svg-wrapper">
                <BenchSvg ref={svgRef}/> 
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

export default Bench;