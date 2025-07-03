import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const H3 = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & { children: ReactNode }) => {
  return (
    <h3
      {...props}
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        props.className
      )}
    >
      {children}
    </h3>
  );
};

export default H3;
