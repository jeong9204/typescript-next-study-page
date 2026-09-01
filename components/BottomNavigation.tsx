import type { Lesson } from "@/data/lessons";

type BottomNavigationProps = {
  lesson: Lesson;
};

export function BottomNavigation({ lesson }: BottomNavigationProps) {
  return (
    <nav className="border-t border-slate-200/80 px-5 py-4 sm:px-7">
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-slate-200"
        >
          ← 이전
        </button>
        <p className="text-sm font-medium text-slate-500">
          {String(lesson.order).padStart(2, "0")} / {String(lesson.total).padStart(2, "0")}
        </p>
        <button
          type="button"
          className="rounded-lg px-3 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-slate-200"
        >
          다음 →
        </button>
      </div>
    </nav>
  );
}
