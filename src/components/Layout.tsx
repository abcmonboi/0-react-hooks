"use client";

import { Header, Sidebar } from "@/components";
import { useSelectedLayoutSegments } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get current route segments
  const segments = useSelectedLayoutSegments();
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mt-[7rem] relative flex p-6">
        <Sidebar />
        <div className="ml-[2rem] w-full ">{children}</div>
      </div>
    </div>
  );
}
