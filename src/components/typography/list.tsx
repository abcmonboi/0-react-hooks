import React, { ReactNode } from "react";

const List = ({ children }: { children: ReactNode }) => {
  return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>;
};

export default List;
