"use client";

import {
  Box,
  Grid,
  Paper,
  Text,
  Progress,
  Group,
  Stack,
  Table,
  ScrollArea,
  Badge,
} from "@mantine/core";

interface StudentPerformanceProps {
  studentId: string;
}

// Mock student performance data
const studentCourses = [
  {
    code: "CS 301",
    name: "Database Systems",
    cat1: 24,
    cat2: 22,
    exam: 55,
    total: 78,
  },
  {
    code: "CS 312",
    name: "Algorithms & Data Structures",
    cat1: 28,
    cat2: 26,
    exam: 62,
    total: 85,
  },
  {
    code: "CS 325",
    name: "Software Engineering",
    cat1: 15,
    cat2: 12,
    exam: null,
    total: 45,
  },
];

const getGradeColor = (score: number) => {
  if (score >= 80) return "green";
  if (score >= 70) return "blue";
  if (score >= 60) return "yellow";
  return "red";
};

export default function StudentPerformance({
  studentId,
}: StudentPerformanceProps) {
  const rows = studentCourses.map((course) => (
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
        <Text fw={500}>{course.cat1}</Text>
      </Table.Td>
      <Table.Td ta="center">
        <Text fw={500}>{course.cat2}</Text>
      </Table.Td>
      <Table.Td ta="center">
        <Text fw={500}>{course.exam || "-"}</Text>
      </Table.Td>
      <Table.Td>
        <Badge color={getGradeColor(course.total)} variant="light">
          {course.total}%
        </Badge>
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
        Course Performance
      </Text>

      <ScrollArea>
        <Table striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Course</Table.Th>
              <Table.Th ta="center">CAT 1</Table.Th>
              <Table.Th ta="center">CAT 2</Table.Th>
              <Table.Th ta="center">Exam</Table.Th>
              <Table.Th>Total Score</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </ScrollArea>
    </Paper>
  );
}
