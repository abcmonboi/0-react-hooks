import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const H1 = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & { children: ReactNode }) => {
  return (
    <h1
      {...props}
      className={cn(
        "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
        props.className
      )}
    >
      {children}
    </h1>
  );
};

export default H1;
