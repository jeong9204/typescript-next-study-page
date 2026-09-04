import { notFound, redirect } from "next/navigation";
import { LessonView } from "@/components/LessonView";
import {
  formatLessonOrder,
  getCourseSummaries,
  getLessonPageData,
  getLessonParams,
  getStudyHref,
} from "@/data/lessons";

type StudyLessonPageProps = {
  params: Promise<{
    category: string;
    lesson: string;
  }>;
};

export function generateStaticParams() {
  return getLessonParams();
}

export default async function StudyLessonPage({ params }: StudyLessonPageProps) {
  const { category, lesson } = await params;
  const lessonPageData = getLessonPageData(category, lesson);

  if (!lessonPageData) {
    notFound();
  }

  const canonicalLesson = formatLessonOrder(lessonPageData.lesson.order);

  if (lesson !== canonicalLesson) {
    redirect(getStudyHref(lessonPageData.course.id, lessonPageData.lesson.order));
  }

  return <LessonView {...lessonPageData} courses={getCourseSummaries()} />;
}
