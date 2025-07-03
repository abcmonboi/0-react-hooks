import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Small = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & { children: ReactNode }) => {
  return (
    <small
      {...props}
      className={cn("text-sm leading-none font-medium", props.className)}
    >
      {children}
    </small>
  );
};

export default Small;
