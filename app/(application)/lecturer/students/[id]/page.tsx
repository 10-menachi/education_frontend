"use client";

import { Box, notFound } from "@mantine/core";
import { use } from "react";
import StudentDetailsHeader from "@/components/shared/lecturer/students/details/student-details-header";
import StudentOverview from "@/components/shared/lecturer/students/details/student-overview";
import StudentPerformance from "@/components/shared/lecturer/students/details/student-performance";

interface StudentDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Mock student data
const mockStudents: Record<
  string,
  {
    name: string;
    email: string;
    regNumber: string;
    course: string;
    performance: number;
    status: string;
    initials: string;
  }
> = {
  s001: {
    name: "Alice Johnson",
    email: "alice.johnson@student.edu",
    regNumber: "CS/2021/001",
    course: "Database Systems",
    performance: 85,
    status: "active",
    initials: "AJ",
  },
  s002: {
    name: "Bob Smith",
    email: "bob.smith@student.edu",
    regNumber: "CS/2021/002",
    course: "Algorithms & Data Structures",
    performance: 78,
    status: "active",
    initials: "BS",
  },
  s003: {
    name: "Carol White",
    email: "carol.white@student.edu",
    regNumber: "CS/2021/003",
    course: "Database Systems",
    performance: 92,
    status: "active",
    initials: "CW",
  },
  s004: {
    name: "David Brown",
    email: "david.brown@student.edu",
    regNumber: "CS/2021/004",
    course: "Software Engineering",
    performance: 65,
    status: "at-risk",
    initials: "DB",
  },
  s005: {
    name: "Emma Davis",
    email: "emma.davis@student.edu",
    regNumber: "CS/2021/005",
    course: "Database Systems",
    performance: 88,
    status: "active",
    initials: "ED",
  },
  s006: {
    name: "Frank Miller",
    email: "frank.miller@student.edu",
    regNumber: "CS/2021/006",
    course: "Algorithms & Data Structures",
    performance: 72,
    status: "active",
    initials: "FM",
  },
};

export default function StudentDetailsPage({
  params,
}: StudentDetailsPageProps) {
  const { id } = use(params);
  const student = mockStudents[id];

  if (!student) {
    return (
      <Box px={28} py={24}>
        <Box ta="center" py="xl">
          <Box>Student not found</Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box px={28} py={24}>
      <StudentDetailsHeader student={student} />
      <StudentOverview student={student} />
      <StudentPerformance studentId={id} />
    </Box>
  );
}
