import React from "react";
import { HeroSection } from "./components/HeroSection";
import { StakeholdersSection } from "./components/StakeholdersSection";
import { LicenseStepsSection } from "./components/LicenseStepsSection";
import { JoinLasismaSection } from "./components/JoinLasismaSection";
import { InitiativesSection } from "./components/InitiativesSection";
import { GruCardsSection } from "./components/GruCardsSection";
import { ReportSection } from "./components/ReportSection";
import { NewsSection } from "./components/NewsSection";
import { MvhmSection } from "./components/MvhmSection";
import { DataBox } from "../../components/DataBox";
import { EmergencyInfo } from "../../components/EmergencyInfo";
import { Footer } from "../../components/Footer";
import { LasgStrip } from "../../components/LasgStrip";
import { NavBar } from "../../components/NavBar";
import { Subscribe } from "../../components/Subscribe";
import "./style.css";

export const Home = (): JSX.Element => {
  return (
    <div className="home">
      <LasgStrip className="design-component-instance-node-2" />
      <EmergencyInfo className="emergency-info-instance" />
      <NavBar className="nav-bar-instance" />
      
      <div className="frame-31">
        <HeroSection className="hero-section" />
        <StakeholdersSection />
        <LicenseStepsSection />
        <JoinLasismaSection />
        <InitiativesSection />
        <GruCardsSection />
        <ReportSection />
        <NewsSection />
        <Subscribe className="subscribe-instance" />
      </div>
      
      <Footer
        className="footer-instance"
        facebookLogoFacebookLogo="/img/facebook-logo-2.svg"
        href="https://facebook.com"
        href1="https://twitter.com/"
        instagramLogoClassName="footer-2"
        linkedinLogoClassName="footer-3"
        twitterLogoTwitterLogo="/img/twitter-logo-2.svg"
        youtubeLogoImg="/img/vector-10.svg"
        youtubeLogoVector="/img/vector-11.svg"
        youtubeLogoVectorClassName="footer-4"
      />
      
      <MvhmSection />
      <DataBox className="data-box-instance" />
    </div>
  );
};

