import {
  Badge,
  Box,
  Button,
  Group,
  Paper,
  Stack,
  Tabs,
  Text,
  ThemeIcon,
} from "@mantine/core";
import {
  IconDownload,
  IconExternalLink,
  IconFileText,
  IconPlayerPlay,
} from "@tabler/icons-react";

interface Props {
  course: Course;
  selectedResource: {
    label: string;
    type: "pdf" | "video" | "link";
  } | null;
  setSelectedResource: (
    resource: { label: string; type: "pdf" | "video" | "link" } | null,
  ) => void;
}

const CourseDetailsResources = ({
  course,
  selectedResource,
  setSelectedResource,
}: Props) => {
  return (
    <Tabs.Panel value="resources">
      <Stack gap="md">
        {course.resources.length === 0 ? (
          <Paper radius="lg" p="lg" shadow="sm" ta="center">
            <Text fz={13} c="dimmed">
              No resources uploaded yet.
            </Text>
          </Paper>
        ) : (
          course.resources.map((r, i) => (
            <Paper
              key={i}
              radius="lg"
              p="lg"
              shadow="sm"
              style={{
                cursor: "pointer",
                transition: "all 0.2s ease",
                border:
                  selectedResource?.label === r.label
                    ? "2px solid var(--mantine-color-teal-5)"
                    : "1px solid var(--mantine-color-gray-2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.10)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              onClick={() => setSelectedResource(r)}
            >
              <Group justify="space-between" mb="md">
                <Group gap={12}>
                  <ThemeIcon
                    size={40}
                    radius="md"
                    color={
                      r.type === "pdf"
                        ? "red"
                        : r.type === "video"
                          ? "blue"
                          : "teal"
                    }
                    variant="light"
                  >
                    {r.type === "pdf" ? (
                      <IconFileText size={20} />
                    ) : r.type === "video" ? (
                      <IconPlayerPlay size={20} />
                    ) : (
                      <IconExternalLink size={20} />
                    )}
                  </ThemeIcon>
                  <Box>
                    <Text fz={13} fw={600}>
                      {r.label}
                    </Text>
                    <Text fz={11} c="dimmed">
                      {r.type === "pdf"
                        ? "PDF Document"
                        : r.type === "video"
                          ? "Video Lecture"
                          : "External Link"}
                    </Text>
                  </Box>
                </Group>
                <Badge
                  size="sm"
                  variant="light"
                  color={
                    r.type === "pdf"
                      ? "red"
                      : r.type === "video"
                        ? "blue"
                        : "teal"
                  }
                  radius="xl"
                >
                  {r.type.toUpperCase()}
                </Badge>
              </Group>

              <Group gap="xs" pt="sm">
                {r.type === "pdf" && (
                  <>
                    <Button
                      size="xs"
                      variant="light"
                      color="red"
                      leftSection={<IconDownload size={14} />}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Download
                    </Button>
                    <Button
                      size="xs"
                      variant="subtle"
                      color="red"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View
                    </Button>
                  </>
                )}

                {r.type === "video" && (
                  <>
                    <Button
                      size="xs"
                      variant="light"
                      color="blue"
                      leftSection={<IconPlayerPlay size={14} />}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Watch
                    </Button>
                    <Button
                      size="xs"
                      variant="subtle"
                      color="blue"
                      leftSection={<IconDownload size={14} />}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Download
                    </Button>
                  </>
                )}

                {r.type === "link" && (
                  <Button
                    size="xs"
                    variant="light"
                    color="teal"
                    leftSection={<IconExternalLink size={14} />}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Open Link
                  </Button>
                )}
              </Group>
            </Paper>
          ))
        )}
      </Stack>
    </Tabs.Panel>
  );
};

export default CourseDetailsResources;
