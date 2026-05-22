import { Divider, Paper } from "@mantine/core";
import CourseCardHeader from "./course-card-header";
import CourseCardLecturer from "./course-card-lecturer";
import { gradeLabel, weightedTotal } from "@/lib/utils/helpers";
import CourseCardScoreBars from "./course-card-score-bars";
import CourseCardFooterActions from "./course-card-footer-actions";

export default function CourseCard({ course }: { course: Course }) {
  const total = weightedTotal(course);
  const { label, color } = gradeLabel(total);

  return (
    <Paper radius="lg" p="lg" shadow="sm" style={{ cursor: "pointer" }}>
      <CourseCardHeader
        course={course}
        total={total}
        color={color}
        label={label}
      />

      <CourseCardLecturer course={course} />

      <CourseCardScoreBars course={course} />

      <Divider my="sm" />

      <CourseCardFooterActions course_id={course.id} />
    </Paper>
  );
}
