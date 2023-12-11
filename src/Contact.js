import React from "react";
import PhoneIcon from "./media/icons/phone.svg";
import EmailIcon from "./media/icons/email.svg";
import InstagramIcon from "./media/icons/instagram.svg";
import YoutubeIcon from "./media/icons/youtube.svg";
import StillhavenLogo from "./media/stillhavenlogo.svg"

const Contact = () => {
  const icons = [
    {
      description: "phone",
      img: PhoneIcon,
      text: "778 887 2018"
    },
    {
      description: "email",
      img: EmailIcon,
      text: "esther@yourhomestory.ca"
    },
    {
      description: "instagram",
      img: InstagramIcon,
      text: "@yourhomestory.ca"
    },
    {
      description: "youtube",
      img: YoutubeIcon,
      text: "Youtube"
    }
  ];
  const ContactInfo = icons.map((icon, key) => (
    <div key={key} className="contact-info-section-container">
      <img
        src={icon.img}
        alt={`${icon.description} icon`}
        className="contact-icons"
      />
      <p className="contact-text">{icon.text}</p>
    </div>
  ));
  return (
    <div className="component-container contact" id="contact-section">
      <div className="contact-link-container">
        <h1>
          Ready to write your own HOMESTORY? Fill out{" "}
          <span className="hyperlink-text contact">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdTdJOulMLHmLMIcbaWX5VgVyhQ5cV764xO3ZMXlyV0X6PCwQ/viewform"
              rel="noreferrer"
              target="_blank"
            >
              this quick form.
            </a>
          </span>
        </h1>
      </div>
     <div className="contact-info-background">
      <div className="contact-details-container">{ContactInfo}</div>
      <div className="contact-address-container"><img src={StillhavenLogo} alt="stillhaven logo" /> <p>Stilhavn Real Estate Services - 36 E 5th Ave, Vancouver, BC V5T 1G8
<br/> © 2023 HOMESTORY</p></div>
     </div> 
    </div>
  );
};

export default Contact;
