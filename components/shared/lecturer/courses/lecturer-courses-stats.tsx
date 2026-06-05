"use client";

import { courses } from "@/lib/utils/constants/data";
import { Box, Grid, Paper, Text, ThemeIcon } from "@mantine/core";
import { IconBooks, IconBookmark, IconAward } from "@tabler/icons-react";

export default function LecturerCoursesStats() {
  const totalCourses = courses.length;
  const totalCredits = courses.reduce((acc, c) => acc + c.creditHours, 0);

  const calculateAverageScore = () => {
    const scores = courses.map((course) => {
      const cat1Score = (course.cat1.score || 0) * (course.cat1.weight / 100);
      const cat2Score = (course.cat2.score || 0) * (course.cat2.weight / 100);
      const examScore = (course.exam.score || 0) * (course.exam.weight / 100);
      return cat1Score + cat2Score + examScore;
    });
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  };

  const stats = [
    {
      label: "Total Courses",
      value: String(totalCourses),
      icon: IconBooks,
      color: "indigo",
    },
    {
      label: "Total Credits",
      value: String(totalCredits),
      icon: IconBookmark,
      color: "teal",
    },
    {
      label: "Average Score",
      value: `${calculateAverageScore()}%`,
      icon: IconAward,
      color: "green",
    },
  ];

  return (
    <Grid gap="md" mb="xl">
      {stats.map((stat) => (
        <Grid.Col span={{ base: 12, md: 4 }} key={stat.label}>
          <Paper radius="lg" p="lg" shadow="sm" style={{ background: "#fff" }}>
            <Box>
              <Box mb="lg">
                <ThemeIcon
                  size={40}
                  radius="lg"
                  color={stat.color}
                  variant="light"
                >
                  <stat.icon size={22} />
                </ThemeIcon>
              </Box>
              <Text fz={12} fw={600} c="dimmed" mb={4}>
                {stat.label}
              </Text>
              <Text fz={28} fw={800} c={`${stat.color}.6`} lh={1}>
                {stat.value}
              </Text>
            </Box>
          </Paper>
        </Grid.Col>
      ))}
    </Grid>
  );
}
