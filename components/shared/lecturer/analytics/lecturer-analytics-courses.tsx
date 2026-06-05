"use client";

import {
  Paper,
  Text,
  Table,
  ScrollArea,
  Badge,
  Group,
  Box,
  ThemeIcon,
} from "@mantine/core";
import { IconTrendingUp, IconTrendingDown } from "@tabler/icons-react";

export default function LecturerAnalyticsCourses() {
  const courseData = [
    {
      code: "CS 301",
      name: "Database Systems",
      students: 34,
      avgScore: 78,
      submissions: 92,
      trend: "up",
    },
    {
      code: "CS 312",
      name: "Algorithms & Data Structures",
      students: 45,
      avgScore: 72,
      submissions: 87,
      trend: "down",
    },
    {
      code: "CS 325",
      name: "Software Engineering",
      students: 38,
      avgScore: 76,
      submissions: 89,
      trend: "up",
    },
    {
      code: "CS 340",
      name: "Web Development",
      students: 25,
      avgScore: 81,
      submissions: 95,
      trend: "up",
    },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return "green";
    if (score >= 70) return "blue";
    if (score >= 60) return "yellow";
    return "red";
  };

  const rows = courseData.map((course) => (
    <Table.Tr key={course.code}>
      <Table.Td>
        <Box>
          <Text fw={500} fz={14}>
            {course.code}
          </Text>
          <Text fz={12} c="dimmed">
            {course.name}
          </Text>
        </Box>
      </Table.Td>
      <Table.Td ta="center">
        <Text fw={500}>{course.students}</Text>
      </Table.Td>
      <Table.Td ta="center">
        <Badge color={getScoreColor(course.avgScore)} variant="light">
          {course.avgScore}%
        </Badge>
      </Table.Td>
      <Table.Td ta="center">
        <Text fw={500}>{course.submissions}%</Text>
      </Table.Td>
      <Table.Td ta="center">
        <Group justify="center" gap={4}>
          <ThemeIcon
            size={24}
            radius="full"
            color={course.trend === "up" ? "green" : "red"}
            variant="light"
          >
            {course.trend === "up" ? (
              <IconTrendingUp size={14} />
            ) : (
              <IconTrendingDown size={14} />
            )}
          </ThemeIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Paper
      radius="lg"
      p="lg"
      shadow="sm"
      style={{ background: "#fff" }}
      mb="xl"
    >
      <Text fw={700} fz={16} c="dark.8" mb="md">
        Course Analytics
      </Text>

      <ScrollArea>
        <Table striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Course</Table.Th>
              <Table.Th ta="center">Enrolled</Table.Th>
              <Table.Th ta="center">Avg. Score</Table.Th>
              <Table.Th ta="center">Submissions</Table.Th>
              <Table.Th ta="center">Trend</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </ScrollArea>
    </Paper>
  );
}
