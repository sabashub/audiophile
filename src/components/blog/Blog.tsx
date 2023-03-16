import React from "react";
import "./Blog.css";
import Blog_image from "../../assets/blog_image.png";
const Blog = () => {
  return (
    <div className="blog_container">
      <div className="blog_content">
        <h1 className="blog_title">
          Bringing you the <span>best</span> audio gear
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <img src={Blog_image} className="blog_image" />
    </div>
  );
};

export default Blog;
