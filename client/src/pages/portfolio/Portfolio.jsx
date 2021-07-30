import React from "react";
import { useState } from "react";
import { Contact } from "../../components/portfolio/contact/Contact";
import { Intro } from "../../components/portfolio/intro/Intro";
import { Menu } from "../../components/portfolio/menu/Menu";
import { Portfolio } from "../../components/portfolio/portfolio/Portfolio";
import { Topbar } from "../../components/portfolio/topbar/Topbar";
import { Works } from "../../components/portfolio/works/Works";
import "./portfolio.scss";

const PortfolioPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="portfolioContainer">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  );
};

export default PortfolioPage;
