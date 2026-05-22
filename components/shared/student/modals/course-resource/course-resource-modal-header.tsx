import { Box, Text, ThemeIcon } from "@mantine/core";
import {
  IconExternalLink,
  IconFileText,
  IconPlayerPlay,
} from "@tabler/icons-react";
import React from "react";

interface Props {
  selectedResource: {
    label: string;
    type: "pdf" | "video" | "link";
  } | null;
}

const CourseResourceModalHeader = ({ selectedResource }: Props) => {
  return (
    <Box
      style={{
        background: "#f8f9fa",
        borderRadius: "8px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <ThemeIcon
        size={64}
        radius="md"
        color={
          selectedResource?.type === "pdf"
            ? "red"
            : selectedResource?.type === "video"
              ? "blue"
              : "teal"
        }
        variant="light"
        mx="auto"
        mb="md"
      >
        {selectedResource?.type === "pdf" ? (
          <IconFileText size={32} />
        ) : selectedResource?.type === "video" ? (
          <IconPlayerPlay size={32} />
        ) : (
          <IconExternalLink size={32} />
        )}
      </ThemeIcon>
      <Text fw={700} fz={14} mb="xs">
        {selectedResource?.label}
      </Text>
      <Text fz={12} c="dimmed" mb="md">
        {selectedResource?.type === "pdf"
          ? "PDF Document · 2.4 MB"
          : selectedResource?.type === "video"
            ? "Video Lecture · 45 mins"
            : "External Resource"}
      </Text>
    </Box>
  );
};

export default CourseResourceModalHeader;
