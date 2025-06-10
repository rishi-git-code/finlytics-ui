import React from "react";
import HeroSection from "../features/HeroSection";
import FeatureMenu from "../features/FeatureMenu";
import Preview from "../features/Preview";
import WhyChooseUs from "../features/WhyChooseUs";
import Footer from "../features/Footer";
import Header from "../components/Headers";

const BeforeLoginHome = () => {
    return(
    <>
        <Header />
        <HeroSection/>
        <FeatureMenu/>
        <Preview/>
        <WhyChooseUs/>
        <Footer/>
    </>
    )
}

export default BeforeLoginHome;