import React from "react";

import "./PageLayout.scss";

import Footer from "../Footer/Footer";
import MainSection from "../MainSection/MainSection";
import NavSideBar from "../NavSideBar/NavSideBar";
import Header from "../Header/Header";

export default function PageLayout(props) {
  return (
    <div className="PageLayout">
      <Header />
      <NavSideBar />
      <MainSection />
      <Footer />
    </div>
  );
}
