import React from "react";
import { Link } from "react-router-dom";
const myStyle ={
  textAlign: "center"
}
const linkStyle = {
  margin: "0 70px",
  fontSize : "25px",
  color: "black"
};
function Navigation(){

    return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="#">Short Link App</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto mx-auto" style={myStyle}>
      <li className="nav-item active" style={linkStyle}>
        <Link className="nav-link" to="/">&nbsp; Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active" style={linkStyle}>
        <Link className="nav-link" to="/history">History Page</Link>
        </li>
        <li className="nav-item active" style={linkStyle}>
        <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
    </ul>
  </div>
</nav>
);
}

export default Navigation;