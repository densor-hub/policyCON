import Summary from "../components/aboutUs/Summary";
import AboutusText from "../components/aboutUs/AboutText";
import Footer from "../components/aboutUs/Footer";
import React, { useRef } from "react";
import Header from "../components/aboutUs/Header";

const LandingPage = () => {
    const summaryHeight = useRef(null);

    return (
        <main className="overflow-x-hidden">
            <Header />
            <Summary ref={summaryHeight} />
            <AboutusText summaryHeight={summaryHeight} />
            <Footer />
        </main>
    );
};

export default LandingPage;
