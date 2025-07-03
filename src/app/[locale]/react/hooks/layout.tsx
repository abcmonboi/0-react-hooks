"use client";

import { H1Typo } from "@/components/typography";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();

  return (
    <>
      <H1Typo className="w-full mb-6 text-center">{`Hooks (${pathname
        .split("/")
        .at(-1)})`}</H1Typo>
      {children}
    </>
  );
};

export default Layout;
