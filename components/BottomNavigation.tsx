import Link from "next/link";
import type { Lesson, LessonNavigationItem } from "@/data/lessons";

type BottomNavigationProps = {
  lesson: Lesson;
  total: number;
  previousLesson: LessonNavigationItem | null;
  nextLesson: LessonNavigationItem | null;
};

function getLessonHref(lesson: LessonNavigationItem) {
  return `/learn/${lesson.category}/${lesson.id}`;
}

const navigationClassName =
  "rounded-lg px-3 py-2 text-sm font-medium transition focus:outline-none focus:ring-4 focus:ring-slate-200";

export function BottomNavigation({
  lesson,
  total,
  previousLesson,
  nextLesson,
}: BottomNavigationProps) {
  return (
    <nav className="border-t border-slate-200/80 px-5 py-4 sm:px-7">
      <div className="flex items-center justify-between gap-4">
        {previousLesson ? (
          <Link
            href={getLessonHref(previousLesson)}
            className={`${navigationClassName} text-slate-600 hover:bg-slate-100`}
          >
            ← 이전
          </Link>
        ) : (
          <span
            aria-disabled="true"
            className={`${navigationClassName} cursor-not-allowed text-slate-300`}
          >
            ← 이전
          </span>
        )}

        <p className="text-sm font-medium text-slate-500">
          {String(lesson.order).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>

        {nextLesson ? (
          <Link
            href={getLessonHref(nextLesson)}
            className={`${navigationClassName} text-slate-900 hover:bg-slate-100`}
          >
            다음 →
          </Link>
        ) : (
          <span
            aria-disabled="true"
            className={`${navigationClassName} cursor-not-allowed text-slate-300`}
          >
            다음 →
          </span>
        )}
      </div>
    </nav>
  );
}
