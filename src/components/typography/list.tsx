import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const List = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLUListElement> & { children: ReactNode }) => {
  return (
    <ul
      {...props}
      className={cn("ml-6 list-disc [&>li]:mt-2", props.className)}
    >
      {children}
    </ul>
  );
};

export default List;
