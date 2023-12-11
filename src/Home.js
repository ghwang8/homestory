import React from "react";
import HomestoryLogo from "./media/homestorylogo.svg";
import HomeBackground from "./media/homestorybackground.png";

const Home = () => {
  const backgroundStyle = {
    backgroundColor: "#000000",
    backgroundImage: `url(${HomeBackground})`,
    backgroundSize: "cover",
    // backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%", // Make the container fill the whole viewport height
    overflow: "hidden",
    position: "relative"
  };
  return (
    <div
      style={backgroundStyle}
      className="component-container home"
      id="home-section"
    >
      <div className="logo-container home">
        <img src={HomestoryLogo} alt="arietta logo" />
      </div>
      <div className="slogan-container">
        <h1 className="desc-slogan white-text">
          Your go-to resource for navigating the vibrant Vancouver real estate
          market.
        </h1>
        <h2 className="main-slogan white-text">Where your HOMESTORY begins.</h2>
      </div>
    </div>
  );
};

export default Home;
