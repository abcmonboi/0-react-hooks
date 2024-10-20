"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const MoutedExample = () => {
  const [mounted, setMouted] = useState<boolean>(false);

  return (
    <Card className="min-h-[50vh]">
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

function Mounting({ ...props }) {
  useEffect(() => {
    document.title = "Component Mounted";
    return () => {
      document.title = "Component Unmounted";
    };
  }, []);

  console.log(props);

  return (
    <>
      <h3>Look at Dom Title</h3>
      <span className="text-center">
        Component just console props mouted:true.Cause when props === false
        component unmounted
      </span>
      <Avatar className="size-96">
        <AvatarImage
          src="https://down-vn.img.susercontent.com/file/sg-11134201-7rdyn-lxl07slku5xi6e.webp"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </>
  );
}

export default MoutedExample;
