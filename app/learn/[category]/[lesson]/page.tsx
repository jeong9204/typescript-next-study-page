import { notFound, redirect } from "next/navigation";
import { getLessonPageData, getStudyHref } from "@/data/lessons";

type LegacyLessonPageProps = {
  params: Promise<{
    category: string;
    lesson: string;
  }>;
};

export default async function LegacyLessonPage({ params }: LegacyLessonPageProps) {
  const { category, lesson } = await params;
  const lessonPageData = getLessonPageData(category, lesson);

  if (!lessonPageData) {
    notFound();
  }

  redirect(getStudyHref(lessonPageData.course.id, lessonPageData.lesson.order));
}
