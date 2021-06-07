import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "../assets/mobile.png",
      title: "Panijé",
      desc:
        "application web pour le management des flux de travail. outils: javaJee, Thymeleaf, Hibernate, JavaScript, HTML, CSS, Bootstrap",
      img:
        "assets/planijé.png",
    },
    {
      id: "2",
      icon: "../assets/globe.png",
      title: "revent",
      desc:
        "application web pour la gestion des évènements. outils: Springboot, Thymeleaf, Hibernate, JavaScript, HTML, CSS, Bootstrap",
      img:
        "assets/revent.png",
    },
    {
      id: "3",
      icon: "../assets/writing.png",
      title: "chi match",
      desc:
        "application mobile pour la gestion et la recommandation de joueur de football .outils: JAVA- Android- Firebase – tensorflow Life ",
      img:
        "assets/mobile.png",
    },{
      id: "4",
      icon: "../assets/writing.png",
      title: "petShop",
      desc:
        "application web de vente d'animaux. outils:symfony -webpack - twig - html- css",
      img:
        "assets/petShop.png",
    }
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}