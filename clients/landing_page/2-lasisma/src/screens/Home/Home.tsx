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
      {/* Header Section */}
      <header className="header-section">
        <LasgStrip className="lasg-strip" />
        <EmergencyInfo className="emergency-info" />
        <NavBar />
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="frame-31">
          <div className="stakeholders">
            <StakeholdersContent />
          </div>

          <div className="generate-license">
            <LicenseStepsContent />
          </div>

          <div className="join-LASPEMA">
            <JoinLasismaContent />
          </div>

          <div className="LASPEMA-initiatives">
            <InitiativesContent />
          </div>

          <div className="GRU-section">
            <GruCardsContent />
          </div>

          <div className="report-section">
            <ReportContent />
          </div>

          <div className="news">
            <NewsContent />
          </div>

          <Subscribe className="subscribe-instance" />
        </div>

        <div className="MVHM">
          <MvhmContent />
        </div>

        <DataBox className="data-box-instance" />
        
        <div className="hero-section">
          <HeroSectionContent />
        </div>
      </main>

      {/* Footer */}
      <Footer
        className="footer"
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
    </div>
  );
};

