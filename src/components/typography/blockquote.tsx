import React, { ReactNode } from "react";

const BlockQuote = ({ children }: { children: ReactNode }) => {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
};

export default BlockQuote;
