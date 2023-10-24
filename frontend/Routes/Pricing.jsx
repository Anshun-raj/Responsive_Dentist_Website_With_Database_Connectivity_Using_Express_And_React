import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import "../Style/Pricing.css";
function Pricing() {
  
  return (
    <div className="pricing">
      <h1>Pricing Page</h1>
      <div className="pricingData">
        <div className="pricingDataCard">
          <h3>BASIC</h3>
          <h2>
            $<span>18</span>/Year
          </h2>
          <div className="facilities">
            <h5>
              <AiOutlineCheck />
              ALIGNMENT SPECIALIST
            </h5>
            <h5>
              <AiOutlineCheck />
              CAVITY INSPECTION
            </h5>
            <h5>
              <AiOutlineCheck />
              COSMETIC DENTISTRY
            </h5>
            <h5>
              <AiOutlineCheck />
              ORAL HYGIENE EXPERTS
            </h5>
          </div>
          <button className="btn4">Read More</button>
        </div>
        <div className="pricingDataCard">
          <h3>STANDARD</h3>
          <h2>
            $<span>30</span>/Year
          </h2>
          <div className="facilities">
            <h5>
              <AiOutlineCheck />
              ALIGNMENT SPECIALIST
            </h5>
            <h5>
              <AiOutlineCheck />
              CAVITY INSPECTION
            </h5>
            <h5>
              <AiOutlineCheck />
              COSMETIC DENTISTRY
            </h5>
            <h5>
              <AiOutlineCheck />
              ORAL HYGIENE EXPERTS
            </h5>
          </div>
          <button className="btn4">Read More</button>
        </div>
        <div className="pricingDataCard">
          <h3>PREMIUM</h3>
          <h2>
            $<span>50</span>/Year
          </h2>
          <div className="facilities">
            <h5>
              <AiOutlineCheck />
              ALIGNMENT SPECIALIST
            </h5>
            <h5>
              <AiOutlineCheck />
              CAVITY INSPECTION
            </h5>
            <h5>
              <AiOutlineCheck />
              COSMETIC DENTISTRY
            </h5>
            <h5>
              <AiOutlineCheck />
              ORAL HYGIENE EXPERTS
            </h5>
          </div>
          <button className="btn4">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
