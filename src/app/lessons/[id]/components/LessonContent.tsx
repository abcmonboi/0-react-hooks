"use client";

import React, { ReactNode, useState } from "react";
import { type Lesson } from "../../page";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LessonContent = ({ lesson }: { lesson?: Lesson }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{`Lesson${lesson?.id}: ${lesson?.label}`}</CardTitle>
        {lesson?.description && (
          <CardDescription> {lesson.description}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="grid gap-4">{lesson?.content}</CardContent>
    </Card>
  );
};

export default LessonContent;
