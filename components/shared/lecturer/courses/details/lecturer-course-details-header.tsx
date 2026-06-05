"use client";

import { Box, Button, Flex, Group, Text, Title, Badge } from "@mantine/core";
import { IconArrowLeft, IconEdit } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import LecturerEditCourseModal from "./lecturer-edit-course-modal";

interface LecturerCourseDetailsHeaderProps {
  course: Course;
}

export default function LecturerCourseDetailsHeader({
  course,
}: LecturerCourseDetailsHeaderProps) {
  const [editOpened, setEditOpened] = useState(false);

  return (
    <>
      <Flex justify="space-between" align="flex-start" mb="xl">
        <Box>
          <Group gap={12} mb="md">
            <Button
              variant="subtle"
              size="xs"
              leftSection={<IconArrowLeft size={16} />}
              component={Link}
              href="/lecturer/courses"
            >
              Back
            </Button>
          </Group>
          <Title order={2} fz={26} fw={800} c="dark.9" lh={1.2} mb="md">
            {course.name}
          </Title>
          <Group gap={12}>
            <Badge size="lg" variant="light" color="indigo">
              {course.code}
            </Badge>
            <Badge size="lg" variant="light" color="gray">
              {course.creditHours} credits
            </Badge>
            <Badge
              size="lg"
              variant="light"
              color={course.published ? "green" : "yellow"}
            >
              {course.published ? "Published" : "Draft"}
            </Badge>
          </Group>
        </Box>
        <Button
          size="sm"
          color="indigo"
          leftSection={<IconEdit size={14} />}
          onClick={() => setEditOpened(true)}
        >
          Edit Course
        </Button>
      </Flex>

      <LecturerEditCourseModal
        course={course}
        opened={editOpened}
        onClose={() => setEditOpened(false)}
      />
    </>
  );
}
