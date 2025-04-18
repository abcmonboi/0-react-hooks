"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useRef, useState } from "react";

const DemoUseRef = () => {
  const [countdown, setCountdown] = useState(80);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const ref = useRef(90);

  const handleCountDown = () => {
    timerRef.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
  };

  const handleStop = () => {
    if (!timerRef.current) return;
    clearInterval(timerRef.current);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Demo UseRef using timer countdown</CardTitle>
        <CardDescription>
          Problem to use: Using let varName = timerID not save ref of var.
        </CardDescription>
        <CardContent className="text-center">
          <li className="marker:text-red-500">
            SetRef không render lại component
          </li>
          <h5 className="inline">Count</h5>
          <h5 className="inline"> {countdown}</h5>
          <div className="mt-4">
            <Button
              ref={buttonRef}
              onClick={handleCountDown}
              className="mr-8 hover:scale-105"
            >
              Start
            </Button>
            <Button className="hover:scale-105" onClick={handleStop}>
              Stop
            </Button>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default DemoUseRef;
