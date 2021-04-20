import React from "react";
import html from "../images/HTML5.png";
import express from "../images/expressjslogo.png";
import github from "../images/github.svg";
import heroku from "../images/heroku.svg";
import javascript from "../images/javascript.png";
import matcss from "../images/matcss.png";
import mongodb from "../images/mongodb.png";
import nodeJS from "../images/NodeJS.png";
import react from "../images/react.svg";
import redux from "../images/redux.svg";
import mui from "../images/mui.png";

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Technologies</h1>
          <div className="skills-grid">
          <br />
          <img src={html} alt={"HTML"} style={{"height": "60px"}}/>
          <img src={express} alt={"express"} style={{"height": "60px"}}/>
          <img src={github} alt={"github"} style={{"height": "60px"}}/>
          <img src={heroku} alt={"heroku"} style={{"height": "60px"}}/>
          <img src={javascript} alt={"javascript"} style={{"height": "60px"}}/>
          <img src={matcss} alt={"materialize css"} style={{"height": "60px"}}/>
          <img src={mongodb} alt={"mongodb"} style={{"height": "60px"}}/>
          <img src={nodeJS} alt={"nodeJS"} style={{"height": "60px"}}/>
          <img src={react} alt={"react"} style={{"height": "60px"}}/>
          <img src={redux} alt={"redux"} style={{"height": "60px"}}/>
          <img src={mui} alt={"material ui"} style={{"height": "60px"}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
