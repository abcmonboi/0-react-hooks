import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Lead = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & { children: ReactNode }) => {
  return (
    <p
      {...props}
      className={cn("text-muted-foreground text-xl", props.className)}
    >
      {children}
    </p>
  );
};

export default Lead;
