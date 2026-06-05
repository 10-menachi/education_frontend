"use client";

import {
  Modal,
  Button,
  TextInput,
  Group,
  Stack,
  MultiSelect,
  Text,
  Badge,
  Avatar,
  Box,
  Paper,
  ScrollArea,
} from "@mantine/core";
import { useState } from "react";
import { IconSearch } from "@tabler/icons-react";

interface LecturerAddStudentsModalProps {
  courseId: string;
  opened: boolean;
  onClose: () => void;
}

// Mock student data
const allStudents = [
  { value: "s001", label: "Alice Johnson", initials: "AJ" },
  { value: "s002", label: "Bob Smith", initials: "BS" },
  { value: "s003", label: "Carol White", initials: "CW" },
  { value: "s004", label: "David Brown", initials: "DB" },
  { value: "s005", label: "Emma Davis", initials: "ED" },
  { value: "s006", label: "Frank Miller", initials: "FM" },
  { value: "s007", label: "Grace Lee", initials: "GL" },
  { value: "s008", label: "Henry Wilson", initials: "HW" },
];

export default function LecturerAddStudentsModal({
  courseId,
  opened,
  onClose,
}: LecturerAddStudentsModalProps) {
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement add students logic
    console.log("Adding students to course:", courseId, selectedStudents);
    setSelectedStudents([]);
    setSearchValue("");
    onClose();
  };

  const handleClose = () => {
    setSelectedStudents([]);
    setSearchValue("");
    onClose();
  };

  const selectedStudentDetails = allStudents.filter((s) =>
    selectedStudents.includes(s.value),
  );

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title="Add Students to Course"
      size="md"
      centered
    >
      <form onSubmit={handleSubmit}>
        <Stack gap="md">
          <MultiSelect
            label="Select Students"
            placeholder="Search and select students..."
            data={allStudents}
            value={selectedStudents}
            onChange={setSelectedStudents}
            searchable
            clearable
            icon={<IconSearch size={16} />}
          />

          {selectedStudents.length > 0 && (
            <Box>
              <Text fw={500} mb="sm" fz={12} c="dimmed">
                Selected Students ({selectedStudents.length})
              </Text>
              <ScrollArea>
                <Stack gap="xs">
                  {selectedStudentDetails.map((student) => (
                    <Paper key={student.value} p="sm" bg="blue.0" rounded="md">
                      <Group justify="space-between">
                        <Group gap="md">
                          <Avatar
                            size={32}
                            radius="lg"
                            color="indigo"
                            name={student.initials}
                          />
                          <Text fz={13} fw={500}>
                            {student.label}
                          </Text>
                        </Group>
                        <Badge color="indigo" variant="light">
                          {student.value}
                        </Badge>
                      </Group>
                    </Paper>
                  ))}
                </Stack>
              </ScrollArea>
            </Box>
          )}

          <Group justify="flex-end" mt="lg">
            <Button variant="default" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              color="indigo"
              disabled={selectedStudents.length === 0}
            >
              Add {selectedStudents.length} Student
              {selectedStudents.length !== 1 ? "s" : ""}
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}
