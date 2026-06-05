"use client";

import { Box } from "@mantine/core";
import LecturerStudentsHeader from "@/components/shared/lecturer/students/lecturer-students-header";
import LecturerStudentsStats from "@/components/shared/lecturer/students/lecturer-students-stats";
import LecturerStudentsList from "@/components/shared/lecturer/students/lecturer-students-list";

export default function LecturerStudentsPage() {
  return (
    <Box px={28} py={24}>
      <LecturerStudentsHeader />
      <LecturerStudentsStats />
      <LecturerStudentsList />
    </Box>
  );
}
