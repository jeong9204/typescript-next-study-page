import type { Lesson } from "./types";

export const nextjsLessons: Lesson[] = [
  {
    id: "nextjs-coming-soon",
    category: "nextjs",
    categoryLabel: "Next.js",
    order: 1,
    title: "Next.js 학습 준비 중",
    description:
      "Next.js 레슨은 곧 추가될 예정입니다. 우선 과목 전환 구조와 학습 화면이 같은 방식으로 동작하도록 기본 페이지를 준비했습니다.",
    concepts: ["App Router", "page.tsx", "layout.tsx"],
    exampleCode: `export default function Page() {
  return <main>Hello Next.js</main>;
}`,
    problem: {
      type: "exact",
      title: "준비 중",
      description:
        "아직 실제 문제는 추가되지 않았습니다. 다음 학습 내용이 준비되면 이 영역에 실습 문제가 표시됩니다.",
      starterCode: `// Next.js lesson coming soon`,
      answerCode: `// Next.js lesson coming soon`,
      hint: "곧 Next.js 학습을 이어갈 수 있도록 준비해둘게요.",
      explanation: "현재는 과목 전환 구조 확인을 위한 준비 페이지입니다.",
    },
  },
];
