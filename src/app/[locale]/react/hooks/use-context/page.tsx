import GlobalState from "@/app/[locale]/react/hooks/use-context/_components/GlobalState";
import UseContextHook from "@/app/[locale]/react/hooks/use-context/_components/UseContextHook";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <UseContextHook />
      <GlobalState />
    </div>
  );
};

export default page;
