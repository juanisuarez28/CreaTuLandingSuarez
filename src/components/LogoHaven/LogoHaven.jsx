import React from "react";
import "./LogoHaven.css";
import { Link } from "react-router-dom";

const LogoHaven = () => {
  return (
    <Link to="/">
      <img className="logo" src="/assets/imgs/haventext.png"></img>
    </Link>
  );
};

export default LogoHaven;
