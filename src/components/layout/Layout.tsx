import React, { ReactNode } from "react";
import { SidebarLeft } from "@/components/layout/sidebar/SidebarLeft";
import { SidebarRight } from "@/components/layout/sidebar/SidebarRight";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/layout/header/Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset>
        <Header />
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="mx-auto w-full max-w-7xl rounded-xl">{children}</div>
          <div className="bg-muted/50 mx-auto h-24 w-full max-w-3xl rounded-xl" />
        </div>
      </SidebarInset>
      <SidebarRight />
    </SidebarProvider>
  );
};

export default Layout;
