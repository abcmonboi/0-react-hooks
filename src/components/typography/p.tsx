import React, { ReactNode } from "react";

const P = ({ children }: { children: ReactNode }) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
};

export default P;
