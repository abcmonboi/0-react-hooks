"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const MoutedExample = () => {
  const [mounted, setMouted] = useState<boolean>(false);

  return (
    <Card
      className={`transition-all ease-in-out duration-300 overflow-hidden ${
        mounted
          ? "min-h-[60vh] h-[50vh] bg-lime-200 border-4 border-white rounded-full"
          : "min-h-[12vh] h-[15vh]"
      }`}
    >
      <CardHeader>
        <CardTitle>Practice To Understand Mounted/Unmounted</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <Button
          className="h-14 text-2xl px-8 bg-customColors-oceanBlue mb-8"
          onClick={() => setMouted(!mounted)}
          size={"sm"}
        >
          Toggle
        </Button>
        {mounted && <Mounting mounted={mounted} />}
      </CardContent>
    </Card>
  );
};

function Mounting({ mounted }: { mounted: boolean }) {
  useEffect(() => {
    document.title = "Component Mounted";
    return () => {
      document.title = "Component Unmounted";
    };
  }, []);

  return (
    <>
      <h3>Look at Dom Title</h3>
      <span className="text-center">
        Component just console props mouted:true.Cause when props === false
        component unmounted
      </span>
      <Avatar
        className={`size-[30rem]
        }`}
      >
        <AvatarImage
          width={1920}
          height={1080}
          src="/images/goku.jpg"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </>
  );
}

export default MoutedExample;
