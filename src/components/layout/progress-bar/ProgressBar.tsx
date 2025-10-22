"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";

const ProgressBar = () => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (!progressBarRef.current) return;
      const scrollY = window.scrollY;
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percentScroll =
        scrollableHeight > 0
          ? Math.min((scrollY / scrollableHeight) * 100, 100)
          : 0;
      progressBarRef.current.style.width = `${percentScroll}%`;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [path]);

  return (
    <div
      style={{
        width: 0,
      }}
      ref={progressBarRef}
      className="h-[2px] z-50 rounded-r-md fixed top-0 left-0 transition-all duration-100
             bg-[linear-gradient(90deg,#ef4444,#fb923c,#fde047,#34d399,#60a5fa,#6366f1,#a78bfa)]
             bg-[length:200%_100%] animate-[moveGradient_3s_linear_infinite]"
    />
  );
};

export default ProgressBar;
