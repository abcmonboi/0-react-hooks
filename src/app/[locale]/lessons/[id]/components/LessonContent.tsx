"use client";
import React from "react";
import * as Lesson from "../../lesson";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { H2Typo, LeadTypo } from "@/components/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const LessonContent = ({ lesson }: { lesson: Lesson.Lesson }) => {
  return (
    <>
      <div className="mb-4 flex justify-between w-full rounded-xl">
        {lesson?.id > 1 && (
          <Link href={`/lessons/${+lesson.id - 1}`}>
            <Button variant={"secondary"}>
              <ArrowLeft />
            </Button>
          </Link>
        )}
        {lesson?.id !== Lesson.LESSONS.length && (
          <Link href={`/lessons/${+lesson.id + 1}`}>
            <Button variant={"secondary"}>
              <ArrowRight />
            </Button>
          </Link>
        )}
      </div>

      <Card className="list-disc" id={`id-${lesson.id}`}>
        <CardHeader>
          <H2Typo>{`Lesson ${lesson?.id}: ${lesson?.label}`}</H2Typo>
          {lesson?.description && <LeadTypo> {lesson.description}</LeadTypo>}
        </CardHeader>
        <CardContent id={`content-${lesson?.id}`}>
          {lesson?.content}
        </CardContent>
      </Card>
    </>
  );
};

export default LessonContent;
