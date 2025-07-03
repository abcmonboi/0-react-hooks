"use client";

import {
  H2Typo,
  H4Typo,
  LargeTypo,
  LeadTypo,
  PTypo,
} from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React, { useRef, useState } from "react";

const DemoUseRef = () => {
  const [countdown, setCountdown] = useState(80);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

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
        <H2Typo>Demo UseRef using timer countdown</H2Typo>
        <LeadTypo>
          Problem to use: Using let varName = timerID not save ref of var.
        </LeadTypo>
        <CardContent className="text-center">
          <LargeTypo className="marker:text-red-500">
            SetRef không render lại component
          </LargeTypo>
          <H4Typo className="inline">Count</H4Typo>
          <H4Typo className="inline text-destructive"> {countdown}</H4Typo>
          <div className="mt-4">
            <Button onClick={handleCountDown} className="mr-6  hover:scale-105">
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
