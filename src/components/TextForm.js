import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked : " + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case", "success");
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
    props.showAlert("Converted to Alternate case", "success");
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
    props.showAlert("Converted to Title case", "success");
  };

  const handleCopy=()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard","success");
  }

  const handleClear=()=>{
    setText("");
  }

  const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success")
  }

  const handleonChange = (event) => {
    // console.log("On Change")
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  // text = "new text"// wrong way to change the state
  // setText("new text")// correct way to change the state

  let backStyle = {
    backgroundColor:
      props.mode === "dark"
        ? "#6b6b6b"
        : props.mode === "primary"
        ? "#0d3b7f"
        : props.mode === "success"
        ? "#0e6c42"
        : props.mode === "danger"
        ? "#8b1621"
        : "#f8f8f8",
    color: props.mode === "light" ? "black" : "white",
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleonChange}
            style={backStyle}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className={`btn btn-${props.mode} mx-2 my-1`}
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${props.mode} mx-2 my-1`}
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${props.mode} mx-2 my-1`}
          onClick={handleAlterClick}
        >
          Convert to AlternateCase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${props.mode} mx-2 my-1`}
          onClick={handleTitleClick}
        >
          Convert to TitleCase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${props.mode} mx-2 my-1`}
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${props.mode} mx-2 my-1`}
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${props.mode} mx-2 my-1`}
          onClick={handleClear}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your text summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            (text === ""
              ? 0
              : text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length)}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview"}
        </p>
      </div>
    </>
  );
}
