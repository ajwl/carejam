import React from 'react';
import { gsap } from "gsap";
import './App.css';

function TextBox({ text, visible, setTextVisible }) {



  return (
        <div className={visible ? "text-box show" : "text-box fade"} onClick={() => setTextVisible(false)}>
            <div className="text-holder">
                <p>{text}</p>
            </div>
        </div>
  );
}

export default TextBox;

