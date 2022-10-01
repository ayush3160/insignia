import React from "react";
import {Link} from 'react-scroll'
import logo from "../../image/logo.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Header.css";
function Header(props) {
  return (
    <div className="container-medium">
      <div className="navbar">
        <div className="left">
          <img src={logo} alt="logo" />
          <h1>Insignia</h1>
        </div>
        <div className="right">
          <ul className="pages">
            <li className="about" style={{cursor:"pointer"}}><Link activeClass="active" to="about" spy={true} smooth={true} offset={-30} duration={500}>About</Link></li>
            <li style={{ color: "#FFFFFF" ,cursor:"pointer"}}><Link activeClass="active" to="testimonials" spy={true} smooth={true} offset={200} duration={500}>Testimonials</Link></li>
            <li style={{ color: "#FFFFFF" ,cursor:"pointer"}}><Link activeClass="active" to="features" spy={true} smooth={true} offset={50} duration={500}>Features</Link></li>
            <li style={{ color: "#FFFFFF" ,cursor:"pointer"}}><Link activeClass="active" to="signup" spy={true} smooth={true} offset={50} duration={500} onClick = {() => {props.handleShow(true)}}>SignUp</Link></li>
            <li className="requestDemo">
              <h2>Request Demo</h2>
              <ArrowForwardIcon style={{ color: "#9C69E2" }} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
