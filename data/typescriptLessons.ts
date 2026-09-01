export type TypeScriptLesson = {
  id: number;
  total: number;
  track: string;
  title: string;
  eyebrow: string;
  conceptTitle: string;
  description: string;
  bullets: string[];
  exampleCode: string;
  problemTitle: string;
  problemDescription: string;
  starterCode: string;
  answerCode: string;
  hint: string;
  explanation: string;
};

export const typescriptLessons: TypeScriptLesson[] = [
  {
    id: 3,
    total: 12,
    track: "Interface",
    title: "TypeScript Study",
    eyebrow: "Interface / 03",
    conceptTitle: "오늘의 개념",
    description:
      "interface는 객체가 가져야 하는 속성과 타입을 미리 약속하는 TypeScript 문법입니다. 객체를 만들 때 약속한 타입과 다른 값이 들어오면 컴파일 단계에서 오류를 발견할 수 있습니다.",
    bullets: [
      "객체의 형태를 이름으로 정의합니다.",
      "속성마다 허용되는 타입을 명확히 적습니다.",
      "코드를 실행하기 전에 잘못된 데이터 구조를 빠르게 찾습니다.",
    ],
    exampleCode: `interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "yeji",
  age: 35,
};`,
    problemTitle: "직접 풀어보기",
    problemDescription:
      "아래 코드에서 User interface는 age를 number로 요구합니다. 현재 코드의 타입 오류를 수정해보세요.",
    starterCode: `interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "yeji",
  age: "35",
};`,
    answerCode: `interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "yeji",
  age: 35,
};`,
    hint: "따옴표로 감싼 숫자는 string입니다. age에는 숫자 값이 들어가야 합니다.",
    explanation:
      "age의 타입은 number로 정의되어 있으므로 문자열 \"35\"가 아니라 숫자 35를 넣어야 합니다. interface는 이런 불일치를 미리 알려주는 역할을 합니다.",
  },
];
