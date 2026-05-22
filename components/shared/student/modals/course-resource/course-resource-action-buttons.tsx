import { Button, Group } from "@mantine/core";
import {
  IconDownload,
  IconExternalLink,
  IconPlayerPlay,
} from "@tabler/icons-react";

interface Props {
  selectedResource: {
    label: string;
    type: "pdf" | "video" | "link";
  } | null;
  setSelectedResource: (
    resource: { label: string; type: "pdf" | "video" | "link" } | null,
  ) => void;
}

const CourseResourceActionButtons = ({
  selectedResource,
  setSelectedResource,
}: Props) => {
  return (
    <Group justify="flex-end" gap="sm">
      <Button
        variant="default"
        radius="xl"
        onClick={() => setSelectedResource(null)}
      >
        Close
      </Button>
      <Button
        color={
          selectedResource?.type === "pdf"
            ? "red"
            : selectedResource?.type === "video"
              ? "blue"
              : "teal"
        }
        radius="xl"
        leftSection={
          selectedResource?.type === "pdf" ? (
            <IconDownload size={16} />
          ) : selectedResource?.type === "video" ? (
            <IconPlayerPlay size={16} />
          ) : (
            <IconExternalLink size={16} />
          )
        }
      >
        {selectedResource?.type === "pdf"
          ? "Download PDF"
          : selectedResource?.type === "video"
            ? "Watch Video"
            : "Open Link"}
      </Button>
    </Group>
  );
};

export default CourseResourceActionButtons;
