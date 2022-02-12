import { Typography } from "@material-ui/core";
import React from "react";
import ForList from "./ForList";

export default function About() {
  return (
    <div
      className="container-fluid"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      id="about"
    >
      <div className="container" style={{ paddingTop: "0" }}>
        <Typography
          variant="h4"
          style={{
            marginBottom: "5vh",
            textAlign: "center",
            color: "rgba(255,255,255,0.8)",
          }}
        >
          ABOUT
        </Typography>
        <div
          className="row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div className="col-md-6">
            <div
              className="container first"
              style={{ color: "white", textAlign: "justify" }}
            >
              <br />
              <p
                style={{
                  "letter-spacing": "1px",
                  fontFamily: "Roboto",
                  fontSize: "1.25rem",
                }}
              >
                At Rariko, we are building a platform which will help users
                effectively manage their crypto currencies, NFTs and blockchain
                domains at one place.
                <br />
                <br />
                Now you can create your own digital identity,showoff your
                portfolio, follow what your inner circle and the crypto
                community is upto.
                <br />
                <br />
                Fasten your seatbelts before we take off to the moon 🌕
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="fancy container" style={{ fontSize: "30px" }}>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <ForList title="1" listItem="Cryptocurrencies" />
                </li>
                <li className="list-group-item">
                  <ForList title="2" listItem="DeFi" />
                </li>
                <li className="list-group-item">
                  <ForList title=" 3" listItem="NFTs" />
                </li>
                <li className="list-group-item">
                  <ForList title="4" listItem="DAOs" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
