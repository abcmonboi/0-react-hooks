import { cn } from "@/lib/utils";
import React, { ReactElement, ReactNode } from "react";

const H4 = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & { children: ReactNode }) => {
  return (
    <h4
      {...props}
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        props.className
      )}
    >
      {children}
    </h4>
  );
};

export default H4;
