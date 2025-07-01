import React, { ReactNode } from "react";

const Large = ({ children }: { children: ReactNode }) => {
  return <div className="text-lg font-semibold">{children}</div>;
};

export default Large;
