import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>During my free time, I love cuddling with my 2 dogs, Levi and Snoop.</p>
      <img src={image} alt="I made this"></img>
    </div>
  );
}

export default About;
