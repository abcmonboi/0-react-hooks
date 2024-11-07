"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useCallback, useState } from "react";
import ComponentRerender from "./components/ComponentRerender";
import ComponentUsing from "./components/ComponentUsing";

const PageUseCallBack = () => {
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
          <ComponentRerender onIncrese={handleClickButton} />
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

export default PageUseCallBack;


import { Button } from "@/components/ui/button";
import React from "react";

const ComponentRerender = ({ onIncrese }: { onIncrese: () => void }) => {
  console.log("Re-Render unuse callback");
  return (
    <div className="flex flex-col items-center justify-center">
      Re-render
      <Button onClick={onIncrese}>Increase</Button>
    </div>
  );
};

export default React.memo(ComponentRerender);



import { Button } from "@/components/ui/button";
import React from "react";

const ComponentUsing = ({ onIncrese }: { onIncrese: () => void }) => {
  console.log("Un-Rerender with useCallback");
  return (
    <div className="flex flex-col items-center justify-center">
      Un-Render with prop only func from main component
      <Button onClick={onIncrese}>Increase</Button>
    </div>
  );
};

export default React.memo(ComponentUsing);
