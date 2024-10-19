"use client";

import { Header, Sidebar } from "@/components";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
