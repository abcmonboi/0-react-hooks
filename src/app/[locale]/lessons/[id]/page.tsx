import { LESSONS } from "@/app/[locale]/lessons/lesson";
import LessonContent from "@/components/container/LessonContent";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const lesson = LESSONS.find((item) => {
    return item.id === +id;
  });
  if (!lesson) {
    return null;
  }

  return (
    <LessonContent
      pathName="lessons"
      lesson={lesson}
      total={LESSONS.length ?? 0}
    />
  );
};

export default page;
