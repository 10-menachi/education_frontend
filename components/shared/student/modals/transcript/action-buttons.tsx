import { Button, Group } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";

interface Props {
  setTranscriptModalOpen: (open: boolean) => void;
}

const ActionButtons = ({ setTranscriptModalOpen }: Props) => {
  return (
    <Group justify="flex-end" gap="sm">
      <Button
        variant="default"
        radius="xl"
        onClick={() => setTranscriptModalOpen(false)}
      >
        Close
      </Button>
      <Button
        color="teal"
        radius="xl"
        leftSection={<IconDownload size={16} />}
        onClick={() => {}}
      >
        Download PDF
      </Button>
    </Group>
  );
};

export default ActionButtons;
