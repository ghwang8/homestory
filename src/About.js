import { React } from "react";
import HomestoryLogo from "./media/homestorylogo.svg"

const About =  () => {
    return (
        <div className="component-container about" id="about-section">
            <div className="logo-container about">
                <div className="logo-container-bg-color">
                <img src={HomestoryLogo} className="black-logo" alt="homestory logo"/>
                </div>
            </div>
            <div className="about-desc-container">
                <div className="about-desc-heading-container">
                    <h2>About HOMESTORY</h2>
                </div>
                <div className="about-desc-content-container">
                    <p>
                    Welcome to HOMESTORY, your go-to resource for navigating the vibrant Vancouver real estate market. We understand that buying or selling a home is a significant journey, and our mission is to provide you with an abundance of valuable resources to make informed decisions. Our website is more than just listings; it's a hub of knowledge and insights. Explore our blog, where we share tips and tricks on every aspect of the real estate process. Whether you're a first-time buyer, a seasoned investor, or simply curious about the market, HOMESTORY is designed to be your trusted and informative companion on your real estate adventure.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;