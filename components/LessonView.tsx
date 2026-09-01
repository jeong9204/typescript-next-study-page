import { BottomNavigation } from "@/components/BottomNavigation";
import { Header } from "@/components/Header";
import { LessonPanel } from "@/components/LessonPanel";
import { PracticePanel } from "@/components/PracticePanel";
import type { Lesson, LessonNavigationItem } from "@/data/lessons";

type LessonViewProps = {
  lesson: Lesson;
  total: number;
  previousLesson: LessonNavigationItem | null;
  nextLesson: LessonNavigationItem | null;
};

export function LessonView({
  lesson,
  total,
  previousLesson,
  nextLesson,
}: LessonViewProps) {
  return (
    <main className="nature-shell min-h-screen bg-[#f4f6f2] lg:flex lg:items-center lg:justify-center lg:p-10 xl:p-14">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col bg-[var(--panel)] shadow-none backdrop-blur-[2px] lg:min-h-0 lg:max-h-[calc(100vh-4rem)] lg:overflow-hidden lg:rounded-3xl lg:border lg:border-white/70 lg:shadow-app-window">
        <Header lesson={lesson} total={total} />
        <div className="grid flex-1 lg:grid-cols-[41%_59%] lg:overflow-hidden">
          <div className="lg:overflow-y-auto">
            <LessonPanel lesson={lesson} />
          </div>
          <div className="lg:overflow-y-auto">
            <PracticePanel key={lesson.id} lesson={lesson} />
          </div>
        </div>
        <BottomNavigation
          lesson={lesson}
          total={total}
          previousLesson={previousLesson}
          nextLesson={nextLesson}
        />
      </div>
    </main>
  );
}
