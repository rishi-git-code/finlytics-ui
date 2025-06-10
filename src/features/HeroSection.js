import React from "react";
import "../styles/StyleHome.css";

const HeroSection = () => {
    return (
        <section className="hero">
            <h1>Track. Save. Grow.</h1>
            <p>Your Personal Finance Assistant</p>
            <div>
                <>Click here to Login/Register </>
                <a href="/" className="btn">Login</a>
                {/* <br></br>
                <a href="/signup" className="btn-signup">Sign Up</a> */}
            </div>
        </section>
    )
}

export default HeroSection;