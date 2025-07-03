import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const BlockQuote = ({
  children,
  ...props
}: React.BlockquoteHTMLAttributes<HTMLElement> & { children: ReactNode }) => {
  return (
    <blockquote
      {...props}
      className={cn("mt-6 border-l-2 pl-6 italic", props.className)}
    >
      {children}
    </blockquote>
  );
};

export default BlockQuote;
