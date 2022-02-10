import {
  AppBar,
  Container,
  createTheme,
  makeStyles,
  ThemeProvider,
  Toolbar,
} from "@material-ui/core";
import React, { useState } from "react";
import "./navbar.css";
const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});
const useStyles = makeStyles(() => ({
  navBar: {
    display: "flex",
    justifyContent: "space-between",
    maxHeight: "12vh",
    overflowY: "hidden",
  },
  navbar: {
    position: "sticky",
    maxHeight: "12vh",
  },
  colorChange: {
    position: "sticky",
    top: "0",
    backgroundColor: "rgba(0,0,0,0.9)",
    "z-index": 2,
    maxHeight: "12vh",
  },
}));

export default function Navbar() {
  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
      <span id="home"> </span>
      <div className={colorChange ? classes.colorChange : classes.navbar}>
        <AppBar position="static" color="transparent">
          <Container>
            <Toolbar className={classes.navBar}>
              <div className="logoContainer">
                {/* <img src="/imag/rairkoLogo.png" alt="rarikoImg" /> */}
              </div>
              <div className="navLinks">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contactUs">Contact Us</a>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}
