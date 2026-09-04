import { nextjsLessons } from "./nextjs";
import { sqlLessons } from "./sql";
import { typescriptLessons } from "./typescript";
import type {
  Lesson,
  LessonNavigationItem,
  LessonPageData,
  StudyCategory,
  StudyCourse,
  StudyCourseSummary,
} from "./types";

export type {
  Lesson,
  LessonCommonMistake,
  LessonComparisonItem,
  LessonNavigationItem,
  LessonPageData,
  LessonProblem,
  LessonProblemType,
  StudyCategory,
  StudyCourse,
  StudyCourseSummary,
} from "./types";

export const studies: Record<StudyCategory, StudyCourse> = {
  typescript: {
    id: "typescript",
    title: "TypeScript Study",
    subtitle: "타입 시스템과 프론트엔드 기초",
    lessons: [...typescriptLessons].sort(
      (firstLesson, secondLesson) => firstLesson.order - secondLesson.order,
    ),
  },
  sql: {
    id: "sql",
    title: "SQL Study",
    subtitle: "PostgreSQL 중심의 데이터 조회",
    lessons: [...sqlLessons].sort(
      (firstLesson, secondLesson) => firstLesson.order - secondLesson.order,
    ),
  },
  nextjs: {
    id: "nextjs",
    title: "Next.js Study",
    subtitle: "App Router 기반 웹 앱 학습",
    lessons: [...nextjsLessons].sort(
      (firstLesson, secondLesson) => firstLesson.order - secondLesson.order,
    ),
  },
};

export const studyCourses = Object.values(studies);

export const lessons: Lesson[] = studyCourses.flatMap((course) => course.lessons);

export function formatLessonOrder(order: number) {
  return String(order).padStart(2, "0");
}

export function getStudyHref(category: StudyCategory, order: number) {
  return `/study/${category}/${formatLessonOrder(order)}`;
}

function toNavigationItem(lesson: Lesson): LessonNavigationItem {
  return {
    id: lesson.id,
    category: lesson.category,
    order: lesson.order,
    title: lesson.title,
  };
}

function isStudyCategory(category: string): category is StudyCategory {
  return category in studies;
}

function getCourse(category: string) {
  if (!isStudyCategory(category)) {
    return null;
  }

  return studies[category];
}

function getLessonFromCourse(course: StudyCourse, lessonSegment: string) {
  const order = Number(lessonSegment);

  if (Number.isInteger(order)) {
    return course.lessons.find((lesson) => lesson.order === order);
  }

  return course.lessons.find((lesson) => lesson.id === lessonSegment);
}

export function getLesson(category: string, lessonSegment: string) {
  const course = getCourse(category);

  if (!course) {
    return undefined;
  }

  return getLessonFromCourse(course, lessonSegment);
}

export function getFirstLesson() {
  return studies.typescript.lessons[0];
}

export function getCourseSummaries(): StudyCourseSummary[] {
  return studyCourses.map((course) => ({
    id: course.id,
    title: course.title.replace(" Study", ""),
    subtitle: course.subtitle,
    firstLessonHref: getStudyHref(course.id, course.lessons[0].order),
  }));
}

export function getLessonParams() {
  return studyCourses.flatMap((course) =>
    course.lessons.map((lesson) => ({
      category: course.id,
      lesson: formatLessonOrder(lesson.order),
    })),
  );
}

export function getLessonPageData(
  category: string,
  lessonSegment: string,
): LessonPageData | null {
  const course = getCourse(category);

  if (!course) {
    return null;
  }

  const lesson = getLessonFromCourse(course, lessonSegment);

  if (!lesson) {
    return null;
  }

  const currentIndex = course.lessons.findIndex(
    (courseLesson) => courseLesson.id === lesson.id,
  );
  const previousLesson = course.lessons[currentIndex - 1];
  const nextLesson = course.lessons[currentIndex + 1];

  return {
    course,
    lesson,
    total: course.lessons.length,
    previousLesson: previousLesson ? toNavigationItem(previousLesson) : null,
    nextLesson: nextLesson ? toNavigationItem(nextLesson) : null,
  };
}
