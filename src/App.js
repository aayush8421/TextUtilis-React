import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// let name = "<b>Aayush</b>"
function App() {
  const [mode, setmode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleMode = (value) => {
    if (value === "4") {
      if (
        mode === "primary" ||
        mode === "danger" ||
        mode === "success" ||
        mode === "light"
      ) {
        setmode("dark");
        document.body.style.backgroundColor = "#4f4f4f";
        showAlert("Dark mode has been enabled", "success");
      } else {
        setmode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Light mode has been enabled", "success");
      }
    }
    if (value === "3") {
      if (
        mode === "light" ||
        mode === "dark" ||
        mode === "danger" ||
        mode === "success"
      ) {
        setmode("primary");
        document.body.style.backgroundColor = "#001e4b";
        showAlert("Blue mode has been enabled", "success");
      } else {
        setmode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Light mode has been enabled", "success");
      }
    }
    if (value === "2") {
      if (
        mode === "light" ||
        mode === "dark" ||
        mode === "danger" ||
        mode === "primary"
      ) {
        setmode("success");
        document.body.style.backgroundColor = "#004425";
        showAlert("Green mode has been enabled", "success");
      } else {
        setmode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Light mode has been enabled", "success");
      }
    }
    if (value === "1") {
      if (
        mode === "light" ||
        mode === "dark" ||
        mode === "primary" ||
        mode === "success"
      ) {
        setmode("danger");
        document.body.style.backgroundColor = "#67000a";
        showAlert("Red mode has been enabled", "success");
      } else {
        setmode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Light mode has been enabled", "success");
      }
    }
  };

  return (
    <>
      {/* <Navbar title = "TextUtils" aboutText = "About TextUtils"/> */}
      {/* <Navbar /> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyse below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
