import { componentPct } from "@/lib/utils/helpers";
import {
  Badge,
  Box,
  Group,
  Paper,
  Progress,
  RingProgress,
  Stack,
  Text,
} from "@mantine/core";

interface Props {
  course: Course;
  total: number | null;
  color: string;
  label: string;
}

const GradeAnalysis = ({ course, total, color, label }: Props) => {
  return (
    <Paper radius="lg" p="lg" shadow="sm">
      <Text fw={700} fz={14} mb="md">
        Performance & Grades
      </Text>

      <Group align="flex-start" gap="xl">
        {total !== null && (
          <Stack align="center" gap={8}>
            <RingProgress
              size={120}
              thickness={10}
              roundCaps
              sections={[{ value: total, color: color }]}
              label={
                <Stack gap={0} align="center">
                  <Text fz={24} fw={700} ta="center" c={`${color}.6`}>
                    {total}
                  </Text>
                  <Text fz={11} c="dimmed">
                    /100
                  </Text>
                </Stack>
              }
            />
            <Badge color={color} radius="xl" size="lg">
              Grade {label}
            </Badge>
          </Stack>
        )}

        <Stack gap={14} style={{ flex: 1 }}>
          {[
            {
              label: `CAT 1 (${course.cat1.weight}%)`,
              item: course.cat1,
            },
            {
              label: `CAT 2 (${course.cat2.weight}%)`,
              item: course.cat2,
            },
            {
              label: `Exam (${course.exam.weight}%)`,
              item: course.exam,
            },
          ].map(({ label: lbl, item }) => {
            const pct = componentPct(item);
            return (
              <Box key={lbl}>
                <Group justify="space-between" mb={6}>
                  <Text fz={13} fw={600} c="dark.7">
                    {lbl}
                  </Text>
                  <Text fz={13} fw={700}>
                    {item.score !== null
                      ? `${item.score}/${item.max}`
                      : "Pending"}
                  </Text>
                </Group>
                <Progress
                  value={pct}
                  color={
                    item.score === null ? "gray" : pct >= 60 ? "teal" : "orange"
                  }
                  radius="xl"
                  size="lg"
                />
              </Box>
            );
          })}
        </Stack>
      </Group>
    </Paper>
  );
};

export default GradeAnalysis;
