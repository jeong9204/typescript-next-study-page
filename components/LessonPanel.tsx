import type { TypeScriptLesson } from "@/data/typescriptLessons";

type LessonPanelProps = {
  lesson: TypeScriptLesson;
};

export function LessonPanel({ lesson }: LessonPanelProps) {
  return (
    <section className="px-5 py-6 sm:px-7 lg:border-r lg:border-slate-200/80">
      <p className="text-sm font-medium text-blue-700">{lesson.conceptTitle}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-normal text-slate-950">
        interface로 객체의 모양 정하기
      </h2>
      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        {lesson.description}
      </p>

      <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
        {lesson.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-sm font-medium text-slate-800">예제 코드</p>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-500">
            read only
          </span>
        </div>
        <pre className="code-scroll overflow-x-auto rounded-lg bg-[var(--code-bg)] p-4 text-sm leading-6 text-[var(--code-fg)] shadow-inner">
          <code>{lesson.exampleCode}</code>
        </pre>
      </div>
    </section>
  );
}
