import "./App.css";
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

// let name = "<b>Aayush</b>"
function App() {
  const [mode, setmode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(()=>{
      setalert(null)
    },1500)
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtilis - Dark Mode'
      // setInterval(()=>{
      //   document.title = 'TextUtilis is amazing'
      // },2000)
      // setInterval(()=>{
      //   document.title = 'Install TextUtilis now'
      // },1500)
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtilis - Light Mode'
    }
  };

  return (
    <>
      {/* <Navbar title = "TextUtils" aboutText = "About TextUtils"/> */}
      {/* <Navbar /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          heading="Enter the text to analyse below"
          mode={mode}
          showAlert={showAlert}
        />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
