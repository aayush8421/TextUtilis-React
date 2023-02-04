import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  console.log(props.mode);
  return (
    <nav
      className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.mode}`}
      data-bs-theme={`${props.mode === "light" ? "light" : "dark"}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.aboutText}
              </a>
            </li>
          </ul>
          <div
            className="red mx-2"
            onClick={() => props.toggleMode("1")}
            style={{
              backgroundColor: props.mode === "danger" ? "white" : "red",
            }}
          ></div>
          <div
            className="green mx-2"
            onClick={() => props.toggleMode("2")}
            style={{
              backgroundColor: props.mode === "success" ? "white" : "green",
            }}
          ></div>
          <div
            className="blue mx-2"
            onClick={() => props.toggleMode("3")}
            style={{
              backgroundColor: props.mode === "primary" ? "white" : "blue",
            }}
          ></div>
          <div
            className="toggle mx-2"
            onClick={() => props.toggleMode("4")}
            style={{
              backgroundColor: props.mode === "dark" ? "white" : "black",
            }}
          ></div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set Title here",
  aboutText: "About us",
};
