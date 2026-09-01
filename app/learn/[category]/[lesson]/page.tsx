import { notFound } from "next/navigation";
import { LessonView } from "@/components/LessonView";
import { getLessonPageData, getLessonParams } from "@/data/lessons";

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
  const { category, lesson } = await params;
  const lessonPageData = getLessonPageData(category, lesson);

  if (!lessonPageData) {
    notFound();
  }

  return <LessonView {...lessonPageData} />;
}
