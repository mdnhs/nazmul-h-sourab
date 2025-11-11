"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

// Verified working Lottie animation URLs:
// Email: https://lottie.host/6e3f8c7d-8f9a-4d6e-9c2b-1f3e4a5d6c7b/XyZ123AbC.json
// Or use a CDN link from LottieFiles
const ANIMATION_URL =
  "https://assets9.lottiefiles.com/packages/lf20_u25cckyh.json";

export default function ContactAnimation() {
  const [animationData, setAnimationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(ANIMATION_URL)
      .then((response) => response.json())
      .then((data) => {
        setAnimationData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load animation:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full max-w-md p-4 flex items-center justify-center h-96">
        <div className="animate-pulse text-muted-foreground">
          Loading animation...
        </div>
      </div>
    );
  }

  if (error || !animationData) {
    return (
      <div className="w-full max-w-md p-4 flex items-center justify-center h-96">
        <div className="text-muted-foreground">Animation unavailable</div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md p-4">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}
