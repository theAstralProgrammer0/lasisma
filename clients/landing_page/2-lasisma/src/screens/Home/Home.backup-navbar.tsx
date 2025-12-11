import React from "react";
import { Link } from "react-router-dom";
import { DataBox } from "../../components/DataBox";
import { EmergencyInfo } from "../../components/EmergencyInfo";
import { Footer } from "../../components/Footer";
import { LasgStrip } from "../../components/LasgStrip";
import { LaspemaLogoRemix } from "../../components/LaspemaLogoRemix";
import { LearnMoreButton } from "../../components/LearnMoreButton";
import { Lga } from "../../components/Lga";
import { NavBar } from "../../components/NavBar";
import { NewsCard } from "../../components/NewsCard";
import { ReportForm } from "../../components/ReportForm";
import { SearchButton } from "../../components/SearchButton";
import { Subscribe } from "../../components/Subscribe";
import { UisArrowUpRight } from "../../components/UisArrowUpRight";
import { ArrowDownIcon3 } from "../../icons/ArrowDownIcon3";
import { ArrowUpRightIcon147 } from "../../icons/ArrowUpRightIcon147";
import { CloudUploadIcon2 } from "../../icons/CloudUploadIcon2";
import { EpArrowLeft1 } from "../../icons/EpArrowLeft1";
import { EpArrowRight1 } from "../../icons/EpArrowRight1";
import { IconamoonArrowDown2Light1 } from "../../icons/IconamoonArrowDown2Light1";
import { MaterialSymbolsLightTimerOutline27 } from "../../icons/MaterialSymbolsLightTimerOutline27";
import { RiLinkedinFill2 } from "../../icons/RiLinkedinFill2";
import { SearchIcon1 } from "../../icons/SearchIcon1";
import { User7 } from "../../icons/User7";
import "./style.css";

// Import component contents
import { StakeholdersContent } from "./components/StakeholdersSection/StakeholdersSection";
import { LicenseStepsContent } from "./components/LicenseStepsSection/LicenseStepsSection";
import { InitiativesContent } from "./components/InitiativesSection/InitiativesSection";
import { NewsContent } from "./components/NewsSection/NewsSection";
import { HeroSectionContent } from "./components/HeroSection/HeroSection";
import { MvhmContent } from "./components/MvhmSection/MvhmSection";
import { JoinLasismaContent } from "./components/JoinLasismaSection/JoinLasismaSection";
import { GruCardsContent } from "./components/GruCardsSection/GruCardsSection";
import { ReportContent } from "./components/ReportSection/ReportSection";

export const Home = (): JSX.Element => {
  return (
    <div className="home">
      <LasgStrip className="design-component-instance-node-2" />
      <EmergencyInfo className="emergency-info-instance" />
      <NavBar className="nav-bar-instance" />
      
      <div className="frame-31">
        {/* ┌────────────────────────────────────┐ */}
        {/* │ 1. STAKEHOLDERS SECTION           │ */}
        {/* └────────────────────────────────────┘ */}
        <div className="stakeholders">
          <StakeholdersContent />
        </div>

        {/* ┌────────────────────────────────────┐ */}
        {/* │ 2. LICENSE STEPS SECTION          │ */}
        {/* └────────────────────────────────────┘ */}
        <div className="generate-license">
          <LicenseStepsContent />
        </div>

        {/* ┌────────────────────────────────────┐ */}
        {/* │ 3. JOIN LASISMA SECTION           │ */}
        {/* └────────────────────────────────────┘ */}
        <div className="join-LASPEMA">
          <JoinLasismaContent />
        </div>

        {/* ┌────────────────────────────────────┐ */}
        {/* │ 4. INITIATIVES SECTION            │ */}
        {/* └────────────────────────────────────┘ */}
        <div className="LASPEMA-initiatives">
          <InitiativesContent />
        </div>

        {/* ┌────────────────────────────────────┐ */}
        {/* │ 5. GRU/FAQ CARDS SECTION          │ */}
        {/* └────────────────────────────────────┘ */}
        <div className="GRU-section">
          <GruCardsContent />
        </div>

        {/* ┌────────────────────────────────────┐ */}
        {/* │ 6. REPORT SECTION                 │ */}
        {/* └────────────────────────────────────┘ */}
        <div className="report-section">
          <ReportContent />
        </div>

        {/* ┌────────────────────────────────────┐ */}
        {/* │ 7. NEWS SECTION                   │ */}
        {/* └────────────────────────────────────┘ */}
        <div className="news">
          <NewsContent />
        </div>

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

      <div className="MVHM">
        <MvhmContent />
      </div>

      <DataBox className="data-box-instance" />
      
      {/* ┌────────────────────────────────────┐ */}
      {/* │ 8. HERO SECTION (at bottom but positioned to top) */}
      {/* └────────────────────────────────────┘ */}
      <div className="hero-section">
        <HeroSectionContent />
      </div>
    </div>
  );
};

