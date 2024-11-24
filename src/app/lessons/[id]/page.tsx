import React from "react";
import LessonContent from "./components/LessonContent";
import { Lessons } from "../page";

const page = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const lesson = Lessons.find((item) => {
    return item.id === id;
  });
  return <LessonContent lesson={lesson} />;
};

export default page;
