import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

interface HomepageProps {
  title?: string;
}

const Homepage: React.FC<HomepageProps> = ({ title = "Dashboard" }) => {
  const navigate = useNavigate();

  return (
    <div className="homepage-wrapper">
      <h1>{title}</h1>
      <p>Auto-generated from Figma design</p>
    </div>
  );
};

export default Homepage;
