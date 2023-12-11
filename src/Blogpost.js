import { React } from "react";
import { blogPosts } from "./blogpost-db";

const Blogpost = () => {
    return (
        <div className="component-container">
            <div className="blogpost-preview-img-container"> 
                <img src={blogPosts[0].blogIMG} alt="description here"/> 
            </div>
            <div className="blogpost-preview-text-container">
                <p className="small-text">{blogPosts[0].date}</p>
                <p>{blogPosts[0].title}</p>
                <p>{blogPosts[0].content}</p>
            </div>
        </div>
    )
}