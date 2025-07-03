import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const H2 = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & { children: ReactNode }) => {
  return (
    <h2
      {...props}
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        props.className
      )}
    >
      {children}
    </h2>
  );
};

export default H2;
