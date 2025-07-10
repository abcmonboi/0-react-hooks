import BasicInfo from "@/app/[locale]/nodejs/_components/BasicInfo";
import RequireLibrary from "@/app/[locale]/nodejs/_components/RequireLibrary";

import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-6">
      <BasicInfo />
      <RequireLibrary />
    </div>
  );
};

export default page;
