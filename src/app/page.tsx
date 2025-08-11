"use client";

import CustomCursor from "../components/CustomCursor";
import { useState, useEffect } from "react";
import Home from "../pages/Home";
import Container from "../components/cards/Container";
import Loader from "../pages/Loader";

export default function HomePage() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Check if loader has been shown in this session
    const loaderShown = sessionStorage.getItem('loaderShown');
    if (loaderShown === 'true') {
      setShowLoader(false);
    }
  }, []);

  const handleLoaderComplete = () => {
    setShowLoader(false);
    // Mark loader as shown for this session
    sessionStorage.setItem('loaderShown', 'true');
  };

  return (
    <div className="min-h-screen py-8">
      <CustomCursor />
      <Container>
        {showLoader ? <Loader onComplete={handleLoaderComplete} /> : <Home />}
      </Container>
    </div>
  );
}
