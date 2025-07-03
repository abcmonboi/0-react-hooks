import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const InlineCode = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & { children: ReactNode }) => {
  return (
    <code
      {...props}
      className={cn(
        "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        props.className
      )}
    >
      {children}
    </code>
  );
};

export default InlineCode;
