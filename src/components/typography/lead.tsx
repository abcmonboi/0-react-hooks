import React, { ReactNode } from "react";

const Lead = ({ children }: { children: ReactNode }) => {
  return <p className="text-muted-foreground text-xl">{children}</p>;
};

export default Lead;
