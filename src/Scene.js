import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import './App.css';

function Scene({text, png, onwards, setScene }) {



  return (
    <>
        <div className="Scene">
        <div className="wrapper">
            <div className="top-text">
                <p>
                    {text}
                </p>
            </div>
            <img src={png} className="sign" alt="margate sign"/>
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

export default Scene;
