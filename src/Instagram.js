import { React } from "react";
import IGphoto1 from "./media/ig_1.png";
import IGphoto2 from "./media/ig_2.png";
import IGphoto3 from "./media/ig_3.png";
import IGphoto4 from "./media/ig_4.png";
import IGphoto5 from "./media/ig_5.png";
import IGphoto6 from "./media/ig_6.png";

const Instagram = () => {
    const igphotoURLs = [IGphoto1, IGphoto2, IGphoto3, IGphoto4, IGphoto5, IGphoto6]
    return (
        <div className="component-container auto-height">
            <div className="component-heading-container instagram">
                <h2>
                    <span className="light-text">#</span>yourhomestory.ca
                </h2>
            </div>
            <div className="ig-photo-container">
                
                {igphotoURLs.map((img, index) => (
                    <div
                        key={index}
                        className="ig-photo">
                        <img src={img} alt={`Vancouver real estate photo ${index}`}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Instagram;