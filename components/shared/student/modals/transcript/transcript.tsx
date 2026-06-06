import { Divider, Modal, Stack } from "@mantine/core";
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
