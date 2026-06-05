"use client";

import { classes } from "@/lib/utils/constants/data";
import {
  Box,
  Grid,
  Group,
  Paper,
  RingProgress,
  Text,
  ThemeIcon,
} from "@mantine/core";
import {
  IconAlertTriangle,
  IconChartBar,
  IconFolderOpen,
  IconUsers,
} from "@tabler/icons-react";

export default function LecturerStatsStrip() {
  const totalStudents = classes.reduce((a, c) => a + c.students, 0);
  const totalAtRisk = classes.reduce((a, c) => a + c.atRisk, 0);
  const avgScore = (
    classes.reduce((a, c) => a + c.avgScore, 0) / classes.length
  ).toFixed(1);

  const lecturerStats = [
    {
      label: "Total Students",
      value: String(totalStudents),
      sub: "Across 3 classes",
      icon: IconUsers,
      color: "indigo",
      ring: Math.round((totalStudents / 200) * 100),
    },
    {
      label: "Class Average",
      value: `${avgScore}/100`,
      sub: "Weighted average",
      icon: IconChartBar,
      color: "teal",
      ring: parseFloat(avgScore),
    },
    {
      label: "At-Risk Students",
      value: String(totalAtRisk),
      sub: "Need intervention",
      icon: IconAlertTriangle,
      color: "red",
      ring: Math.round((totalAtRisk / totalStudents) * 100),
    },
    {
      label: "Active Classes",
      value: String(classes.length),
      sub: "Sem 1 · 2025/26",
      icon: IconFolderOpen,
      color: "blue",
      ring: 75,
    },
  ];

  return (
    <Grid gap="md" mb="xl">
      {lecturerStats.map((s) => {
        console.log("ESS", s);

        return (
          <Grid.Col span={3} key={s.label}>
            <Paper
              radius="lg"
              p="lg"
              shadow="sm"
              style={{ background: "#fff" }}
            >
              <Group justify="space-between" align="flex-start">
                <Box>
                  <Text
                    fz={10}
                    c="dimmed"
                    fw={600}
                    mb={4}
                    style={{
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {s.label}
                  </Text>
                  <Text fz={26} fw={800} c={`${s.color}.6`} lh={1}>
                    {s.value}
                  </Text>
                  <Text fz={11} c="dimmed" mt={4}>
                    {s.sub}
                  </Text>
                </Box>
                <RingProgress
                  size={56}
                  thickness={5}
                  roundCaps
                  sections={[{ value: s.ring, color: s.color }]}
                  label={
                    <ThemeIcon
                      size={30}
                      radius="xl"
                      color={s.color}
                      variant="light"
                    >
                      <s.icon size={15} />
                    </ThemeIcon>
                  }
                />
              </Group>
            </Paper>
          </Grid.Col>
        );
      })}
    </Grid>
  );
}
