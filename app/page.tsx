import { redirect } from "next/navigation";
import { getFirstLesson, getStudyHref } from "@/data/lessons";

export default function Home() {
  const lesson = getFirstLesson();

  redirect(getStudyHref(lesson.category, lesson.order));
}
