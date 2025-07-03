"use client";

import { H1Typo } from "@/components/typography";
import { BreadcrumbPage } from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

const BreadCrumbPage = () => {
  const pathname = usePathname();
  const title = useMemo(() => {
    const lastSegments = pathname.split("/").at(-1);
    const arr = lastSegments ? lastSegments.split("-") : [];
    if (arr.length > 1) {
      return arr.join(" ");
    }
    return "Learning Step By Step";
  }, [pathname]);

  return (
    <BreadcrumbPage className="line-clamp-1 capitalize">{title}</BreadcrumbPage>
  );
};

export default BreadCrumbPage;
