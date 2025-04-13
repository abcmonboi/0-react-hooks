"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

const MagicTransisition = ({ stateLess = false }: { stateLess?: boolean }) => {
  const [isClicked, setIsClicked] = React.useState(false);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Magic Transisition - Sự kỳ diệu của transition</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <pre>
              {`div1:hover {
border-radius: 50%;
}`}
            </pre>
            <pre>
              {`div2:hover {
border-radius: 50%;
transition: 0.6s ease-in-out;
}`}
            </pre>
          </div>
          <div className="bg-slate-900 p-14 rounded-3xl flex justify-between">
            <div
              className="size-96 bg-red-400 border border-gray-300 hover:rounded-[50%]
           flex items-center justify-center text-white"
            >
              <pre className="block text-center font-semibold">
                {`NO TRANSITION
hover:rounded-[50%]
`}
              </pre>
            </div>
            {stateLess ? (
              <div
                className="size-96  bg-green-400 border hover:border-4 border-gray-300 hover:border-white hover:rounded-[50%]
                  transition-[border-radius border] ease-in-out duration-300 flex items-center justify-center  text-white"
              >
                <pre className="block text-center font-semibold">
                  {`transition-[border-radius]
       hover:ease-in-out
       duration-300`}
                </pre>
              </div>
            ) : (
              <button
                onClick={() => setIsClicked(!isClicked)}
                className={cn(
                  "size-96 bg-green-400 border",
                  " border-gray-300 hover:border-white",
                  isClicked ? "rounded-[50%] border-4" : " size-[30rem]",
                  "transition-[border-radius border] ease-in-out duration-300 flex items-center justify-center  text-white"
                )}
              >
                <pre className="block text-center font-semibold">
                  {`transition-[border-radius]
     hover:ease-in-out
     duration-300`}
                </pre>
              </button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MagicTransisition;
