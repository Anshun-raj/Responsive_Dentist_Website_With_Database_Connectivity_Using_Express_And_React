/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaTooth } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Style/Header.css";

function Header(props) {
  const x = "Data sent to parent";
  console.log(props.val(x));
  const [isResponsive, setIsResponsive] = useState(false);

  return (
    <div className="navbar">
      <a href="#" className="logo">
        <FaTooth className="tooth" />
        Dentist
      </a>
      <ul
        className={isResponsive ? "responsive-navLinks" : "navLinks"}
        onClick={() => setIsResponsive(false)}
      >
        <li>
          <Link to="/" className="x">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="x">
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="x">
            Services
          </Link>
        </li>
        <li>
          <Link to="/product" className="x">
            Product
          </Link>
        </li>
        <li>
          <Link to="/team" className="x">
            Team
          </Link>
        </li>
        <li>
          <Link to="/pricing" className="x">
            Pricing
          </Link>
        </li>
        <li>
          <Link to="/contact" className="x">
            Contact
          </Link>
        </li>
      </ul>
      <button
        className="responsive-menu-icon"
        onClick={() => setIsResponsive(!isResponsive)}
      >
        {isResponsive ? (
          <AiOutlineClose className="y" />
        ) : (
          <AiOutlineMenu className="y" />
        )}
      </button>
    </div>
  );
}

export default Header;
