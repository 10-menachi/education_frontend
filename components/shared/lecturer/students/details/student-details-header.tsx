"use client";

import { Box, Button, Flex, Group, Text, Title, Badge } from "@mantine/core";
import {
  IconArrowLeft,
  IconMail,
  IconPhone,
  IconMapPin,
} from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import LecturerSendEmailModal from "../lecturer-send-email-modal";

interface StudentDetailsHeaderProps {
  student: {
    name: string;
    regNumber: string;
    email: string;
    initials: string;
    performance: number;
    status: string;
  };
}

const getPerformanceColor = (performance: number) => {
  if (performance >= 80) return "green";
  if (performance >= 70) return "blue";
  if (performance >= 60) return "yellow";
  return "red";
};

export default function StudentDetailsHeader({
  student,
}: StudentDetailsHeaderProps) {
  const [emailModalOpened, setEmailModalOpened] = useState(false);

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
              href="/lecturer/students"
            >
              Back
            </Button>
          </Group>
          <Title order={2} fz={26} fw={800} c="dark.9" lh={1.2} mb="md">
            {student.name}
          </Title>
          <Group gap={12}>
            <Badge size="lg" variant="light" color="indigo">
              {student.regNumber}
            </Badge>
            <Badge
              size="lg"
              variant="light"
              color={getPerformanceColor(student.performance)}
            >
              {student.performance}% Performance
            </Badge>
            <Badge
              size="lg"
              variant="light"
              color={student.status === "active" ? "green" : "red"}
            >
              {student.status === "active" ? "Active" : "At Risk"}
            </Badge>
          </Group>
        </Box>
        <Group gap={8}>
          <Button
            size="sm"
            variant="light"
            color="indigo"
            leftSection={<IconMail size={14} />}
            onClick={() => setEmailModalOpened(true)}
          >
            Send Email
          </Button>
        </Group>
      </Flex>

      <LecturerSendEmailModal
        opened={emailModalOpened}
        onClose={() => setEmailModalOpened(false)}
        studentName={student.name}
        studentEmail={student.email}
      />
    </>
  );
}
