import { typescriptLessons } from "./typescript";
import type { Lesson } from "./types";

export type { Lesson, LessonProblem } from "./types";

export const lessons: Lesson[] = [...typescriptLessons];

export function getLesson(category: string, lessonId: string) {
  return lessons.find(
    (lesson) => lesson.category === category && lesson.id === lessonId,
  );
}

export function getFirstLesson() {
  return lessons[0];
}

export function getLessonParams() {
  return lessons.map((lesson) => ({
    category: lesson.category,
    lesson: lesson.id,
  }));
}
