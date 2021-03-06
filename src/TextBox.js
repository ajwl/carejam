import React from 'react';
import './App.css';

function TextBox({ text, visible, setTextVisible }) {



  return (
        <div className={visible ? "text-box show" : "text-box fade"} onClick={() => setTextVisible(false)}>
            <div className="text-holder">
                <p dangerouslySetInnerHTML={{__html: text}}></p>

            </div>
        </div>
  );
}

export default TextBox;

