import { LESSONS } from "@/app/[locale]/lessons/lesson";
import LessonList from "@/components/container/LessonList";

const page = () => (
  <LessonList pathName="lessons" lessons={LESSONS} title="React" />
);

export default page;
