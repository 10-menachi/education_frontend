"use client";

import { Modal, Button, TextInput, Select, Group, Stack } from "@mantine/core";
import { useState } from "react";

interface LecturerAddResourceModalProps {
  courseId: string;
  opened: boolean;
  onClose: () => void;
}

export default function LecturerAddResourceModal({
  courseId,
  opened,
  onClose,
}: LecturerAddResourceModalProps) {
  const [formData, setFormData] = useState({
    label: "",
    type: "pdf" as "pdf" | "video" | "link",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement resource addition logic
    console.log("Adding resource to course:", courseId, formData);
    setFormData({ label: "", type: "pdf" });
    onClose();
  };

  const handleClose = () => {
    setFormData({ label: "", type: "pdf" });
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title="Add Resource"
      size="sm"
      centered
    >
      <form onSubmit={handleSubmit}>
        <Stack gap="md">
          <TextInput
            label="Resource Name"
            placeholder="e.g., Database Design Guide"
            value={formData.label}
            onChange={(e) =>
              setFormData({ ...formData, label: e.currentTarget.value })
            }
            required
          />

          <Select
            label="Resource Type"
            placeholder="Select type"
            value={formData.type}
            onChange={(value) =>
              setFormData({
                ...formData,
                type: (value as "pdf" | "video" | "link") || "pdf",
              })
            }
            data={[
              { value: "pdf", label: "PDF Document" },
              { value: "video", label: "Video" },
              { value: "link", label: "External Link" },
            ]}
          />

          <Group justify="flex-end" mt="lg">
            <Button variant="default" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" color="indigo">
              Add Resource
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}
