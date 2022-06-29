import { Email, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Link } from "@mui/material";
import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link href="mailto:trickytommy4@gmail.com">
        <Email />
        </Link>
        <Link href="https://github.com/TrickyTommy">
        <GitHub />
        </Link>
        <Link href="https://www.linkedin.com/in/tommy-ferdian-hadimarta/">
        <LinkedIn />
        </Link>
        <Link href="https://www.instagram.com/trickytommy">
        <Instagram />
        </Link>
      </div>
      <p> &copy; 2022 Tommy Ferdian</p>
    </div>
  );
}

export default Footer;
