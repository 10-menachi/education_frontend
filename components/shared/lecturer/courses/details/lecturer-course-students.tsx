"use client";

import {
  Paper,
  Text,
  Group,
  Stack,
  Avatar,
  Badge,
  Button,
  ActionIcon,
  Box,
  Table,
  ScrollArea,
  Menu,
} from "@mantine/core";
import { IconUserPlus, IconTrash, IconMail } from "@tabler/icons-react";
import { useState } from "react";
import LecturerAddStudentsModal from "./lecturer-add-students-modal";
import LecturerSendEmailModal from "../../students/lecturer-send-email-modal";

interface LecturerCourseStudentsProps {
  courseId: string;
}

// Mock enrolled students data
const enrolledStudents = [
  {
    id: "s001",
    name: "Alice Johnson",
    email: "alice.johnson@student.edu",
    initials: "AJ",
    enrolledDate: "Jan 15, 2026",
  },
  {
    id: "s002",
    name: "Bob Smith",
    email: "bob.smith@student.edu",
    initials: "BS",
    enrolledDate: "Jan 15, 2026",
  },
  {
    id: "s003",
    name: "Carol White",
    email: "carol.white@student.edu",
    initials: "CW",
    enrolledDate: "Jan 20, 2026",
  },
  {
    id: "s004",
    name: "David Brown",
    email: "david.brown@student.edu",
    initials: "DB",
    enrolledDate: "Jan 22, 2026",
  },
];

export default function LecturerCourseStudents({
  courseId,
}: LecturerCourseStudentsProps) {
  const [addStudentsOpened, setAddStudentsOpened] = useState(false);
  const [emailModalOpened, setEmailModalOpened] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<{
    id: string;
    name: string;
    email: string;
  } | null>(null);
  const [students, setStudents] = useState(enrolledStudents);

  const handleRemoveStudent = (studentId: string) => {
    // TODO: Implement student removal logic
    setStudents(students.filter((s) => s.id !== studentId));
  };

  const handleSendEmail = (student: {
    id: string;
    name: string;
    email: string;
  }) => {
    setSelectedStudent(student);
    setEmailModalOpened(true);
  };

  const rows = students.map((student) => (
    <Table.Tr key={student.id}>
      <Table.Td>
        <Group gap="md">
          <Avatar
            size={32}
            radius="lg"
            color="indigo"
            name={student.initials}
          />
          <Box>
            <Text fw={500} fz={14}>
              {student.name}
            </Text>
            <Text fz={12} c="dimmed">
              ID: {student.id}
            </Text>
          </Box>
        </Group>
      </Table.Td>
      <Table.Td>
        <Text fz={13}>{student.enrolledDate}</Text>
      </Table.Td>
      <Table.Td>
        <Menu shadow="md" position="bottom-end">
          <Menu.Target>
            <ActionIcon variant="subtle" color="gray" size="lg">
              <IconTrash size={16} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
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
        <Group justify="space-between" align="center" mb="md">
          <Box>
            <Text fw={700} fz={16} c="dark.8">
              Course Students
            </Text>
            <Text fz={12} c="dimmed" mt={4}>
              {students.length} enrolled
            </Text>
          </Box>
          <Button
            size="sm"
            color="indigo"
            leftSection={<IconUserPlus size={14} />}
            onClick={() => setAddStudentsOpened(true)}
          >
            Add Students
          </Button>
        </Group>

        {students.length > 0 ? (
          <ScrollArea>
            <Table striped highlightOnHover>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Student</Table.Th>
                  <Table.Th>Enrolled Date</Table.Th>
                  <Table.Th>Actions</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </ScrollArea>
        ) : (
          <Text fz={14} c="dimmed" ta="center" py="xl">
            No students enrolled yet
          </Text>
        )}
      </Paper>

      <LecturerAddStudentsModal
        courseId={courseId}
        opened={addStudentsOpened}
        onClose={() => setAddStudentsOpened(false)}
      />
      <LecturerSendEmailModal
        opened={emailModalOpened}
        onClose={() => setEmailModalOpened(false)}
        studentName={selectedStudent?.name}
        studentEmail={selectedStudent?.email}
      />
    </>
  );
}
