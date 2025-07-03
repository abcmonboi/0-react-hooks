import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Muted = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & { children: ReactNode }) => {
  return (
    <p
      {...props}
      className={cn("text-muted-foreground text-sm", props.className)}
    >
      {children}
    </p>
  );
};

export default Muted;
