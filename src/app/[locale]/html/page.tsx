import React from "react";
import MagicTransisition from "./_components/MagicTransisition";
import TextCss from "./_components/TextCss";

const page = () => {
  return (
    <div className="grid gap-4">
      <MagicTransisition />
      <TextCss />
    </div>
  );
};

export default page;
