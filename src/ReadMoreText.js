import { React, useState } from "react";

function ReadMoreText({ text, maxLength }) {
  const [isTruncated, setIsTruncated] = useState(true);

  const openPost = () => {
    console.log("open blog post!")
  };

  return (
    <div>
      {isTruncated ? <p>{text.slice(0, maxLength)}...</p> : <p>{text}</p>}
      {text.length > maxLength && (
        <button className="read-more-btn" onClick={openPost}>
          {isTruncated ? "Read More" : "Read Less"}
        </button>
      )}
    </div>
  );
}

export default ReadMoreText;
