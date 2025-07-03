import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const P = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & { children: ReactNode }) => {
  return (
    <p
      {...props}
      className={cn("leading-7 [&:not(:first-child)]:mt-6", props.className)}
    >
      {children}
    </p>
  );
};

export default P;
