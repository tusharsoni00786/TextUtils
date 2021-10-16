import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    props.showAlert("Converted to uppercase", "success");
  };

  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1> {props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters{" "}
        </p>
        <p> {0.08 * text.split(" ").length} Minutes to read</p>
      </div>
    </>
  );
}
