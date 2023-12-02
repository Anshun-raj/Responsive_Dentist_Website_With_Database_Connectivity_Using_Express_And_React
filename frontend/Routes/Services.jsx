import React, { useState } from "react";
import ServciceImg1 from "../Images/services-1.webp";
import ServciceImg2 from "../Images/services-2.webp";
import ServciceImg3 from "../Images/services-3.webp";
import "../Style/Services.css";
function Services() {
  return (
    <div className="service">
      <h1>Our Services</h1>
      <div className="serviceData">
        <HocCard1 cmp={Counter} />
        <HocCard2 cmp={Counter} />
        <HocCard3 cmp={Counter} />
      </div>
    </div>
  );
}

function HocCard1(props) {
  return (
    <div className="serviceCards">
      <img src={ServciceImg1} alt="" />
      <h2>Online Schedule</h2>
      <p>
        Lorem Ipsum Dolor,Sit Amet Consectetur Adipisicing Elit.Omnis In
        Excepturi.
      </p>
      <h3>
        <props.cmp />
      </h3>
    </div>
  );
}

function HocCard2(props) {
  return (
    <div className="serviceCards">
      <img src={ServciceImg2} alt="" />
      <h2>Cosmetic Feeling</h2>
      <p>
        Lorem Ipsum Dolor,Sit Amet Consectetur Adipisicing Elit.Omnis In
        Excepturi.
      </p>
      <h3>
        <props.cmp />
      </h3>
    </div>
  );
}

function HocCard3(props) {
  return (
    <div className="serviceCards">
      <img src={ServciceImg3} alt="" />
      <h2>Oral Hygiene Experts</h2>
      <p>
        Lorem Ipsum Dolor,Sit Amet Consectetur Adipisicing Elit.Omnis In
        Excepturi.
      </p>
      <h3>
        <props.cmp />
      </h3>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>
        {count >= 1 ? "Booked" : "Book Now"}:
        {
          count>0?count:'0'
        }
      </h2>
      <button onClick={() => setCount(count + 1)} className="btn2">
        +
      </button>
      <button onClick={() => setCount(count - 1)} className="btn2">
        -
      </button>
    </div>
  );
}

export default Services;
