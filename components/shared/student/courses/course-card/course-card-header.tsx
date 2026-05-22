import { Badge, Box, Group, Text, ThemeIcon } from "@mantine/core";
import { IconFolderOpen } from "@tabler/icons-react";
import TrendBadge from "../../dashboard/trend-badge";

interface Props {
  course: Course;
  total: number | null;
  color: string;
  label: string;
}

const CourseCardHeader = ({ course, total, color, label }: Props) => {
  return (
    <Group justify="space-between" mb={12}>
      <Group gap={10}>
        <ThemeIcon size={38} radius="md" color="teal" variant="light">
          <IconFolderOpen size={18} />
        </ThemeIcon>
        <Box>
          <Text fw={700} fz={13}>
            {course.name}
          </Text>
          <Text fz={11} c="dimmed">
            {course.code} · {course.creditHours} CH
          </Text>
        </Box>
      </Group>
      <Group gap={6}>
        <TrendBadge trend={course.trend} />
        {course.published && total !== null ? (
          <Badge color={color} size="sm" radius="xl">
            {total}/100 · {label}
          </Badge>
        ) : (
          <Badge color="gray" size="sm" radius="xl" variant="outline">
            Exam Pending
          </Badge>
        )}
      </Group>
    </Group>
  );
};

export default CourseCardHeader;
