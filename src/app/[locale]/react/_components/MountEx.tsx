"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  BlockquoteTypo,
  H3Typo,
  LargeTypo,
  LeadTypo,
  PTypo,
} from "@/components/typography";
import { cn } from "@/lib/utils";

const MouteEx = () => {
  const [mounted, setMouted] = useState<boolean>(false);

  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center gap-4 m-auto ",
        // transition smooth
        "transition-all ease-in-out duration-300",
        // border
        "border-4",
        // hiding over flow
        "overflow-hidden",
        // mount
        mounted
          ? "min-h-[60vh] h-[60vh] w-[60vh] border-[0.5rem] border-sky-500"
          : "min-h-[20vh] h-[20vh] w-[20vh] rounded-full border-primary"
      )}
    >
      <PTypo>Practice</PTypo>
      <CardContent className="flex flex-col items-center gap-4">
        {mounted && <Mounting />}
        <Button
          className={cn(mounted && "bg-sky-500")}
          onClick={() => setMouted(!mounted)}
        >
          {mounted ? "Unmount" : "Mount"}
        </Button>
      </CardContent>
    </div>
  );
};

function Mounting() {
  useEffect(() => {
    document.title = "Mounted";
    return () => {
      document.title = "Unmounted";
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-center gap-4">
      <LargeTypo>Look at Dom Title</LargeTypo>
      <LeadTypo>
        Component just console props mouted:true. Cause when props === false
        component unmounted
      </LeadTypo>
      <Avatar className="size-[10rem]">
        <AvatarImage
          width={1920}
          height={1080}
          src="/images/goku.jpg"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default MouteEx;
