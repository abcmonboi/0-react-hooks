"use client";

import { Header, Sidebar } from "@/components";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <Header />
      {/* Sidebar */}
      <Sidebar />
      {/* Main content */}
      <main className="ml-80 p-8">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-10 space-y-6 min-h-fit">
          {children}
        </div>
      </main>
    </div>
  );
}