"use client";

import { Modal, Button, TextInput, Select, Group, Stack } from "@mantine/core";
import { useState } from "react";

interface LecturerAddStudentModalProps {
  opened: boolean;
  onClose: () => void;
}

export default function LecturerAddStudentModal({
  opened,
  onClose,
}: LecturerAddStudentModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    regNumber: "",
    course: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement add student logic
    console.log("Adding student:", formData);
    setFormData({ name: "", email: "", regNumber: "", course: "" });
    onClose();
  };

  const handleClose = () => {
    setFormData({ name: "", email: "", regNumber: "", course: "" });
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title="Add Student"
      size="md"
      centered
    >
      <form onSubmit={handleSubmit}>
        <Stack gap="md">
          <TextInput
            label="Student Name"
            placeholder="e.g., John Doe"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.currentTarget.value })
            }
            required
          />

          <TextInput
            label="Email Address"
            placeholder="e.g., john@example.com"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.currentTarget.value })
            }
            required
          />

          <TextInput
            label="Registration Number"
            placeholder="e.g., CS/2021/001"
            value={formData.regNumber}
            onChange={(e) =>
              setFormData({ ...formData, regNumber: e.currentTarget.value })
            }
            required
          />

          <Select
            label="Assign to Course"
            placeholder="Select course"
            value={formData.course}
            onChange={(value) =>
              setFormData({
                ...formData,
                course: value || "",
              })
            }
            data={[
              { value: "cs-301", label: "CS 301 - Database Systems" },
              {
                value: "cs-312",
                label: "CS 312 - Algorithms & Data Structures",
              },
              { value: "cs-325", label: "CS 325 - Software Engineering" },
            ]}
          />

          <Group justify="flex-end" mt="lg">
            <Button variant="default" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" color="indigo">
              Add Student
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}
