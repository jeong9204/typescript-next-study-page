export type LessonProblemType = "type-check" | "exact";

export type LessonCommonMistake = {
  code: string;
  reason: string;
};

export type LessonComparisonItem = {
  label: string;
  description: string;
};

export type LessonProblem = {
  type: LessonProblemType;
  title: string;
  description: string;
  starterCode: string;
  answerCode: string;
  hint: string;
  explanation: string;
  errorExample?: string;
};

export type Lesson = {
  id: string;
  category: string;
  categoryLabel: string;
  order: number;
  title: string;
  description: string;
  concepts: string[];
  exampleCode: string;
  conceptExampleCode?: string;
  learningNotes?: string[];
  comparisonItems?: LessonComparisonItem[];
  problem: LessonProblem;
  commonMistakes?: LessonCommonMistake[];
};

export type LessonNavigationItem = {
  id: string;
  category: string;
  order: number;
  title: string;
};

export type LessonPageData = {
  lesson: Lesson;
  total: number;
  previousLesson: LessonNavigationItem | null;
  nextLesson: LessonNavigationItem | null;
};
