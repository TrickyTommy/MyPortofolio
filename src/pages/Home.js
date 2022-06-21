import React from "react";
import "../styles/Home.css"
import { Email, GitHub, LinkedIn } from "@mui/icons-material";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Tommy Ferdian Hadimarta</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating</p>
          <Email />
          <LinkedIn />
          <GitHub />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
            HTML, CSS, ReactJS
            </span>
          </li>
          <li className="item">
            <h2> Back-End</h2>
            <span>
               MySQL
            </span>
          </li>
          <li className="item">
            <h2> Languages</h2>
            <span>
              JavaScript, Go, Python,  Kotlin, Java
            </span>
          </li>

        </ol>
      </div>
    </div>
  );
}

export default Home;
