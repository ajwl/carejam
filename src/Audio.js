import React from 'react';
import './App.css';
import Sound from "react-sound"

const Audio = ({soundUrl}) => {

    return (
        <div className="audio-files">
            {soundUrl && <Sound
                url={soundUrl}
                playStatus={Sound.status.PLAYING}
                onFinishedPlaying={() => Sound.status.STOPPED}
                onLoading={() => {}}
                onError={() => console.log("sound load failed")} 
            />}
       </div>
       )
}

export default Audio;