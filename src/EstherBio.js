import React from "react";
import EstherIMG from "./media/esther.png";


const EstherBio = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="component-container auto-height" id="esther-section">
      <div className="card-image-container esther">
        <img src={EstherIMG} alt="Esther Hwang" />
      </div>
      <div className="card-text-container esther">
        <div className="card-text-container-group about">
          <div className="card-text-title esther">
            <h2>Meet your agent, Esther Hwang</h2>
          </div>
          <div className="card-text-content-container esther">
            <p className="card-text-content about">
              As a dedicated realtor and Vancouver native, Esther brings a
              wealth of local knowledge and a passion for helping clients find
              their dream homes. With a proven track record of successful
              transactions and a commitment to exceptional service, she is here
              to guide you through every step of your real estate journey. 
            </p>
            <p>
              Inspired by her father who was a realtor in Vancouver for over 17
              years, Esther acquired her real estate license and embarked on her
              own journey as a realtor. 
            </p> 
            <p>
              She has worked with top Vancouver real
              estate teams, excelling in both sales and marketing. With an
              extensive background in marketing and an eye for aesthetics,
              Esther wants to help her clients find their next dream home. 
            </p>
            <p> 
              During her spare time, you can find Esther performing as
              concertmaster with the Vancouver Metropolitan Orchestra and
              teaching students of all ages at the Vancouver Academy of Music.
            </p>

            <div className="button-container"> <span className="button2 esther">
                <a
                  onClick={() => scrollToSection("contact-section")}
                  rel="noreferrer"
                  target="_blank"
                >
                  Connect with Esther
                </a>
              </span>{" "}</div>
             
             
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default EstherBio;
