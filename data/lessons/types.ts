export type LessonProblem = {
  title: string;
  description: string;
  starterCode: string;
  answerCode: string;
  hint: string;
  explanation: string;
};

export type Lesson = {
  id: string;
  order: number;
  total: number;
  category: string;
  categoryLabel: string;
  title: string;
  description: string;
  concepts: string[];
  exampleCode: string;
  problem: LessonProblem;
};
