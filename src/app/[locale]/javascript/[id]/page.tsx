import { LESSONS_JS } from "@/app/[locale]/javascript/lesson_js";
import LessonContent from "@/components/container/LessonContent";
import React from "react";

const page = ({ params: { id } }: { params: { id: string } }) => {
  const lesson = LESSONS_JS.find((item) => {
    return item.id === +id;
  });
  if (!lesson) {
    return null;
  }
  return <LessonContent lesson={lesson} total={LESSONS_JS.length ?? 0} />;
};

export default page;
