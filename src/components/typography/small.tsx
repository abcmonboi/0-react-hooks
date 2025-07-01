import React, { ReactNode } from "react";

const Small = ({ children }: { children: ReactNode }) => {
  return <small className="text-sm leading-none font-medium">{children}</small>;
};

export default Small;
