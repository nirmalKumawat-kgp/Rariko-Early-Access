import React from "react";

export default function ForList(props) {
  return (
    <div
      className="row justify-content-md-center "
      style={{
        fontFamily: "Roboto Condensed, sans-serif",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="col-2 circa my-2 text-center"
        style={{
          borderRadius: "50%",
          color: "#FF0000",
          marginBottom: "2rem",
          border: "2px solid #ff0000",
          outline: "3px dotted red",
          outlineOffset: "3px",
        }}
      >
        {props.title}
      </div>
      <div
        className="col-10 my-2"
        style={{
          width: "80%",
          color: "white",
          padding: "0.2em 0.3em",
          marginLeft: "0.3rem",
        }}
      >
        {props.listItem}
      </div>
    </div>
  );
}
