import { courses } from "@/lib/utils/constants/data";
import { weightedTotal } from "@/lib/utils/helpers";
import { Grid, Group, Paper, Text, ThemeIcon } from "@mantine/core";
import {
  IconAlertTriangle,
  IconChartBar,
  IconCheck,
  IconFolderOpen,
} from "@tabler/icons-react";

export default function CourseSummaryStrip() {
  const published = courses.filter((c) => c.published);
  const totals = published.map(weightedTotal).filter(Boolean) as number[];
  const avg = totals.length
    ? Math.round(totals.reduce((a, b) => a + b, 0) / totals.length)
    : null;
  const atRisk = courses.filter((c) => c.trend === "down").length;
  const totalCH = courses.reduce((a, c) => a + c.creditHours, 0);

  const stats = [
    {
      icon: IconFolderOpen,
      color: "teal",
      value: `${courses.length}`,
      label: "Enrolled Units",
      sub: `${totalCH} credit hours`,
    },
    {
      icon: IconChartBar,
      color: "blue",
      value: avg ? `${avg}%` : "—",
      label: "Average Grade",
      sub: "Across published results",
    },
    {
      icon: IconCheck,
      color: "teal",
      value: `${published.length}`,
      label: "Results Published",
      sub: `${courses.length - published.length} pending`,
    },
    {
      icon: IconAlertTriangle,
      color: atRisk > 0 ? "red" : "teal",
      value: `${atRisk}`,
      label: "Units At Risk",
      sub: "Based on AI analysis",
    },
  ];

  return (
    <Grid gap="md" mb="xl">
      {stats.map((s) => (
        <Grid.Col span={3} key={s.label}>
          <Paper radius="lg" p="lg" shadow="sm">
            <Group justify="space-between" mb={8}>
              <ThemeIcon size={40} radius="md" color={s.color} variant="light">
                <s.icon size={20} />
              </ThemeIcon>
              <Text fz={24} fw={700} c={`${s.color}.6`}>
                {s.value}
              </Text>
            </Group>
            <Text fz={13} fw={600} c="dark.7">
              {s.label}
            </Text>
            <Text fz={11} c="dimmed">
              {s.sub}
            </Text>
          </Paper>
        </Grid.Col>
      ))}
    </Grid>
  );
}
