"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { H2Typo, LeadTypo } from "@/components/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { LessonType } from "@/app/[locale]/lessons/lesson";

const LessonContent = ({
  lesson,
  total,
}: {
  lesson: LessonType;
  total: number;
}) => (
  <>
    <div className="mb-4 flex justify-between w-full rounded-xl">
      {lesson?.id > 1 ? (
        <Link href={`/lessons/${lesson.id - 1}`}>
          <Button variant="secondary">
            <ArrowLeft />
          </Button>
        </Link>
      ) : (
        <Button disabled variant="secondary">
          <ArrowLeft />
        </Button>
      )}
      {lesson?.id !== total && (
        <Link href={`/lessons/${+lesson.id + 1}`}>
          <Button variant={"secondary"}>
            <ArrowRight />
          </Button>
        </Link>
      )}
    </div>

    <Card className="list-disc" id={`id-${lesson.id}`}>
      <CardHeader className="pb-3">
        <H2Typo>{`Lesson ${lesson?.id}: ${lesson?.label}`}</H2Typo>
        {lesson?.description && <LeadTypo> {lesson.description}</LeadTypo>}
      </CardHeader>
      <CardContent id={`content-${lesson?.id}`}>{lesson?.content}</CardContent>
    </Card>
  </>
);

export default LessonContent;
