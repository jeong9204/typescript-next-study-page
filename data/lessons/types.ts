export type StudyCategory = "typescript" | "sql" | "nextjs";

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
  category: StudyCategory;
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

export type StudyCourse = {
  id: StudyCategory;
  title: string;
  subtitle?: string;
  lessons: Lesson[];
};

export type StudyCourseSummary = {
  id: StudyCategory;
  title: string;
  subtitle?: string;
  firstLessonHref: string;
};

export type LessonNavigationItem = {
  id: string;
  category: StudyCategory;
  order: number;
  title: string;
};

export type LessonPageData = {
  course: StudyCourse;
  lesson: Lesson;
  total: number;
  previousLesson: LessonNavigationItem | null;
  nextLesson: LessonNavigationItem | null;
};
