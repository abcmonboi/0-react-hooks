import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { LESSONS } from "./lesson";
import { H2Typo, ListTypo } from "@/components/typography";

const page = () => {
  return (
    <Card>
      <CardHeader>
        <H2Typo>Đầy đủ các bài học về React</H2Typo>
      </CardHeader>
      <CardContent>
        <ListTypo>
          {LESSONS.map((item) => (
            <Link
              className="italic hover:text-destructive"
              key={item.id}
              href={`/vi/lessons/0${item.id}`}
            >
              <li className="mb-2">
                <span>Lesson 0{item.id}: </span>
                <span className="font-semibold"> {item.label}</span>
              </li>
            </Link>
          ))}
        </ListTypo>
      </CardContent>
    </Card>
  );
};

export default page;
