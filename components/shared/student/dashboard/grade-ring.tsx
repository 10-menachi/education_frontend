import { courses, student } from "@/lib/utils/constants";
import { gradeLabel, weightedTotal } from "@/lib/utils/helpers";
import {
  Badge,
  Divider,
  Flex,
  Group,
  Paper,
  RingProgress,
  Stack,
  Text,
} from "@mantine/core";

export default function GradeRing() {
  const { label, color } = gradeLabel(student.overallGrade);
  return (
    <Paper radius="lg" p="lg" shadow="sm" h="100%">
      <Text fw={700} fz={14} mb="md" c="dark.7">
        Grade Overview
      </Text>
      <Flex direction="column" align="center">
        <RingProgress
          size={140}
          thickness={14}
          roundCaps
          sections={[{ value: student.overallGrade, color: "teal" }]}
          label={
            <Text ta="center" fw={800} fz={22} c="teal.6">
              {student.overallGrade}
            </Text>
          }
        />
        <Badge color={color} size="lg" mt={8} radius="xl">
          {label} Grade
        </Badge>
        <Text fz={12} c="dimmed" mt={6}>
          {student.department}
        </Text>
        <Text fz={12} c="dimmed">
          {student.year}
        </Text>
      </Flex>
      <Divider my="md" />
      <Stack gap={8}>
        {courses
          .filter((c) => c.published && weightedTotal(c) !== null)
          .map((c) => {
            const wt = weightedTotal(c)!;
            const g = gradeLabel(wt);
            return (
              <Group key={c.code} justify="space-between">
                <Text
                  fz={12}
                  c="dimmed"
                  style={{ maxWidth: 130 }}
                  lineClamp={1}
                >
                  {c.name}
                </Text>
                <Badge color={g.color} size="sm" variant="light">
                  {wt}/100
                </Badge>
              </Group>
            );
          })}
      </Stack>
    </Paper>
  );
}
