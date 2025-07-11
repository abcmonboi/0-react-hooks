import DirectoryStructure from "@/app/[locale]/nodejs/backend/_components/DirectoryStructure";
import MVC from "@/app/[locale]/nodejs/backend/_components/MVC";
import React from "react";

const page = () => {
  return (
    <div className="space-y-6">
      <DirectoryStructure />
      <MVC />
    </div>
  );
};

export default page;
