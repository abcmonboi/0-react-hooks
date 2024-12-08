import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { LESSONS } from "./lesson";

const page = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Đầy đủ các bài học về React</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {LESSONS.map((item) => (
          <Link key={item.id} href={`/vi/lessons/0${item.id}`}>
            <li className="hover:text-customColors-oceanBlue marker:text-red-500 italic ">
              <span>Lesson 0{item.id}: </span>
              <span className="font-semibold"> {item.label}</span>
            </li>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};

export default page;
