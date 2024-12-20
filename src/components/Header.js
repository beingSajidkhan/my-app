import React from "react";
import logo from "../Photo/logo.ico";
import "./Header.css"; // Import CSS file
import FadeMenu from "./Dropdown";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <header>
      {/* Bottom Header */}
      <div className="bottom-header">
        <div className="container">
          <div
            className="bottom-content-wrap row align-items-center"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <div className="col-sm-4">
              <div
                className="site-branding"
                style={{ display: "flex", alignItems: "center" ,bg:"#BBF7DO" }}
              >
                <a
                  href="#"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                >
                  <img src={logo} alt="Brand" width="58" />
                  <span
                    style={{
                      marginLeft: "8px",
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#000",
                    }}
                  >
                    Demo Nagar Nigam
                  </span>
                </a>
              </div>
            </div>
            <div className="col-sm-8 text-end">
              <div
                id="mainmenu"
                className="flex"
                style={{ justifyContent: "space-between" }}
              >
                <Button id="fade-button" sx={{ color: "black" }}>
                  Home
                </Button>
                
                <FadeMenu
                  dropdownName={"Property"}
                  options={[
                    { name: "Search Property Id/Holding", link: "#" },
                    { name: "View Property Details", link: "#" },
                    { name: "View Property Demand Details", link: "#" },
                    { name: "View Last Payment Details", link: "#" },
                    { name: "Pay Property/Holding Tax", link: "#" },
                  ]}
                />

                <FadeMenu
                  dropdownName={"Waste"}
                  options={[
                    { name: "Search Consumers Details", link: "#" },
                    { name: "View Consumers Demand Details", link: "#" },
                    { name: "View Last Payment Details", link: "#" },
                    { name: "Pay Solid Waste User Charge", link: "#" },
                  ]}
                />

                <FadeMenu
                  dropdownName={"Water"}
                  options={[
                    { name: "Search Consumers Details", link: "#" },
                    { name: "View Consumers Demand Details", link: "#" },
                    { name: "View Last Payment Details", link: "#" },
                    { name: "Pay Water User Charge", link: "#" },
                  ]}
                />

                <FadeMenu
                  dropdownName={"Shop"}
                  options={[
                    { name: "Search Consumers Details", link: "#" },
                    { name: "View Consumers Demand Details", link: "#" },
                    { name: "View Last Payment Details", link: "#" },
                    { name: "Pay Water User Charge", link: "#" },
                  ]}
                />

                <FadeMenu
                  dropdownName={"Trade"}
                  options={[
                    { name: "Search Consumers Details", link: "#" },
                    { name: "View Consumers Demand Details", link: "#" },
                    { name: "View Last Payment Details", link: "#" },
                    { name: "Pay Water User Charge", link: "#" },
                  ]}
                />

                <Button id="fade-button" sx={{ color: "black" }}>
                  Grivance
                </Button>

                <Button id="fade-button" sx={{ color: "black" }}>
                  Know Your Tax Collector
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
