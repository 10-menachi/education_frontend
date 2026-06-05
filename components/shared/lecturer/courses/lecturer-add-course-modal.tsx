"use client";

import {
  Modal,
  Button,
  TextInput,
  Textarea,
  NumberInput,
  Select,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import { useState } from "react";

interface LecturerAddCourseModalProps {
  opened: boolean;
  onClose: () => void;
}

export default function LecturerAddCourseModal({
  opened,
  onClose,
}: LecturerAddCourseModalProps) {
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    description: "",
    creditHours: 3,
    semester: "1",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form data:", formData);
    onClose();
  };

  const handleClose = () => {
    setFormData({
      code: "",
      name: "",
      description: "",
      creditHours: 3,
      semester: "1",
    });
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title="Create New Course"
      size="md"
      centered
    >
      <form onSubmit={handleSubmit}>
        <Stack gap="md">
          <TextInput
            label="Course Code"
            placeholder="e.g., CS 301"
            value={formData.code}
            onChange={(e) =>
              setFormData({ ...formData, code: e.currentTarget.value })
            }
            required
          />

          <TextInput
            label="Course Name"
            placeholder="e.g., Database Systems"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.currentTarget.value })
            }
            required
          />

          <Textarea
            label="Description"
            placeholder="Enter course description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.currentTarget.value })
            }
            minRows={3}
          />

          <NumberInput
            label="Credit Hours"
            value={formData.creditHours}
            onChange={(value) =>
              setFormData({
                ...formData,
                creditHours: value || 3,
              })
            }
            min={1}
            max={6}
          />

          <Select
            label="Semester"
            placeholder="Select semester"
            value={formData.semester}
            onChange={(value) =>
              setFormData({
                ...formData,
                semester: value || "1",
              })
            }
            data={[
              { value: "1", label: "Semester 1" },
              { value: "2", label: "Semester 2" },
            ]}
          />

          <Group justify="flex-end" mt="lg">
            <Button variant="default" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" color="indigo">
              Create Course
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}
