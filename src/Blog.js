import { React } from "react";
import { blogPosts } from "./blogpost-db";
import ReadMoreText from "./ReadMoreText";

const Blog = () => {
   
    return (
        <div className="component-container beige-bg auto-height" id="blog-section">
            <div className="component-heading-container">
             <h2>Blog</h2>
            </div>
            <div className="blogpost-preview-container">
                {blogPosts.map((post, index) => (
                    <div className="blogpost-preview" key={index}>
                        <div className="blogpost-preview-img-container"> 
                            <img src={post.blogIMG} alt={`blogpost preview ${index}`}/> 
                        </div>
                        <div className="blogpost-preview-text-container">
                            <p className="small-text">{post.date}</p>
                            <p>{post.title}</p>
                           <ReadMoreText text={post.content} maxLength={100} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog;