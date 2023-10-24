import React, { useState } from "react";
import "../Style/Team.css";
import teamImg1 from "../Images/team-1.jpg";
import teamImg2 from "../Images/team-2.jpg";
import teamImg3 from "../Images/team-3.jpg";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

function Team() {
  const [isCall1, setCall1] = useState(false);
  const [isCall2, setCall2] = useState(false);
  const [isCall3, setCall3] = useState(false);
  function Calling1() {
    setCall1(!isCall1);
    alert("Calling John..");
  }
  function Calling2() {
    setCall2(!isCall2);
    alert("Calling Diana..");
  }
  function Calling3() {
    setCall3(!isCall3);
    alert("Calling Gaga..");
  }
  
  

  return (
    <div className="team">
      <h1>Our Team</h1>
      <div className="teamData">
        <div className="teamDataCard">
          <img src={teamImg1} alt="" />
          <h3>John Lacy:-Surgeon</h3>
          <div className="socialIcon">
            <AiFillFacebook className="icon" />
            <AiFillTwitterSquare className="icon" />
            <AiFillInstagram className="icon" />
            <AiFillLinkedin className="icon" />
          </div>
          <button onClick={Calling1} className="btn6">
            {isCall1 ? "Calling..." : "Contact Now"}
          </button>
        </div>
        <div className="teamDataCard">
          <img src={teamImg2} alt="" />
          <h3>Daina Bryan:-Pharmacist</h3>
          <div className="socialIcon">
            <AiFillFacebook className="icon" />
            <AiFillTwitterSquare className="icon" />
            <AiFillInstagram className="icon" />
            <AiFillLinkedin className="icon" />
          </div>
          <button onClick={Calling2} className="btn6">
            {isCall2 ? "Calling..." : "Contact Now"}
          </button>
        </div>
        <div className="teamDataCard">
          <img src={teamImg3} alt="" />
          <h3>Lady Gaga:-Compounder</h3>
          <div className="socialIcon">
            <AiFillFacebook className="icon" />
            <AiFillTwitterSquare className="icon" />
            <AiFillInstagram className="icon" />
            <AiFillLinkedin className="icon" />
          </div>
          <button onClick={Calling3} className="btn6">
            {isCall3 ? "Calling..." : "Contact Now"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Team;
