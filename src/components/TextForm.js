import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked : " + text)
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleonChange = (event)=>{
        // console.log("On Change")
        setText(event.target.value)
    }

    const [text,setText] = useState("Enter text here");
    // text = "new text"// wrong way to change the state
    // setText("new text")// correct way to change the state

  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text}     
         onChange={handleonChange}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to 
         UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to 
         LowerCase</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text === ""?0:text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * (text === ""?0:text.split(" ").length)} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
