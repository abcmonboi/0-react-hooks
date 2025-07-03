import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Large = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & { children: ReactNode }) => {
  return (
    <div {...props} className={cn("text-lg font-semibold", props.className)}>
      {children}
    </div>
  );
};

export default Large;
