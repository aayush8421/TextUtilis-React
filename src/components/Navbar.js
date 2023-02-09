import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  let navTheme = {
    backgroundColor:
      props.mode === "dark"
        ? "#363636"
        : props.mode === "primary"
        ? "#0000bd"
        : props.mode === "success"
        ? "#009e00"
        : props.mode === "danger"
        ? "#bd0000"
        : "#f8f8f8",
    color: props.mode === "light" ? "black" : "white",
  };

  return (
    <nav className={`navbar navbar-expand-lg`} style={navTheme}>
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          style={{ color: props.mode === "light" ? "black" : "white" }}
          to="/"
        >
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: props.mode === "light" ? "black" : "white" }}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: props.mode === "light" ? "black" : "white" }}
                to="/about"
              >
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div
            className="theme"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            Choose Your Theme :
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
