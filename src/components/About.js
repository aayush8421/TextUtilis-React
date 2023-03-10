import React from "react";

export default function About(props) {
  let myStyle = {
    backgroundColor:
      props.mode === "dark"
        ? "#4f4f4f"
        : props.mode === "primary"
        ? "#001e4b"
        : props.mode === "success"
        ? "#004425"
        : props.mode === "danger"
        ? "#67000a"
        : "white",
    color: props.mode === "light" ? "black" : "white",
    border: "1px solid",
    borderColor: props.mode === "light" ? "black" : "white",
  };
  return (
    <div className="container">
      <h1
        className="my-2"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyse Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtilis gives you a way to analyse your text quickly and
              efficiently. Be it word count, character count or time required to
              read the sentence.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtilis is a free character counter tool that provides instant
              character count & word count statistics for a given text.
              TextUtilis reports the number of words and characters. Thus is
              suitable for writting text with word/character limit
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browsers such as
              Chrome ,Firefox ,Internet Explorer ,Safari ,Opera. It suits to
              count characters in Facebook ,block ,books ,Excel document ,PDF
              document, essays, etc
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
