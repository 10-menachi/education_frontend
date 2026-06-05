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
} from "@mantine/core";
import { useState } from "react";

interface LecturerEditCourseModalProps {
  course: Course;
  opened: boolean;
  onClose: () => void;
}

export default function LecturerEditCourseModal({
  course,
  opened,
  onClose,
}: LecturerEditCourseModalProps) {
  const [formData, setFormData] = useState({
    code: course.code,
    name: course.name,
    description: course.description,
    creditHours: course.creditHours,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Updated course:", formData);
    onClose();
  };

  const handleClose = () => {
    setFormData({
      code: course.code,
      name: course.name,
      description: course.description,
      creditHours: course.creditHours,
    });
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title="Edit Course"
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

          <Group justify="flex-end" mt="lg">
            <Button variant="default" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" color="indigo">
              Save Changes
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}
