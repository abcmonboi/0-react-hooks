"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect, useLayoutEffect, useState } from "react";

const PageDemo = () => {
  return (
    <div className="grid gap-4">
      <DemoWithUseEffect />
      <DemoWithUseLayoutEffect />
    </div>
  );
};
function DemoWithUseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count === 3) {
      setCount(0);
    }
  }, [count]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          UI Render before callBack useEffect (bị nháy khi update state lên 3 về
          0)
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <Button onClick={() => setCount((prev) => prev + 1)}>Increase</Button>
        <h1>Count: {count} </h1>
      </CardContent>
    </Card>
  );
}

function DemoWithUseLayoutEffect() {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    if (count === 3) setCount(0);
  }, [count]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>UI Render after callBack useLayoutEffect</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <Button onClick={() => setCount((prev) => prev + 1)}>Increase</Button>
        <h1>Count: {count} </h1>
      </CardContent>
    </Card>
  );
}

export default PageDemo;
