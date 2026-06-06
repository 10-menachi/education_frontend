import { Badge, Box, Group, Text, ThemeIcon } from "@mantine/core";
import { IconFolderOpen } from "@tabler/icons-react";
import TrendBadge from "../trend-badge";
import { courses } from "@/lib/utils/constants/data";

interface Props {
  c: (typeof courses)[0];
  total: number | null;
  color: string;
  label: string;
}

const CourseDetails = ({ c, total, color, label }: Props) => {
  return (
    <Group justify="space-between" mb={10}>
      <Group gap={10}>
        <ThemeIcon size={36} radius="md" color="teal" variant="light">
          <IconFolderOpen size={18} />
        </ThemeIcon>
        <Box>
          <Text fw={700} fz={13}>
            {c.name}
          </Text>
          <Text fz={11} c="dimmed">
            {c.code}
          </Text>
        </Box>
      </Group>
      <Group gap={8}>
        <TrendBadge trend={c.trend} />
        {c.published && total !== null && (
          <Badge color={color} size="sm" radius="xl">
            {total}/100 • {label}
          </Badge>
        )}
        {!c.published && (
          <Badge color="gray" size="sm" radius="xl" variant="outline">
            Exam Pending
          </Badge>
        )}
      </Group>
    </Group>
  );
};

export default CourseDetails;
