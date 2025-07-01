import { H2Typo } from "@/components/typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

const TextCss = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <H2Typo> TextCss</H2Typo>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <pre>
              {`WebkitBackgroundClip: "text",
WebkitTextFillColor: "transparent",
}`}
            </pre>
          </div>
          <div className="bg-secondary p-6 rounded-3xl flex justify-center">
            <div
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "900px 400px",
                backgroundRepeat: "no-repeat",
              }}
              className={cn(
                "p-28 rounded-3xl leading-[100%]",
                "text-[12rem] font-bold text-center text-white",
                "bg-[url('/images/goku.jpg')] bg-cover bg-center tracking-[2rem]",
                "drop-shadow-2xl "
              )}
            >
              ABBOY
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TextCss;
