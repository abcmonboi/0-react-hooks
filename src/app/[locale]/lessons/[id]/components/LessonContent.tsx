"use client";
import ReactDOM, { createRoot } from "react-dom/client";
import React, { useEffect } from "react";
import * as Lesson from "../../lesson";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LessonContent = ({ lesson }: { lesson?: Lesson.Lesson }) => {
  // useEffect(() => {
  //   var rootDOM = document.getElementById(`id-${lesson?.id}`);
  //   var ulDOM = document.createElement("ul");
  //   ulDOM.className = "list-disc";
  //   var liDOM = document.createElement("li");
  //   liDOM.innerText = "Javascript";
  //   var liDOM2 = document.createElement("li");
  //   liDOM2.innerText = "ReactJS";
  //   ulDOM.append(liDOM, liDOM2);
  //   rootDOM?.appendChild(ulDOM);

  //   const root = createRoot(document.getElementById(`content-${lesson?.id}`));
  //   root.render(
  //     React.createElement(
  //       "ul",
  //       {},
  //       React.createElement("li", {}, "hihihi"),
  //       React.createElement("li", {}, "hhahahahha")
  //     )
  //   );
  //   root.render(
  //     <ul>
  //       <li>React</li>
  //       <li>JSSSSSSSSSSSSSSSSSSS</li>
  //     </ul>
  //   );
  // }, []);
  return (
    <Card className="list-disc" id={`id-${lesson?.id}`}>
      <CardHeader>
        <CardTitle>{`Lesson ${lesson?.id}: ${lesson?.label}`}</CardTitle>
        {lesson?.description && (
          <CardDescription> {lesson.description}</CardDescription>
        )}
      </CardHeader>
      <CardContent id={`content-${lesson?.id}`} className="grid gap-4">
        {lesson?.content}
      </CardContent>
    </Card>
  );
};

export default LessonContent;
