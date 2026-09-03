import { typescriptLessons } from "./typescript";
import type { Lesson, LessonNavigationItem, LessonPageData } from "./types";

export type {
  Lesson,
  LessonCommonMistake,
  LessonComparisonItem,
  LessonNavigationItem,
  LessonPageData,
  LessonProblem,
  LessonProblemType,
} from "./types";

export const lessons: Lesson[] = [...typescriptLessons].sort(
  (firstLesson, secondLesson) => firstLesson.order - secondLesson.order,
);

function toNavigationItem(lesson: Lesson): LessonNavigationItem {
  return {
    id: lesson.id,
    category: lesson.category,
    order: lesson.order,
    title: lesson.title,
  };
}

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

export function getLessonPageData(
  category: string,
  lessonId: string,
): LessonPageData | null {
  const categoryLessons = lessons.filter((lesson) => lesson.category === category);
  const currentIndex = categoryLessons.findIndex((lesson) => lesson.id === lessonId);

  if (currentIndex === -1) {
    return null;
  }

  const lesson = categoryLessons[currentIndex];
  const previousLesson = categoryLessons[currentIndex - 1];
  const nextLesson = categoryLessons[currentIndex + 1];

  return {
    lesson,
    total: categoryLessons.length,
    previousLesson: previousLesson ? toNavigationItem(previousLesson) : null,
    nextLesson: nextLesson ? toNavigationItem(nextLesson) : null,
  };
}
