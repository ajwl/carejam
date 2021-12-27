import { gsap } from "gsap";

// show text 
const showText = (text, setText, setTextVisible) => {
    setTextVisible(true)
    setText(text)
}

const pulseCircle = (q, id) => {
    gsap.to(q(id), { opacity: 0.25, duration: 0.6, repeat: 3, ease: "power.inOut" });
}

export {showText, pulseCircle}