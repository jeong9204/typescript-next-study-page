import type { Lesson } from "./types";

export const typescriptLessons: Lesson[] = [
  {
    id: "ts-object-type-error",
    category: "typescript",
    categoryLabel: "TypeScript",
    order: 1,
    title: "객체의 타입 오류 이해하기",
    description:
      "TypeScript에서는 객체의 각 속성이 선언된 타입과 일치하는지 검사합니다. number로 선언된 속성에는 문자열을 넣을 수 없습니다.",
    concepts: ["객체 타입", "string", "number", "타입 검사"],
    exampleCode: `interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "yeji",
  age: 35,
};`,
    problem: {
      type: "type-check",
      title: "age의 타입 오류 수정하기",
      description:
        "아래 코드에서 TypeScript 타입 오류가 발생하는 이유를 찾아 수정해주세요.",
      starterCode: `interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "sumin",
  age: "35",
};`,
      answerCode: `interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "sumin",
  age: 35,
};`,
      hint:
        "User 인터페이스에서 age가 어떤 타입으로 선언되어 있는지 확인해보세요.",
      explanation:
        "age는 number 타입으로 선언되어 있습니다. 따라서 문자열인 \"35\"를 넣으면 타입 오류가 발생하고, 숫자인 35를 사용해야 합니다.",
    },
  },
  {
    id: "ts-optional-property",
    category: "typescript",
    categoryLabel: "TypeScript",
    order: 2,
    title: "선택적 속성과 속성 타입",
    description:
      "객체의 모든 속성이 반드시 필요한 것은 아닙니다. ?를 사용하면 선택적 속성을 만들 수 있지만, 해당 속성을 사용할 경우에는 선언된 타입을 지켜야 합니다.",
    concepts: ["optional property", "선택적 속성", "객체 타입", "타입 불일치"],
    exampleCode: `interface User {
  name: string;
  age: number;
  nickname?: string;
}

const user1: User = {
  name: "yeji",
  age: 35,
};

const user2: User = {
  name: "sumin",
  age: 35,
  nickname: "sum",
};`,
    problem: {
      type: "type-check",
      title: "nickname의 타입 오류 찾기",
      description:
        "nickname은 선택적 속성입니다. 아래 객체에서 발생하는 타입 오류를 수정해주세요.",
      starterCode: `interface User {
  name: string;
  age: number;
  nickname?: string;
}

const user: User = {
  name: "yeji",
  age: 35,
  nickname: 1234444,
};`,
      answerCode: `interface User {
  name: string;
  age: number;
  nickname?: string;
}

const user: User = {
  name: "yeji",
  age: 35,
  nickname: "1234444",
};`,
      hint:
        "선택적 속성이라는 것은 없어도 된다는 뜻입니다. 값이 있다면 타입까지 자유로운 것은 아닙니다.",
      explanation:
        "nickname 뒤의 ?는 nickname을 생략할 수 있다는 뜻입니다. 하지만 nickname을 작성한다면 선언된 string 타입을 따라야 합니다. 따라서 number인 1234444는 사용할 수 없습니다.",
    },
  },
  {
    id: "ts-interface-extends",
    category: "typescript",
    categoryLabel: "TypeScript",
    order: 3,
    title: "interface를 상속해서 확장하기",
    description:
      "extends를 사용하면 기존 interface가 가진 속성을 물려받아 새로운 interface를 만들 수 있습니다. 공통 속성을 반복해서 선언하지 않아도 됩니다.",
    concepts: ["interface", "extends", "인터페이스 상속", "타입 확장"],
    exampleCode: `interface User {
  name: string;
  age: number;
}

interface Developer extends User {
  language: string;
  isFrontend: boolean;
}

const developer: Developer = {
  name: "yeji",
  age: 35,
  language: "react",
  isFrontend: true,
};`,
    problem: {
      type: "type-check",
      title: "Developer 객체 완성하기",
      description:
        "Developer는 User를 상속받고 있습니다. Developer 타입에 맞도록 객체를 완성해주세요.",
      starterCode: `interface User {
  name: string;
  age: number;
}

interface Developer extends User {
  language: string;
  isFrontend: boolean;
}

const developer: Developer = {
  name: "yeji",
  age: 35,
};`,
      answerCode: `interface User {
  name: string;
  age: number;
}

interface Developer extends User {
  language: string;
  isFrontend: boolean;
}

const developer: Developer = {
  name: "yeji",
  age: 35,
  language: "react",
  isFrontend: true,
};`,
      hint:
        "Developer가 User에게서 받은 속성 외에 직접 선언하고 있는 속성도 확인해보세요.",
      explanation:
        "Developer extends User이므로 Developer는 name과 age를 자동으로 물려받습니다. 여기에 Developer가 직접 선언한 language와 isFrontend도 모두 필요합니다.",
    },
  },
  {
    id: "ts-function-parameters",
    category: "typescript",
    categoryLabel: "TypeScript",
    order: 4,
    title: "함수의 매개변수에 타입 지정하기",
    description:
      "TypeScript에서는 함수의 매개변수에도 타입을 지정할 수 있습니다. 매개변수에 타입을 지정하면 함수를 호출할 때 잘못된 타입의 값이 전달되는 것을 미리 확인할 수 있습니다.",
    concepts: ["function", "parameter", "매개변수 타입", "타입 검사"],
    exampleCode: `function add(a: number, b: number): number {
  return a + b;
}

add(10, 20);`,
    problem: {
      type: "type-check",
      title: "잘못 전달된 인수 찾기",
      description:
        "add 함수는 두 개의 number 타입 매개변수를 받습니다. 아래 코드에서 발생하는 타입 오류를 수정해주세요.",
      starterCode: `function add(a: number, b: number): number {
  return a + b;
}

add(10, "20");`,
      answerCode: `function add(a: number, b: number): number {
  return a + b;
}

add(10, 20);`,
      hint:
        "add 함수의 두 번째 매개변수 b가 어떤 타입으로 선언되어 있는지 확인해보세요.",
      explanation:
        "b는 number 타입으로 선언되어 있기 때문에 문자열 \"20\"이나 '20'을 전달할 수 없습니다. 따옴표가 붙은 값은 string이고, 숫자 20은 number입니다.",
      errorExample:
        "'string' 형식의 인수는 'number' 형식의 매개 변수에 할당될 수 없습니다.",
    },
  },
  {
    id: "ts-function-return-type",
    category: "typescript",
    categoryLabel: "TypeScript",
    order: 5,
    title: "함수의 반환 타입 이해하기",
    description:
      "함수의 괄호 뒤에 타입을 작성하면 함수가 어떤 타입의 값을 반환해야 하는지 지정할 수 있습니다.",
    concepts: ["return", "return type", "함수 반환 타입"],
    exampleCode: `function add(a: number, b: number): number {
  return a + b;
}`,
    problem: {
      type: "type-check",
      title: "반환 타입에 맞는 값 반환하기",
      description:
        "아래 함수는 number를 반환하도록 선언되어 있습니다. 타입 오류가 발생하지 않도록 수정해주세요.",
      starterCode: `function add(a: number, b: number): number {
  return "30";
}`,
      answerCode: `function add(a: number, b: number): number {
  return 30;
}`,
      hint:
        "함수 선언에서 마지막 : number가 무엇을 의미하는지 확인해보세요.",
      explanation:
        "함수 뒤의 : number는 이 함수가 number 타입의 값을 반환해야 한다는 뜻입니다. 따라서 문자열 \"30\"을 반환하면 오류가 발생합니다.",
      errorExample: "'string' 형식은 'number' 형식에 할당할 수 없습니다.",
    },
  },
  {
    id: "ts-function-void",
    category: "typescript",
    categoryLabel: "TypeScript",
    order: 6,
    title: "값을 반환하지 않는 함수와 void",
    description:
      "void는 함수가 의미 있는 값을 반환하지 않는다는 것을 나타낼 때 사용합니다. console.log처럼 어떤 작업만 수행하고 결과값을 돌려줄 필요가 없는 함수에서 자주 사용합니다.",
    concepts: ["void", "return", "함수 반환 타입"],
    exampleCode: `function printMessage(message: string): void {
  console.log(message);
}

printMessage("hello");`,
    problem: {
      type: "type-check",
      title: "void 함수의 오류 수정하기",
      description:
        "아래 함수는 void 반환 타입으로 선언되어 있습니다. 타입 오류가 발생하는 부분을 수정해주세요.",
      starterCode: `function printMessage2(message: string): void {
  console.log(message);

  return "hello";
}`,
      answerCode: `function printMessage2(message: string): void {
  console.log(message);
}`,
      hint:
        "void는 이 함수가 어떤 값을 반환한다는 뜻일까요, 반환하지 않는다는 뜻일까요?",
      explanation:
        "void로 선언된 함수에서는 string이나 number 같은 값을 반환하면 안 됩니다. 이 함수는 console.log를 실행하는 것이 목적이므로 \"hello\"를 return할 필요가 없습니다.",
      errorExample: "'string' 형식은 'void' 형식에 할당할 수 없습니다.",
    },
  }
];
