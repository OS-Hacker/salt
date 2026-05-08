import React from "react";
import Banner from "../components/Banner";
import Button from "../style/Button";
import Feature from "../components/Feature";
import FeatureSwipper from "../components/FeatureSwipper";
import HeroSection from "../components/HeroSection";
import Categories from "../components/Categories";
import NewArrivals from "../components/NewArrivals";
import SecondBanner from "../components/SecondBanner";
import Furnitures from "../components/Furnitures";
import LogoMarquee from "../components/LogoMarquee";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeatureSwipper />
      <HeroSection />
      <Categories />
      <NewArrivals />
      <SecondBanner />
      <Furnitures />
      <LogoMarquee/>
    </div>
  );
};

export default Home;
