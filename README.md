# TypeScript Next Study Page

TypeScript와 Next.js를 학습하기 위한 프론트엔드 학습 웹사이트입니다.

개념 설명을 읽고 예제 코드를 확인한 뒤, 직접 코드를 수정하고 정답 확인을 통해 결과와 해설을 볼 수 있는 학습 도구를 목표로 합니다.

## 주요 기능

- 자연 배경 위에 학습 앱 창이 떠 있는 PC 레이아웃
- 모바일 기준 단일 컬럼 반응형 레이아웃
- TypeScript lesson 데이터 기반 동적 학습 페이지
- 이전 / 다음 버튼을 통한 lesson 이동
- 코드 입력 영역, 힌트, 정답 확인, 결과 및 해설 UI
- 향후 TypeScript compiler 기반 채점을 고려한 채점 구조

## 기술 스택

- Next.js App Router
- TypeScript
- Tailwind CSS

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 아래 주소를 열어 확인합니다.

```txt
http://localhost:3000
```

## 라우트 구조

첫 화면 `/`은 첫 번째 학습 페이지로 이동합니다.

```txt
/learn/typescript/ts-object-type-error
/learn/typescript/ts-optional-property
/learn/typescript/ts-interface-extends
```

동적 라우트는 아래 구조를 사용합니다.

```txt
app/learn/[category]/[lesson]/page.tsx
```

## 폴더 구조

```txt
app/
  page.tsx
  layout.tsx
  globals.css
  learn/[category]/[lesson]/page.tsx

components/
  Header.tsx
  LessonView.tsx
  LessonPanel.tsx
  PracticePanel.tsx
  BottomNavigation.tsx

data/
  lessons/
    index.ts
    types.ts
    typescript.ts

lib/
  gradeLessonAnswer.ts
```

## 학습 데이터 구조

학습 콘텐츠는 로컬 TypeScript 데이터로 관리합니다.

각 lesson은 다음 정보를 가집니다.

```ts
{
  id: string;
  category: string;
  order: number;
  title: string;
  description: string;
  concepts: string[];
  exampleCode: string;
  problem: {
    type: "type-check" | "exact";
    title: string;
    description: string;
    starterCode: string;
    answerCode: string;
    hint: string;
    explanation: string;
  };
}
```

현재는 TypeScript 기초 lesson 3개가 들어 있습니다.

## 채점 방식

현재 정답 확인은 임시 normalization 기반으로 동작합니다.

- 작은따옴표와 큰따옴표 차이 무시
- 공백, 들여쓰기, 줄바꿈 차이 무시
- 세미콜론 차이 무시
- 일부 trailing comma 차이 무시
- 주석 제거 후 비교

`problem.type`은 이후 채점 방식을 확장하기 위한 필드입니다. 아직 실제 TypeScript compiler 기반 타입 검사는 구현하지 않았습니다.

## 앞으로 할 일

- Monaco Editor 연동
- TypeScript compiler 기반 `type-check` 채점 구현
- 더 많은 TypeScript / Next.js lesson 추가
- 학습 진행률 저장
- Firebase 또는 Supabase 기반 로그인 및 학습 기록 저장
