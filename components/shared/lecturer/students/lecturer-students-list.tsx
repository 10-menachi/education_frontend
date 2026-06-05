"use client";

import {
  Box,
  Paper,
  Text,
  Table,
  ScrollArea,
  Group,
  Avatar,
  Badge,
  ActionIcon,
  Menu,
  Input,
  Stack,
} from "@mantine/core";
import {
  IconSearch,
  IconDots,
  IconEye,
  IconTrash,
  IconMail,
} from "@tabler/icons-react";
import { useState } from "react";
import Link from "next/link";
import LecturerSendEmailModal from "./lecturer-send-email-modal";

// Mock student data
const mockStudents = [
  {
    id: "s001",
    name: "Alice Johnson",
    email: "alice.johnson@student.edu",
    regNumber: "CS/2021/001",
    course: "Database Systems",
    courseId: "cs-301",
    performance: 85,
    status: "active",
    initials: "AJ",
  },
  {
    id: "s002",
    name: "Bob Smith",
    email: "bob.smith@student.edu",
    regNumber: "CS/2021/002",
    course: "Algorithms & Data Structures",
    courseId: "cs-312",
    performance: 78,
    status: "active",
    initials: "BS",
  },
  {
    id: "s003",
    name: "Carol White",
    email: "carol.white@student.edu",
    regNumber: "CS/2021/003",
    course: "Database Systems",
    courseId: "cs-301",
    performance: 92,
    status: "active",
    initials: "CW",
  },
  {
    id: "s004",
    name: "David Brown",
    email: "david.brown@student.edu",
    regNumber: "CS/2021/004",
    course: "Software Engineering",
    courseId: "cs-325",
    performance: 65,
    status: "at-risk",
    initials: "DB",
  },
  {
    id: "s005",
    name: "Emma Davis",
    email: "emma.davis@student.edu",
    regNumber: "CS/2021/005",
    course: "Database Systems",
    courseId: "cs-301",
    performance: 88,
    status: "active",
    initials: "ED",
  },
  {
    id: "s006",
    name: "Frank Miller",
    email: "frank.miller@student.edu",
    regNumber: "CS/2021/006",
    course: "Algorithms & Data Structures",
    courseId: "cs-312",
    performance: 72,
    status: "active",
    initials: "FM",
  },
];

const getPerformanceColor = (performance: number) => {
  if (performance >= 80) return "green";
  if (performance >= 70) return "blue";
  if (performance >= 60) return "yellow";
  return "red";
};

const getStatusColor = (status: string) => {
  return status === "active" ? "green" : "red";
};

export default function LecturerStudentsList() {
  const [searchValue, setSearchValue] = useState("");
  const [students, setStudents] = useState(mockStudents);
  const [emailModalOpened, setEmailModalOpened] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<{
    id: string;
    name: string;
    email: string;
  } | null>(null);

  const handleSendEmail = (student: {
    id: string;
    name: string;
    email: string;
  }) => {
    setSelectedStudent(student);
    setEmailModalOpened(true);
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      student.email.toLowerCase().includes(searchValue.toLowerCase()) ||
      student.regNumber.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const handleRemoveStudent = (studentId: string) => {
    // TODO: Implement remove student logic
    setStudents(students.filter((s) => s.id !== studentId));
  };

  const rows = filteredStudents.map((student) => (
    <Table.Tr key={student.id}>
      <Table.Td>
        <Group gap="md">
          <Avatar
            size={36}
            radius="lg"
            color="indigo"
            name={student.initials}
          />
          <Box>
            <Text fw={500} fz={14}>
              {student.name}
            </Text>
            <Text fz={12} c="dimmed">
              {student.regNumber}
            </Text>
          </Box>
        </Group>
      </Table.Td>
      <Table.Td>
        <Text fz={13}>{student.email}</Text>
      </Table.Td>
      <Table.Td>
        <Text fz={13}>{student.course}</Text>
      </Table.Td>
      <Table.Td>
        <Badge color={getPerformanceColor(student.performance)} variant="light">
          {student.performance}%
        </Badge>
      </Table.Td>
      <Table.Td>
        <Badge color={getStatusColor(student.status)} variant="light">
          {student.status === "active" ? "Active" : "At Risk"}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Menu shadow="md" position="bottom-end">
          <Menu.Target>
            <ActionIcon variant="subtle" color="gray" size="lg">
              <IconDots size={16} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              leftSection={<IconEye size={14} />}
              component={Link}
              href={`/lecturer/students/${student.id}`}
            >
              View Profile
            </Menu.Item>
            <Menu.Item
              leftSection={<IconMail size={14} />}
              onClick={() =>
                handleSendEmail({
                  id: student.id,
                  name: student.name,
                  email: student.email,
                })
              }
            >
              Send Email
            </Menu.Item>
            <Menu.Item
              color="red"
              leftSection={<IconTrash size={14} />}
              onClick={() => handleRemoveStudent(student.id)}
            >
              Remove
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Paper
        radius="lg"
        p="lg"
        shadow="sm"
        style={{ background: "#fff" }}
        mb="xl"
      >
        <Stack gap="md">
          <Input
            placeholder="Search students by name, email, or registration..."
            leftSection={<IconSearch size={16} />}
            value={searchValue}
            onChange={(e) => setSearchValue(e.currentTarget.value)}
          />

          <ScrollArea>
            <Table striped highlightOnHover>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Student</Table.Th>
                  <Table.Th>Email</Table.Th>
                  <Table.Th>Course</Table.Th>
                  <Table.Th>Performance</Table.Th>
                  <Table.Th>Status</Table.Th>
                  <Table.Th>Actions</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </ScrollArea>

          {filteredStudents.length === 0 && (
            <Text fz={14} c="dimmed" ta="center" py="xl">
              No students found matching your search
            </Text>
          )}

          <Text fz={12} c="dimmed">
            Showing {filteredStudents.length} of {students.length} students
          </Text>
        </Stack>
      </Paper>

      <LecturerSendEmailModal
        opened={emailModalOpened}
        onClose={() => setEmailModalOpened(false)}
        studentName={selectedStudent?.name}
        studentEmail={selectedStudent?.email}
      />
    </>
  );
}
