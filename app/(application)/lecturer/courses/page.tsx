"use client";

import LecturerCoursesHeader from "@/components/shared/lecturer/courses/lecturer-courses-header";
import LecturerCoursesList from "@/components/shared/lecturer/courses/lecturer-courses-list";
import LecturerCoursesStats from "@/components/shared/lecturer/courses/lecturer-courses-stats";
import { Box } from "@mantine/core";

export default function LecturerCoursesPage() {
  return (
    <Box px={28} py={24}>
      <LecturerCoursesHeader />
      <LecturerCoursesStats />
      <LecturerCoursesList />
    </Box>
  );
}
