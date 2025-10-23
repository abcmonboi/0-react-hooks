import { LESSONS } from "@/app/[locale]/lessons/lesson";
import LessonContent from "@/components/container/LessonContent";
import React from "react";

const page = ({ params: { id } }: { params: { id: string } }) => {
  const lesson = LESSONS.find((item) => {
    return item.id === +id;
  });
  if (!lesson) {
    return null;
  }
  return <LessonContent lesson={lesson} total={LESSONS.length ?? 0} />;
};

export default page;
