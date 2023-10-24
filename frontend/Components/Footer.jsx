import React from "react";
import "../Style/Footer.css";
function Footer(props) {
  return (
    <div className="footer">
      <h2>{props.data}</h2>
    </div>
  );
}
export default Footer;
