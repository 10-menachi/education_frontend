export function weightedTotal(course: Course) {
  if (
    !course.published ||
    course.exam.score === null ||
    course.cat1.score === null ||
    course.cat2.score === null
  )
    return null;
  const c1 = (course.cat1.score / course.cat1.max) * course.cat1.weight;
  const c2 = (course.cat2.score / course.cat2.max) * course.cat2.weight;
  const ex = (course.exam.score / course.exam.max) * course.exam.weight;
  return Math.round(c1 + c2 + ex);
}

export function gradeLabel(score: number | null) {
  if (score === null) return { label: "—", color: "gray" };
  if (score >= 70) return { label: "A", color: "teal" };
  if (score >= 60) return { label: "B", color: "blue" };
  if (score >= 50) return { label: "C", color: "yellow" };
  if (score >= 40) return { label: "D", color: "orange" };
  return { label: "F", color: "red" };
}

export function componentPct(item: CourseScore): number {
  if (item.score === null) return 0;
  return Math.round((item.score / item.max) * 100);
}

export function gradeColor(score: number) {
  if (score >= 70) return "teal";
  if (score >= 60) return "blue";
  if (score >= 50) return "yellow";
  if (score >= 40) return "orange";
  return "red";
}
