import { BottomNavigation } from "@/components/BottomNavigation";
import { CourseNavigation } from "@/components/CourseNavigation";
import { Header } from "@/components/Header";
import { LessonPanel } from "@/components/LessonPanel";
import { PracticePanel } from "@/components/PracticePanel";
import type {
  Lesson,
  LessonNavigationItem,
  StudyCourse,
  StudyCourseSummary,
} from "@/data/lessons";
import { getStudyHref } from "@/data/lessons";

type LessonViewProps = {
  courses: StudyCourseSummary[];
  course: StudyCourse;
  lesson: Lesson;
  total: number;
  previousLesson: LessonNavigationItem | null;
  nextLesson: LessonNavigationItem | null;
};

export function LessonView({
  courses,
  course,
  lesson,
  total,
  previousLesson,
  nextLesson,
}: LessonViewProps) {
  return (
    <main className="nature-shell h-dvh overflow-hidden bg-[#f4f6f2] lg:flex lg:items-center lg:justify-center lg:p-10 xl:p-14">
      <div className="mx-auto flex h-dvh w-full max-w-5xl flex-col overflow-hidden bg-[var(--panel)] shadow-none backdrop-blur-[2px] lg:h-[min(760px,calc(100dvh-5rem))] lg:rounded-3xl lg:border lg:border-white/70 lg:shadow-app-window">
        <CourseNavigation
          courses={courses}
          activeCategory={course.id}
          currentLessonHref={getStudyHref(course.id, lesson.order)}
        />
        <Header course={course} lesson={lesson} total={total} />
        <div className="grid min-h-0 flex-1 overflow-y-auto lg:grid-cols-[41%_59%] lg:overflow-hidden">
          <div className="lg:min-h-0 lg:overflow-y-auto">
            <LessonPanel lesson={lesson} />
          </div>
          <div className="lg:min-h-0 lg:overflow-y-auto">
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
