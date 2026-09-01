import { redirect } from "next/navigation";
import { getFirstLesson } from "@/data/lessons";

export default function Home() {
  const lesson = getFirstLesson();

  redirect(`/learn/${lesson.category}/${lesson.id}`);
}
