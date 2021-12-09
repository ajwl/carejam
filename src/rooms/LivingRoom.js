import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import '../App.css';
import { ReactComponent as LivingSvg } from "../assets/livingroom.svg";
import TextBox from "../TextBox.js"

function Living({ text, name, onwards, setScene }) {

    const [textVisible, setTextVisible] = useState(true)

    const svgRef = useRef();
    const q = gsap.utils.selector(svgRef);

    useEffect(() => {
    //   gsap.fromTo(q("#doorPath_"), {opacity: 0.1}, { opacity: 0.75, duration: 1.2, repeat: 3, ease: "power.inOut" });
      // noooo bad 
    //   svgRef.current.querySelector("#doorPath_").onclick=()=>setScene("hall")

    });


  return (
    <>
        <div className="Scene">
            <div className="wrapper svg-wrapper">
                <LivingSvg ref={svgRef}/> 
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

export default Living;