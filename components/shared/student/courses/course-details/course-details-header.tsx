import { Box, Group, Paper, Text, ThemeIcon, Title } from "@mantine/core";
import { IconFolderOpen } from "@tabler/icons-react";

interface Props {
  course: Course;
}

const CourseDetailsHeader = ({ course }: Props) => {
  return (
    <Paper radius="lg" p="lg" shadow="sm" mb="xl">
      <Group gap={12} mb={16}>
        <ThemeIcon size={48} radius="md" color="teal" variant="light">
          <IconFolderOpen size={24} />
        </ThemeIcon>
        <Box>
          <Title order={2} fz={24} fw={700}>
            {course.name}
          </Title>
          <Text fz={13} c="dimmed">
            {course.code} · {course.creditHours} Credit Hours
          </Text>
        </Box>
      </Group>
    </Paper>
  );
};

export default CourseDetailsHeader;
