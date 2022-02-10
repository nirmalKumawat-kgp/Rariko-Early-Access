import { Typography } from "@material-ui/core";
import React from "react";
import ServiceBox from "./ServiceBox";

export default function Services() {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="container-fluid Services"
      id="services"
    >
      <div className="container" style={{ paddingTop: "50px" }}>
        <Typography
          variant="h3"
          style={{
            marginTop: "3vh",
            textAlign: "center",
            color: "rgba(255,255,255,0.8)",
          }}
        >
          Services
        </Typography>
        <div className="row justify-content-md-center">
          <div className="col-sm-6">
            <ServiceBox
              servicetitle="PORTFOLIO TRACKER"
              servicedetails="Gone are the days when you have to switch between multiple apps/wallets to track your portfolio.Now track your entire portfolio of Cryptocurrencies,NFTs, and DeFi investments in a single click"
              imageS="./imag/s1.png"
            />
          </div>
          <div className="col-sm-6">
            <ServiceBox
              servicetitle="CRYPTO INSIGHTS"
              servicedetails="Spending too much time tracking crypto? We are bringing you the most sophisticated crypto and NFT price alerts."
              imageS="./imag/s2.png"
            />
          </div>
        </div>

        <div class="row justify-content-md-center">
          <div class="col-sm-6">
            <ServiceBox
              servicetitle="DAO MANAGER"
              servicedetails="What if there is an easy and effective way of managing Decentralized Autonomous Organizations(DAOs)?"
              imageS="./imag/s3.png"
            />
          </div>
          <div class="col-sm-6">
            <ServiceBox
              servicetitle="SOCIAL WEB3.0"
              servicedetails="No matter if you are a begginer or a professional in the world of Web3.0 ,we are sure our social platform will help you ace your journey."
              imageS="./imag/s4.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
