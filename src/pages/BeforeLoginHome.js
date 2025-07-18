import React, { useEffect, useState, useCallback  } from "react";
import HeroSection from "../features/HeroSection";
import FeatureMenu from "../features/FeatureMenu";
import Preview from "../features/Preview";
import WhyChooseUs from "../features/WhyChooseUs";
import Footer from "../features/Footer";
import Header from "../components/Headers";
import { validateToken } from "../services/authService";
import { useNavigate } from "react-router-dom";

const BeforeLoginHome = () => {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const checkToken = useCallback(async () => {
        try {
            await validateToken();
            setIsLoading(false);
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
            navigate("/");
        }

    },[navigate]);
    // Use effect to validate token on component mount
    useEffect(() => {
        checkToken();
    }, [checkToken]);  // No dependencies inside, so this is safe

    // Show loading state while checking the token
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Show error message if there was an issue with token validation
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <Header />
            <HeroSection />
            <FeatureMenu />
            <Preview />
            <WhyChooseUs />
            <Footer />
        </div>
    )
}

export default BeforeLoginHome;