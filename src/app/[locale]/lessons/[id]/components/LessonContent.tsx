"use client";

import React, { useEffect, useLayoutEffect } from "react";
import * as Lesson from "../../lesson";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LessonContent = ({ lesson }: { lesson?: Lesson.Lesson }) => {
  const arr = [6900100, 15, 200000] as const;
  console.log(Lesson.disCount15Percent(...arr));
  const h1 = document.createElement("h3");
  useLayoutEffect(() => {
    h1.innerHTML = "Tạo thẻ h1 bằng dom.createElement()";
    h1.className = "text-red-500";
    document.getElementById(`id-${lesson?.id}`)?.append(h1);
  }, [h1]);

  return (
    <Card id={`id-${lesson?.id}`}>
      <CardHeader>
        <CardTitle>{`Lesson ${lesson?.id}: ${lesson?.label}`}</CardTitle>
        {lesson?.description && (
          <CardDescription> {lesson.description}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="grid gap-4">{lesson?.content}</CardContent>
    </Card>
  );
};

export default LessonContent;
