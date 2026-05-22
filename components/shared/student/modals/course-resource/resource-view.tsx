import { Box, Text } from "@mantine/core";

interface Props {
  selectedResource: {
    label: string;
    type: "pdf" | "video" | "link";
  } | null;
}

const ResourceView = ({ selectedResource }: Props) => {
  return (
    <Box>
      <Text fw={600} fz={12} c="dimmed" mb="xs" tt="uppercase">
        Resource Details
      </Text>
      <Text fz={13} lh={1.8}>
        {selectedResource?.type === "pdf"
          ? "This PDF document contains comprehensive notes on the topic. You can download it for offline access or view it directly in your browser."
          : selectedResource?.type === "video"
            ? "This video lecture covers key concepts and practical examples. You can watch it online or download for offline viewing."
            : "This is an external link to additional learning resources. Click to open in a new tab."}
      </Text>
    </Box>
  );
};

export default ResourceView;
