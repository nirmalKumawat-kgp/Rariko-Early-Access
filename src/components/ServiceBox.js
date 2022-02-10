import React from "react";

export default function ServiceBox(props) {
  return (
    <div
      className="row servicebox"
      style={{ border: "1px solid #FFFFFF", fontFamily: "Roboto, sans-serif" }}
    >
      <div className="col-xl-8">
        <div
          className="card"
          style={{
            minHeight: "200px",
            boxSizing: "border-box",
            backgroundColor: "transparent",
            borderRadius: "0",
            cursor: "pointer",
          }}
        >
          <div className="card-body">
            <h3
              className="card-title"
              style={{ color: " #FF0000", fontWeight: "600", fontSize: "24px" }}
            >
              {props.servicetitle}
            </h3>
            <p className="card-text my-2">{props.servicedetails}</p>
          </div>
        </div>
      </div>

      <div className="col-xl-4 text-center">
        <img
          src={props.imageS}
          alt=""
          className="my-3"
          style={{ width: "150px", height: "160px" }}
        />
      </div>
    </div>
  );
}
