import React, { useEffect, useState } from "react";
import AboutImg from "../Images/about.webp";
import "../Style/About.css";
function About() {
  const [details, setDetails] = useState(false);
  return (
    useEffect(() => {
      console.log("State changed");
    }, [details]),
    
    
    (
      <div className="about">
        <h1>About Us</h1>
        <div className="aboutData">
          <img src={AboutImg} alt="" />
          <div className="aboutDataRight">
            <h2>Our Clinic Is Made For You To Be Smiling All The Time</h2>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Voluptate
              Inventore Explicabo Recusandae Cumque Dolor Voluptas Nihil.
            </p>
            <p>
              {details
                ? "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Voluptate Inventore Explicabo Recusandae Cumque Dolor Voluptas Nihil."
                : ""}
            </p>
            <p>
              {details
                ? "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Voluptate Inventore Explicabo Recusandae Cumque Dolor Voluptas Nihil."
                : ""}
            </p>
            <button className="btn1" onClick={() => setDetails(!details)}>
              {details ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    )
  );
}
export default About;
