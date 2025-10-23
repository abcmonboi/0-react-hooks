"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpCircleIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

const BacktoTop = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const handleShowButton = () => {
      if (typeof window === "undefined") return;
      setIsShow(window.scrollY > 300);
    };
    handleShowButton();
    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  const handleScroll = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={handleScroll}
      size={"icon"}
      className={cn(
        "fixed bottom-4 right-[16rem] z-50 rounded-full  [&_svg]:size-8 transition-all duration-300 hover:scale-110",
        {
          "scale-0": !isShow,
        }
      )}
    >
      <ArrowUpCircleIcon />
    </Button>
  );
};

export default BacktoTop;
