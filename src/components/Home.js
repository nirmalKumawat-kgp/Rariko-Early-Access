import React, { useState } from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import "./home.css";
import { countryList } from "../data/coutnries";
const useStyles = makeStyles(() => ({
  heading: {
    fontFamily: "Red Hat Text",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "4rem",
    lineHeight: "5rem",
  },
  button: {
    background: "transparent",
    border: "3px solid #FFFFFF",
    borderRadius: "5px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "2.5rem",
    lineHeight: "3rem",
    letterSpacing: "0.05em",
    color: "#FFFFFF",
    marginTop: "2rem",
    padding: "0.5rem",
    transition: "all 0.5s",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
}));
const handleEarlyAccess = () => {};

export default function Home() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("Select Your Country");
  return (
    <Container style={{ minHeight: "100vh" }}>
      <div style={{ display: "flex" }}>
        <div
          style={{
            marginTop: "20vh",
            height: "60vh",
          }}
        >
          <Typography
            className={classes.heading}
            style={{
              color: "#FFFFFF",
            }}
          >
            A NEW WAY TO SOCIALIZE
          </Typography>
          <Typography className={classes.heading} style={{ color: "red" }}>
            IN THE WORLD OF WEB3.0
          </Typography>
        </div>

        <div>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "space-evenly",
              padding: "3rem",
            }}
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            >
              {countryList.map((country, index) => {
                return (
                  <option value={country} key={index}>
                    {country}
                  </option>
                );
              })}
            </select>
            <button
              className={classes.button}
              onClick={() => handleEarlyAccess()}
            >
              Get Early Access
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}
