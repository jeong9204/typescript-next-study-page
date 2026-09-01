import type { Lesson } from "@/data/lessons";

type HeaderProps = {
  lesson: Lesson;
  total: number;
};

export function Header({ lesson, total }: HeaderProps) {
  const progress = Math.round((lesson.order / total) * 100);

  return (
    <header className="border-b border-slate-200/80 px-5 py-4 sm:px-7">
      <div className="flex items-start justify-between gap-5">
        <div>
          <h1 className="text-lg font-semibold tracking-normal text-slate-950 sm:text-xl">
            TypeScript Study
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            {lesson.categoryLabel} / {String(lesson.order).padStart(2, "0")}
          </p>
        </div>
        <div className="min-w-24 text-right">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-slate-400">
            진행률
          </p>
          <div className="mt-2 h-1.5 rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-slate-900"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-1 text-xs text-slate-500">{progress}%</p>
        </div>
      </div>
    </header>
  );
}
