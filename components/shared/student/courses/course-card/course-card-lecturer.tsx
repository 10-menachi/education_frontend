import { Avatar, Group, Text } from "@mantine/core";

interface Props {
  course: Course;
}

const CourseCardLecturer = ({ course }: Props) => {
  return (
    <Group gap={8} mb={14}>
      <Avatar size={24} radius="xl" color="grape" fz={10}>
        {course.lecturerInitials}
      </Avatar>
      <Text fz={11} c="dimmed">
        {course.lecturer}
      </Text>
    </Group>
  );
};

export default CourseCardLecturer;
