import React, { ReactNode } from "react";

const H2 = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
};

export default H2;
