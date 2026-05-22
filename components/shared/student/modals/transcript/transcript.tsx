import { courses, student } from "@/lib/utils/constants";
import {
  Badge,
  Box,
  Button,
  Divider,
  Group,
  Modal,
  Stack,
  Text,
} from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import StudentInformation from "./student-information";
import EnrolledCourses from "./enrolled-courses";
import ActionButtons from "./action-buttons";

interface Props {
  transcriptModalOpen: boolean;
  setTranscriptModalOpen: (open: boolean) => void;
}

const Transcript = ({ transcriptModalOpen, setTranscriptModalOpen }: Props) => {
  return (
    <Modal
      opened={transcriptModalOpen}
      onClose={() => setTranscriptModalOpen(false)}
      title="Academic Transcript"
      size="lg"
      radius="lg"
    >
      <Stack
        gap="md"
        style={{
          maxHeight: "70vh",
          overflowY: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="hide-scrollbar"
      >
        <StudentInformation />

        <Divider />

        <EnrolledCourses />

        <Divider />

        <ActionButtons setTranscriptModalOpen={setTranscriptModalOpen} />
      </Stack>
    </Modal>
  );
};

export default Transcript;
