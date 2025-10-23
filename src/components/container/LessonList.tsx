import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import * as Typo from "@/components/typography";
import { LessonType } from "@/app/[locale]/lessons/lesson";

const LessonList = ({
  title,
  lessons,
  pathName,
}: {
  title: string;
  lessons: LessonType[];
  pathName: string;
}) => (
  <Card>
    <CardHeader className="pb-4">
      <Typo.H2Typo>Đầy đủ các bài học về {title}</Typo.H2Typo>
    </CardHeader>
    <CardContent>
      <Typo.ListTypo className="[&>li:not(:first-child)]:mt-2">
        {lessons.map((item) => (
          <li className="italic hover:text-destructive" key={item.id}>
            <Link href={`/vi/${pathName}/0${item.id}`}>
              <span>Lesson 0{item.id}: </span>
              <span className="font-semibold"> {item.label}</span>
            </Link>
          </li>
        ))}
      </Typo.ListTypo>
    </CardContent>
  </Card>
);

export default LessonList;
