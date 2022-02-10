import { Typography } from "@material-ui/core";
import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./contactUs.css";
export default function Team() {
  return (
    <div
      className="container"
      style={{ padding: "2.5rem 0rem" }}
      id="contactUs"
    >
      <div className="row justify-content-md-center">
        <div className="col-md-4">
          <Typography
            variant="h3"
            style={{ color: "rgba(255,255,255)", fontWeight: 500 }}
          >
            <span style={{ color: "red" }}>Rari</span>Ko
          </Typography>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <a
              target="_blank"
              href="https://www.linkedin.com/company/rariko"
              without
              rel="noreferrer"
              style={{ fontSize: "1.75rem", marginRight: "1rem" }}
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/rariko_info?s=09"
              without
              rel="noreferrer"
              style={{ fontSize: "1.75rem", marginRight: "1rem" }}
            >
              <FaTwitter />
            </a>
            <a
              target="_blank"
              href="https://instagram.com/rariko.eth?utm_medium=copy_link"
              without
              rel="noreferrer"
              style={{ fontSize: "1.75rem", marginRight: "1rem" }}
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="col-md-4">
          {" "}
          <Typography
            variant="body-2"
            style={{ color: "rgba(255,255,255,0.9)" }}
          >
            Address: Rariko Technologies Private Limited, Pt No 570/261(P)
            Kh-201, IDCO Pt no 1, Gothapatna, Bhubaneswar, Odisha, India
            (751003)
          </Typography>
        </div>
        <div className="col-md-4 contactSection">
          <span>We're here</span>
          <span>Let's talk</span>

          <button className="contactButton">Get in Touch</button>
        </div>
      </div>
    </div>
  );
}
