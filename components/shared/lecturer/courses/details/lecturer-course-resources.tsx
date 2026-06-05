"use client";

import {
  Box,
  Paper,
  Text,
  Group,
  Stack,
  Badge,
  Button,
  ActionIcon,
} from "@mantine/core";
import {
  IconFile,
  IconVideo,
  IconLink,
  IconDownload,
  IconTrash,
} from "@tabler/icons-react";
import { useState } from "react";
import LecturerAddResourceModal from "./lecturer-add-resource-modal";

interface LecturerCourseResourcesProps {
  course: Course;
}

const resourceIcons: Record<string, React.ReactNode> = {
  pdf: <IconFile size={16} />,
  video: <IconVideo size={16} />,
  link: <IconLink size={16} />,
};

const resourceColors: Record<string, string> = {
  pdf: "red",
  video: "blue",
  link: "teal",
};

export default function LecturerCourseResources({
  course,
}: LecturerCourseResourcesProps) {
  const [addResourceOpened, setAddResourceOpened] = useState(false);

  return (
    <>
      <Paper
        radius="lg"
        p="lg"
        shadow="sm"
        style={{ background: "#fff" }}
        mb="xl"
      >
        <Text fw={700} fz={16} c="dark.8" mb="md">
          Course Resources
        </Text>

        {course.resources.length > 0 ? (
          <Stack gap="sm">
            {course.resources.map((resource, index) => (
              <Group
                key={index}
                justify="space-between"
                p="md"
                bg="gray.0"
                rounded="md"
              >
                <Group gap="md">
                  <Badge
                    size="lg"
                    variant="light"
                    color={resourceColors[resource.type]}
                    leftSection={resourceIcons[resource.type]}
                  >
                    {resource.type.toUpperCase()}
                  </Badge>
                  <Box>
                    <Text fw={500} fz={14}>
                      {resource.label}
                    </Text>
                  </Box>
                </Group>
                <Group gap={8}>
                  <ActionIcon variant="subtle" color="indigo" size="lg">
                    <IconDownload size={16} />
                  </ActionIcon>
                  <ActionIcon variant="subtle" color="red" size="lg">
                    <IconTrash size={16} />
                  </ActionIcon>
                </Group>
              </Group>
            ))}
          </Stack>
        ) : (
          <Text fz={14} c="dimmed" ta="center" py="xl">
            No resources added yet
          </Text>
        )}

        <Button
          fullWidth
          variant="light"
          color="indigo"
          mt="md"
          onClick={() => setAddResourceOpened(true)}
        >
          Add Resource
        </Button>
      </Paper>

      <LecturerAddResourceModal
        courseId={course.id}
        opened={addResourceOpened}
        onClose={() => setAddResourceOpened(false)}
      />
    </>
  );
}
