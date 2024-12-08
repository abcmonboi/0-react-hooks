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
