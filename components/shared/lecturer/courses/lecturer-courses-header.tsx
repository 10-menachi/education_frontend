"use client";

import { Box, Button, Flex, Group, Text, Title } from "@mantine/core";
import { IconFolderPlus, IconUpload } from "@tabler/icons-react";
import { useState } from "react";
import LecturerAddCourseModal from "./lecturer-add-course-modal";
import LecturerImportCoursesModal from "./lecturer-import-courses-modal";

export default function LecturerCoursesHeader() {
  const [addCourseOpened, setAddCourseOpened] = useState(false);
  const [importCoursesOpened, setImportCoursesOpened] = useState(false);

  return (
    <>
      <Flex justify="space-between" align="flex-start" mb="xl">
        <Box>
          <Title order={2} fz={26} fw={800} c="dark.9" lh={1.2}>
            My Courses
          </Title>
          <Text fz={14} c="dimmed" mt={4}>
            Manage and track your courses across all semesters
          </Text>
        </Box>
        <Group gap={8}>
          <Button
            size="sm"
            variant="light"
            color="indigo"
            leftSection={<IconUpload size={14} />}
            radius="xl"
            onClick={() => setImportCoursesOpened(true)}
          >
            Import from Excel
          </Button>
          <Button
            size="sm"
            variant="filled"
            color="indigo"
            leftSection={<IconFolderPlus size={14} />}
            radius="xl"
            onClick={() => setAddCourseOpened(true)}
          >
            New Course
          </Button>
        </Group>
      </Flex>

      <LecturerAddCourseModal
        opened={addCourseOpened}
        onClose={() => setAddCourseOpened(false)}
      />
      <LecturerImportCoursesModal
        opened={importCoursesOpened}
        onClose={() => setImportCoursesOpened(false)}
      />
    </>
  );
}
