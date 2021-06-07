import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Formation",
    
      desc1:
        "• 2019-2022 : Ensias"    ,   
      desc2:              
        "• 2016-2019: cpge mly Idriss - MP",
      desc3: 
        "• 2015-2016: Baccalauréat Scientifique - science mathématiques B mention très bien "

    },
    {
      id: 2,
      name:"Expérience pro",
   
      desc1:
        "• Développement d'un dash board pour visualiser les différentes bases de données et serveurs de CHU"    ,   
      desc2:              
        "• ExpressJS – ReactJS – react router – redux –Microsoft sql server – bootstrap – lodash - nodemon",
      desc3: 
        "• CHU HASSAN 2, Fès ",

      featured: true,
    },
    {
      id: 3,
     name: "Compétences ",
      desc1:
        "• MySql, Oracle database ,Mssql"    ,   
      desc2:              
        "•  React, HTML, CSS, SpringBoot, Bootstrap, Node.js, Express.Js ,  java JEE, Android",
      desc3: 
        "• Administration windows ,Administration unix ,Administration oracle ,Administration réseaux"

    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc1}<br/><br/>
              {d.desc2}<br/><br/>
              {d.desc3}<br/><br/>
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}