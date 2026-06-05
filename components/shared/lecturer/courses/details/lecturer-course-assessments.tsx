"use client";

import {
  Box,
  Paper,
  Text,
  Table,
  Group,
  Badge,
  Progress,
  Stack,
} from "@mantine/core";

interface LecturerCourseAssessmentsProps {
  course: Course;
}

export default function LecturerCourseAssessments({
  course,
}: LecturerCourseAssessmentsProps) {
  const getScoreColor = (score: number, max: number) => {
    const percentage = (score / max) * 100;
    if (percentage >= 80) return "green";
    if (percentage >= 70) return "blue";
    if (percentage >= 60) return "yellow";
    return "red";
  };

  const rows = course.assessmentHistory.map((assessment) => {
    const percentage = (assessment.score / assessment.max) * 100;
    const color = getScoreColor(assessment.score, assessment.max);

    return (
      <Table.Tr key={assessment.label}>
        <Table.Td>
          <Text fw={500} fz={14}>
            {assessment.label}
          </Text>
        </Table.Td>
        <Table.Td>
          <Group justify="flex-end">
            <Text fw={600} fz={14} c={`${color}.6`}>
              {assessment.score}/{assessment.max}
            </Text>
          </Group>
        </Table.Td>
        <Table.Td>
          <Group justify="flex-end">
            <Badge color={color} variant="light">
              {percentage.toFixed(1)}%
            </Badge>
          </Group>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Paper radius="lg" p="lg" shadow="sm" style={{ background: "#fff" }}>
      <Text fw={700} fz={16} c="dark.8" mb="md">
        Assessment History
      </Text>

      {course.assessmentHistory.length > 0 ? (
        <Box style={{ overflowX: "auto" }}>
          <Table striped highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Assessment</Table.Th>
                <Table.Th ta="right">Score</Table.Th>
                <Table.Th ta="right">Percentage</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Box>
      ) : (
        <Text fz={14} c="dimmed" ta="center" py="xl">
          No assessment history available
        </Text>
      )}
    </Paper>
  );
}
