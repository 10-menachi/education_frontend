import { Avatar, Box, Group, Paper, Text } from "@mantine/core";

interface Props {
  course: Course;
}

const LecturerDetails = ({ course }: Props) => {
  return (
    <Paper radius="lg" p="lg" shadow="sm">
      <Text fw={700} fz={14} mb="md">
        Instructor
      </Text>
      <Group gap={10}>
        <Avatar size={44} radius="xl" color="grape" fw={700} fz={14}>
          {course.lecturerInitials}
        </Avatar>
        <Box>
          <Text fz={14} fw={600}>
            {course.lecturer}
          </Text>
          <Text fz={12} c="dimmed">
            Lecturer
          </Text>
        </Box>
      </Group>
    </Paper>
  );
};

export default LecturerDetails;
