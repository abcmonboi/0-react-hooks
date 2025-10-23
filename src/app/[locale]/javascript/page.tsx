import { LESSONS_JS } from "@/app/[locale]/javascript/lesson_js";
import LessonList from "@/components/container/LessonList";

const JavascriptPage = () => (
  <LessonList pathName="javascript" lessons={LESSONS_JS} title="Javascript" />
);

export default JavascriptPage;
