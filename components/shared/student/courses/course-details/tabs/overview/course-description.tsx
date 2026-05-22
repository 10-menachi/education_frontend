import { Paper, Text } from "@mantine/core";

interface Props {
  course: Course;
}

const CourseDescription = ({ course }: Props) => {
  return (
    <Paper radius="lg" p="lg" shadow="sm">
      <Text fw={700} fz={14} mb="md">
        Course Description
      </Text>
      <Text fz={13} c="dimmed" lh={1.8}>
        {course.description}
      </Text>
    </Paper>
  );
};

export default CourseDescription;
