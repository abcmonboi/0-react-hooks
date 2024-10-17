"use client";

import { Header, Sidebar } from "@/components";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />
      <div className="mt-[4rem] relative flex p-6">
        <Sidebar />
        {/* Main content */}
        <div className="ml-[15vw] w-full ">{children}</div>
      </div>
      {/* Sidebar */}
    </div>
  );
}
