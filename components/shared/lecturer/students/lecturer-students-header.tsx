"use client";

import { Box, Button, Flex, Group, Text, Title } from "@mantine/core";
import { IconUserPlus, IconUpload } from "@tabler/icons-react";
import { useState } from "react";
import LecturerAddStudentModal from "./lecturer-add-student-modal";
import LecturerImportStudentsModal from "./lecturer-import-students-modal";

export default function LecturerStudentsHeader() {
  const [addStudentOpened, setAddStudentOpened] = useState(false);
  const [importStudentsOpened, setImportStudentsOpened] = useState(false);

  return (
    <>
      <Flex justify="space-between" align="flex-start" mb="xl">
        <Box>
          <Title order={2} fz={26} fw={800} c="dark.9" lh={1.2}>
            Students
          </Title>
          <Text fz={14} c="dimmed" mt={4}>
            Manage and monitor your students across all courses
          </Text>
        </Box>
        <Group gap={8}>
          <Button
            size="sm"
            variant="light"
            color="indigo"
            leftSection={<IconUpload size={14} />}
            radius="xl"
            onClick={() => setImportStudentsOpened(true)}
          >
            Import from Excel
          </Button>
          <Button
            size="sm"
            variant="filled"
            color="indigo"
            leftSection={<IconUserPlus size={14} />}
            radius="xl"
            onClick={() => setAddStudentOpened(true)}
          >
            Add Student
          </Button>
        </Group>
      </Flex>

      <LecturerAddStudentModal
        opened={addStudentOpened}
        onClose={() => setAddStudentOpened(false)}
      />
      <LecturerImportStudentsModal
        opened={importStudentsOpened}
        onClose={() => setImportStudentsOpened(false)}
      />
    </>
  );
}
