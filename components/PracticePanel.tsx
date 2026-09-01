"use client";

import { useMemo, useState } from "react";
import type { Lesson } from "@/data/lessons";
import { gradeLessonAnswer } from "@/lib/gradeLessonAnswer";

type PracticePanelProps = {
  lesson: Lesson;
};

export function PracticePanel({ lesson }: PracticePanelProps) {
  const [code, setCode] = useState(lesson.problem.starterCode);
  const [showHint, setShowHint] = useState(false);
  const [checked, setChecked] = useState(false);

  const isCorrect = useMemo(
    () => gradeLessonAnswer(code, lesson.problem),
    [code, lesson.problem],
  );

  return (
    <section className="border-t border-slate-200/80 px-5 py-6 sm:px-7 lg:border-t-0">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium text-emerald-700">
            직접 풀어보기
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-normal text-slate-950">
            {lesson.problem.title}
          </h2>
        </div>
        <span className="w-fit rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500">
          {lesson.problem.type === "type-check" ? "Type Check" : "Exact Match"}
        </span>
      </div>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        {lesson.problem.description}
      </p>

      <label htmlFor="code-editor" className="mt-6 block text-sm font-medium text-slate-800">
        코드 입력
      </label>
      <textarea
        id="code-editor"
        value={code}
        onChange={(event) => {
          setCode(event.target.value);
          setChecked(false);
        }}
        spellCheck={false}
        className="code-scroll mt-2 h-72 w-full resize-none rounded-lg border border-slate-700 bg-[var(--code-bg)] p-4 font-mono text-sm leading-6 text-[var(--code-fg)] shadow-inner outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
      />

      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={() => setShowHint((value) => !value)}
          className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
        >
          힌트 보기
        </button>
        <button
          type="button"
          onClick={() => setChecked(true)}
          className="rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300"
        >
          정답 확인
        </button>
      </div>

      {showHint ? (
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900">
          {lesson.problem.hint}
        </div>
      ) : null}

      {checked ? (
        <div
          className={`mt-4 rounded-lg border px-4 py-4 text-sm leading-6 ${
            isCorrect
              ? "border-emerald-200 bg-emerald-50 text-emerald-950"
              : "border-rose-200 bg-rose-50 text-rose-950"
          }`}
        >
          <p className="font-semibold">
            {isCorrect ? "좋아요. 타입 오류가 해결되었습니다." : "아직 오류가 남아 있습니다."}
          </p>
          <p className="mt-2">{lesson.problem.explanation}</p>
        </div>
      ) : (
        <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-6 text-slate-500">
          정답 확인 버튼을 누르면 결과와 해설이 여기에 표시됩니다.
        </div>
      )}
    </section>
  );
}
