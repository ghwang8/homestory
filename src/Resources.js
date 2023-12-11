import React from "react";
import HomeIMG1 from "./media/resources-buying.png";
import HomeIMG2 from "./media/resources-selling.png";
import HomeIMG3 from "./media/resources-blog.png";


const Resources = () => {
  const resourcesArr = [
    {
      id: "a",
      img: HomeIMG1,
      title: "Buying",
      description:
        "Get access to the Buyer’s Guide and Home Finder Form.",
      url: "https://forms.gle/n8aPfUnzoMfKEH366"
    },
    {
      id: "b",
      img: HomeIMG2,
      title: "Selling",
      description:
        "Get access to the Seller’s Guide and Home Evaluation Form.",
      url: "https://forms.gle/n8aPfUnzoMfKEH366"
    },
    {
      id: "c",
      img: HomeIMG3,
      title: "Blog",
      description: "Read up on Esther’s blogs to find the latest tips and tricks on the Vancouver Real Estate market.",
      url: "https://forms.gle/n8aPfUnzoMfKEH366"
    }
  ];
  const resources = resourcesArr.map((resource, key) => {
    return (
      <div key={key} className={`event-option ${resource.id}`}>
        <div className="event-option-img-container">
          <img
            className={`event-option-img ${resource.id}`}
            src={resource.img}
            alt="event"
          />
        </div>
        <div className="event-option-text">
          <div className="inquiry-button-container">
          <a
            href={resource.url}
            rel="noreferrer"
            target="_blank"
            className="button1"
          >
            {resource.title}
          </a>
          </div>
          <p className="event-option-description">{resource.description}</p>
          
         
        </div>
      </div>
    );
  });
  return (
    <div className="component-container" id="event-section">
      <h2 className="card-text-title event">Resources</h2>
      <div className="event-options-container">{resources}</div>
    </div>
  );
};

export default Resources;
