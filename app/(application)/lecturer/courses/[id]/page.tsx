"use client";

import { courses } from "@/lib/utils/constants/data";
import { Box, Container, Text } from "@mantine/core";
import { notFound } from "next/navigation";
import { use } from "react";
import LecturerCourseDetailsHeader from "@/components/shared/lecturer/courses/details/lecturer-course-details-header";
import LecturerCourseOverview from "@/components/shared/lecturer/courses/details/lecturer-course-overview";
import LecturerCourseScores from "@/components/shared/lecturer/courses/details/lecturer-course-scores";
import LecturerCourseResources from "@/components/shared/lecturer/courses/details/lecturer-course-resources";
import LecturerCourseAssessments from "@/components/shared/lecturer/courses/details/lecturer-course-assessments";
import LecturerCourseStudents from "@/components/shared/lecturer/courses/details/lecturer-course-students";

interface CourseDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function CourseDetailsPage({ params }: CourseDetailsPageProps) {
  const { id } = use(params);
  const course = courses.find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  return (
    <Box px={28} py={24}>
      <LecturerCourseDetailsHeader course={course} />
      <LecturerCourseOverview course={course} />
      <LecturerCourseScores course={course} />
      <LecturerCourseStudents courseId={course.id} />
      <LecturerCourseResources course={course} />
      <LecturerCourseAssessments course={course} />
    </Box>
  );
}
