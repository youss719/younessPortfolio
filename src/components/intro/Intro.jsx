
import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  const textRef1 = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["2ème année à l'ENSIAS"],
    });
  }, []);
  useEffect(() => {
    init(textRef1.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["en ingénierie du Web et Informatique Mobile (IWIM)"],
    });
  }, []);
  

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/youness.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Bonjour, je suis</h2>
          <h1>LHASSANI Youness</h1>
          <h3>
            élève ingénieur en <span ref={textRef}></span>
            
          </h3>
          <h3>
            
            <span ref={textRef1}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}