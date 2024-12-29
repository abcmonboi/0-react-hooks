import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const TextCss = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>TextCss </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <pre>
              {`WebkitBackgroundClip: "text",
WebkitTextFillColor: "transparent",
}`}
            </pre>
          </div>
          <div
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "900px 400px",
              backgroundRepeat: "no-repeat",
            }}
            className=" p-28 rounded-3xl leading-[100%] text-[25rem] font-bold text-center text-white bg-[url('/images/goku.jpg')] bg-cover bg-center tracking-[2rem]
        drop-shadow-2xl "
          >
            GOKU
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TextCss;
