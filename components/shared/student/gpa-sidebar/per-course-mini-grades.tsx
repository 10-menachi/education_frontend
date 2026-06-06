import { courses } from "@/lib/utils/constants/data";
import { gradeLabel, weightedTotal } from "@/lib/utils/helpers";
import { Badge, Box, Group, Paper, Progress, Stack, Text } from "@mantine/core";

const PerCourseMiniGrades = () => {
  return (
    <Paper radius="lg" p="lg" shadow="sm">
      <Text fw={700} fz={14} c="dark.7" mb="md">
        Grade Breakdown
      </Text>
      <Stack gap={10}>
        {courses.map((c) => {
          const t = weightedTotal(c);
          const { label: gl, color: gc } = gradeLabel(t);
          return (
            <Group key={c.code} justify="space-between">
              <Box style={{ flex: 1, minWidth: 0 }}>
                <Text fz={12} fw={600} lineClamp={1}>
                  {c.name}
                </Text>
                <Progress
                  value={t ?? 0}
                  color={t !== null ? gc : "gray"}
                  size="xs"
                  radius="xl"
                  mt={4}
                />
              </Box>
              <Badge
                color={t !== null ? gc : "gray"}
                size="xs"
                radius="xl"
                ml={8}
                variant={t === null ? "outline" : "filled"}
              >
                {t !== null ? `${t} · ${gl}` : "Pending"}
              </Badge>
            </Group>
          );
        })}
      </Stack>
    </Paper>
  );
};

export default PerCourseMiniGrades;
