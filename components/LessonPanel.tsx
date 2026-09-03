import type { Lesson } from "@/data/lessons";

type LessonPanelProps = {
  lesson: Lesson;
};

export function LessonPanel({ lesson }: LessonPanelProps) {
  return (
    <section className="px-5 py-6 sm:px-7 lg:border-r lg:border-slate-200/80">
      <p className="text-sm font-medium text-blue-700">오늘의 개념</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-normal text-slate-950">
        {lesson.title}
      </h2>
      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        {lesson.description}
      </p>

      <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
        {lesson.concepts.map((concept) => (
          <li key={concept} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
            <span>{concept}</span>
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

      {lesson.conceptExampleCode ? (
        <div className="mt-6">
          <p className="mb-2 text-sm font-medium text-slate-800">비교 코드</p>
          <pre className="code-scroll overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm leading-6 text-slate-100 shadow-inner">
            <code>{lesson.conceptExampleCode}</code>
          </pre>
        </div>
      ) : null}

      {lesson.learningNotes ? (
        <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-600">
          {lesson.learningNotes.map((note) => (
            <li key={note} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {lesson.comparisonItems ? (
        <div className="mt-5 space-y-2 rounded-lg border border-slate-200 bg-slate-50 p-3">
          {lesson.comparisonItems.map((item) => (
            <div key={item.label} className="flex items-start gap-3 text-sm leading-6">
              <span className="min-w-14 font-mono font-semibold text-slate-900">
                {item.label}
              </span>
              <span className="text-slate-400">→</span>
              <span className="text-slate-600">{item.description}</span>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
