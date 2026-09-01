import { notFound } from "next/navigation";
import { LessonView } from "@/components/LessonView";
import { getLesson, getLessonParams } from "@/data/lessons";

type LessonPageProps = {
  params: Promise<{
    category: string;
    lesson: string;
  }>;
};

export function generateStaticParams() {
  return getLessonParams();
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { category, lesson: lessonId } = await params;
  const lesson = getLesson(category, lessonId);

  if (!lesson) {
    notFound();
  }

  return <LessonView lesson={lesson} />;
}
