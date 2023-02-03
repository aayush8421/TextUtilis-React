import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked : " + text)
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleAlterClick = () => {
    let newText = "";
    // for(let i in text){
    //   console.log(i + text[i])
    // }
    for (let i in text) {
      if (text[i] !== " ") {
        if (i % 2 === 0) {
          newText = newText + text[i].toLowerCase();
        } else {
          newText = newText + text[i].toUpperCase();
        }
      } else {
        newText = newText + " ";
      }
    }
    setText(newText);
  };

  const handleTitleClick = () => {
    let text1 = text.trim();
    let newText = "";
    for (let i in text1) {
      let index = Number.parseInt(i) + 1;
      if (text1[i] === " ") {
        newText = newText + text1[i];
        newText = newText + text1[index].toUpperCase();
      } else {
        if (text1[i - 1] !== -1 && text1[i - 1] !== " ") {
          newText = newText + text1[i].toLowerCase();
        }
      }
    }
    let text3 = newText.substring(1);
    newText = newText[0].toUpperCase() + text3;
    setText(newText);
  };

  const handleonChange = (event) => {
    // console.log("On Change")
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  // text = "new text"// wrong way to change the state
  // setText("new text")// correct way to change the state

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleonChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleAlterClick}>
          Convert to AlternateCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleTitleClick}>
          Convert to TitleCase
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text === "" ? 0 : text.split(" ").length} words and {text.length}{" "}
          characters
        </p>
        <p>{0.008 * (text === "" ? 0 : text.split(" ").length)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
