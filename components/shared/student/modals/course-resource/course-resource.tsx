import { Divider, Modal, Stack } from "@mantine/core";
import CourseResourceModalHeader from "./course-resource-modal-header";
import ResourceView from "./resource-view";
import CourseResourceActionButtons from "./course-resource-action-buttons";

interface Props {
  selectedResource: {
    label: string;
    type: "pdf" | "video" | "link";
  } | null;
  setSelectedResource: (
    resource: { label: string; type: "pdf" | "video" | "link" } | null,
  ) => void;
}

const CourseResource = ({ selectedResource, setSelectedResource }: Props) => {
  return (
    <Modal
      opened={selectedResource !== null}
      onClose={() => setSelectedResource(null)}
      title={selectedResource?.label}
      size="md"
      radius="lg"
    >
      <Stack gap="md">
        <CourseResourceModalHeader selectedResource={selectedResource} />

        <Divider />

        <ResourceView selectedResource={selectedResource} />

        <Divider />

        <CourseResourceActionButtons
          setSelectedResource={setSelectedResource}
          selectedResource={selectedResource}
        />
      </Stack>
    </Modal>
  );
};

export default CourseResource;
