"use client";

import {
  Box,
  Grid,
  Paper,
  Text,
  Progress,
  Group,
  Stack,
  ThemeIcon,
} from "@mantine/core";
import { IconTrendingUp, IconTrendingDown } from "@tabler/icons-react";

interface LecturerCourseScoresProps {
  course: Course;
}

export default function LecturerCourseScores({
  course,
}: LecturerCourseScoresProps) {
  const calculateScore = (assessment: CourseScore) => {
    if (!assessment.score) return 0;
    return Math.round((assessment.score / assessment.max) * 100);
  };

  const calculateTotalScore = () => {
    const cat1 = (course.cat1.score || 0) * (course.cat1.weight / 100);
    const cat2 = (course.cat2.score || 0) * (course.cat2.weight / 100);
    const exam = (course.exam.score || 0) * (course.exam.weight / 100);
    return Math.round(cat1 + cat2 + exam);
  };

  const assessments = [
    {
      label: "CAT 1",
      data: course.cat1,
      color: "indigo",
    },
    {
      label: "CAT 2",
      data: course.cat2,
      color: "teal",
    },
    {
      label: "Final Exam",
      data: course.exam,
      color: "grape",
    },
  ];

  const totalScore = calculateTotalScore();

  return (
    <Grid gap="lg" mb="xl">
      <Grid.Col span={{ base: 12, md: 4 }}>
        <Paper radius="lg" p="lg" shadow="sm" style={{ background: "#fff" }}>
          <Group justify="space-between" align="flex-start" mb="md">
            <Box>
              <Text fz={12} fw={600} c="dimmed" mb={4}>
                Total Score
              </Text>
              <Text fz={32} fw={800} c="indigo.6" lh={1}>
                {totalScore}%
              </Text>
            </Box>
            <ThemeIcon
              size={40}
              radius="lg"
              color={course.trend === "up" ? "green" : "red"}
              variant="light"
            >
              {course.trend === "up" ? (
                <IconTrendingUp size={20} />
              ) : (
                <IconTrendingDown size={20} />
              )}
            </ThemeIcon>
          </Group>
          <Text fz={12} c="dimmed">
            Trend: {course.trend === "up" ? "Improving" : "Declining"}
          </Text>
        </Paper>
      </Grid.Col>

      {assessments.map((assessment) => {
        const percentage = calculateScore(assessment.data);
        return (
          <Grid.Col span={{ base: 12, md: 4 }} key={assessment.label}>
            <Paper
              radius="lg"
              p="lg"
              shadow="sm"
              style={{ background: "#fff" }}
            >
              <Text fz={12} fw={600} c="dimmed" mb="md">
                {assessment.label}
              </Text>
              <Stack gap="sm">
                <Group justify="space-between">
                  <Text fz={18} fw={700} c={`${assessment.color}.6`}>
                    {assessment.data.score || 0}/{assessment.data.max}
                  </Text>
                  <Text fz={12} fw={600} c="dimmed">
                    {percentage}%
                  </Text>
                </Group>
                <Progress
                  value={percentage}
                  color={assessment.color}
                  size="md"
                  radius="md"
                />
                <Text fz={11} c="dimmed">
                  Weight: {assessment.data.weight}%
                </Text>
              </Stack>
            </Paper>
          </Grid.Col>
        );
      })}
    </Grid>
  );
}
