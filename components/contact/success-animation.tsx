"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

// Verified working success animation URLs:
// Success checkmark: https://assets9.lottiefiles.com/packages/lf20_jbrw3hcz.json
// Celebration: https://assets4.lottiefiles.com/packages/lf20_touohxv0.json
// Confetti: https://assets1.lottiefiles.com/packages/lf20_obhph3sh.json
const ANIMATION_URL =
  "https://assets9.lottiefiles.com/packages/lf20_jbrw3hcz.json";

export default function SuccessAnimation() {
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
      <div className="w-full max-w-xs mx-auto h-32 flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (error || !animationData) {
    return (
      <div className="w-full max-w-xs mx-auto h-32 flex items-center justify-center">
        <div className="text-green-500 text-5xl">✓</div>
      </div>
    );
  }

  return (
    <div className="w-full  mx-auto">
      <Lottie
        animationData={animationData}
        loop={false}
        autoplay={true}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}
