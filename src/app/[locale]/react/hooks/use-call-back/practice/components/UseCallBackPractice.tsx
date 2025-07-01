"use client";

import ComponentReRender from "@/app/[locale]/react/hooks/use-call-back/practice/components/ComponentReRender";
import ComponentUsing from "@/app/[locale]/react/hooks/use-call-back/practice/components/ComponentUsing";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useCallback, useState } from "react";

const UseCallBackPractice = () => {
  const [count, setCount] = useState<Number>(0);
  const [count2, setCount2] = useState<Number>(0);

  const handleClickButton = () => {
    setCount((prev) => +prev + 1);
  };
  const handleClickButton2 = useCallback(() => {
    setCount2((prev) => +prev + 1);
  }, []);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Count component un-used hook useCallback</CardTitle>
          <CardDescription>
            children using memo and use useCallback in func component
          </CardDescription>
        </CardHeader>
        <CardContent>
          Count :{count.toString()}
          <ComponentReRender onIncrese={handleClickButton} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Count component used hook useCallback</CardTitle>
          <CardDescription>
            children using memo but un-used useCallback in main component
          </CardDescription>
        </CardHeader>
        <CardContent>
          Count :{count2.toString()}
          <ComponentUsing onIncrese={handleClickButton2} />
        </CardContent>
      </Card>
    </>
  );
};

export default UseCallBackPractice;
