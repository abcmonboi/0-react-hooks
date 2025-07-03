import React from "react";
import LessonContent from "./components/LessonContent";
import { LESSONS } from "../lesson";

const page = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const lesson = LESSONS.find((item) => {
    return item.id === +id;
  });
  if (!lesson) {
    return null;
  }
  return (
    <>
      <LessonContent lesson={lesson} />
    </>
  );
};

export default page;
