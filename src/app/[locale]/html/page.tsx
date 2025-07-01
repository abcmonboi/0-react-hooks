import React from "react";
import MagicTransisition from "./_components/MagicTransisition";
import TextCss from "./_components/TextCss";

const page = () => {
  return (
    <div className="flex flex-col w-full gap-6">
      <MagicTransisition stateLess />
      <MagicTransisition />
      <TextCss />
    </div>
  );
};

export default page;
