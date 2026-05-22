import { courses } from "@/lib/utils/constants";
import { gradeLabel, weightedTotal } from "@/lib/utils/helpers";
import { Stack } from "@mantine/core";
import GPACard from "./gpa-card";
import PerCourseMiniGrades from "./per-course-mini-grades";
import UpcomingAssessments from "../dashboard/upcoming-assessments";

export default function GPASidebar() {
  const published = courses.filter((c) => c.published);
  const totals = published.map(weightedTotal).filter(Boolean) as number[];
  const avg = totals.length
    ? Math.round(totals.reduce((a, b) => a + b, 0) / totals.length)
    : null;
  const { label, color } = gradeLabel(avg);

  return (
    <Stack gap="md">
      <GPACard avg={avg} color={color} label={label} published={published} />

      <PerCourseMiniGrades />

      <UpcomingAssessments />
    </Stack>
  );
}
