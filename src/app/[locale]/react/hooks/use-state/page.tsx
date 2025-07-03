"use client";

import React from "react";
import CountNumber from "@/app/[locale]/react/hooks/use-state/_components/CountNumber";
import CallBackWithUseState from "@/app/[locale]/react/hooks/use-state/_components/CallBackWithUseState";
import InitStateWithCallBack from "@/app/[locale]/react/hooks/use-state/_components/InitStateWithCallBack";
import NewValueSetState from "@/app/[locale]/react/hooks/use-state/_components/NewValueSetState";

const UseStateComponent = () => {
  return (
    <div className="grid gap-6">
      <CountNumber />
      <CallBackWithUseState />
      <InitStateWithCallBack />
      <NewValueSetState />
    </div>
  );
};

export default UseStateComponent;
