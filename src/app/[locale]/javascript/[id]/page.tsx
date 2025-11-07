import { LESSONS_JS } from "@/app/[locale]/javascript/lesson_js";
import LessonContent from "@/components/container/LessonContent";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const lesson = LESSONS_JS.find((item) => {
    return item.id === +id;
  });
  if (!lesson) {
    return null;
  }
  return (
    <LessonContent
      lesson={lesson}
      total={LESSONS_JS.length ?? 0}
      pathName="javascript"
    />
  );
};

export default page;
