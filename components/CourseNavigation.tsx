"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { StudyCategory, StudyCourseSummary } from "@/data/lessons";

type CourseNavigationProps = {
  courses: StudyCourseSummary[];
  activeCategory: StudyCategory;
  currentLessonHref: string;
};

const storagePrefix = "study:last:";

export function CourseNavigation({
  courses,
  activeCategory,
  currentLessonHref,
}: CourseNavigationProps) {
  const [courseHrefs, setCourseHrefs] = useState<Record<string, string>>({});

  useEffect(() => {
    window.localStorage.setItem(`${storagePrefix}${activeCategory}`, currentLessonHref);

    setCourseHrefs(
      courses.reduce<Record<string, string>>((hrefs, course) => {
        hrefs[course.id] =
          window.localStorage.getItem(`${storagePrefix}${course.id}`) ??
          course.firstLessonHref;
        return hrefs;
      }, {}),
    );
  }, [activeCategory, courses, currentLessonHref]);

  return (
    <nav className="border-b border-slate-200/80 px-5 pt-4 sm:px-7">
      <div className="flex gap-6 overflow-x-auto text-sm font-medium text-slate-500">
        {courses.map((course) => {
          const isActive = course.id === activeCategory;

          return (
            <Link
              key={course.id}
              href={courseHrefs[course.id] ?? course.firstLessonHref}
              className={`whitespace-nowrap border-b-2 pb-3 transition focus:outline-none ${
                isActive
                  ? "border-slate-950 text-slate-950"
                  : "border-transparent hover:border-slate-300 hover:text-slate-800"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {course.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
