"use client";

import React, { useState } from "react";
import { Box, Button, Tabs, Text } from "@mantine/core";
import { IconChartBar, IconFileText } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { courses } from "@/lib/utils/constants";
import { gradeLabel, weightedTotal } from "@/lib/utils/helpers";
import CustomBreadCrumb from "@/components/shared/student/bread-crumb";
import CourseDetailsHeader from "@/components/shared/student/courses/course-details/course-details-header";
import CourseDetailsOverview from "@/components/shared/student/courses/course-details/tabs/overview/overview-tab";
import CourseDetailsResources from "@/components/shared/student/courses/course-details/tabs/resources/resources-tab";
import CourseResource from "@/components/shared/student/modals/course-resource/course-resource";

export default function CourseDetailsPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const router = useRouter();
  const { code: id } = React.use(params);
  const [selectedResource, setSelectedResource] = useState<{
    label: string;
    type: "pdf" | "video" | "link";
  } | null>(null);

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <Box px={28} py={24}>
        <Text c="red">Course not found</Text>
        <Button onClick={() => router.back()} mt="md">
          Go Back
        </Button>
      </Box>
    );
  }

  const total = weightedTotal(course);
  const { label, color } = gradeLabel(total);

  return (
    <Box px={28} py={24}>
      <CustomBreadCrumb action={() => router.back()} label="Back to Courses" />

      <CourseDetailsHeader course={course} />

      <Tabs defaultValue="overview" color="teal" radius="lg">
        <Tabs.List mb="md">
          <Tabs.Tab value="overview" leftSection={<IconChartBar size={14} />}>
            Overview
          </Tabs.Tab>
          <Tabs.Tab value="resources" leftSection={<IconFileText size={14} />}>
            Resources
          </Tabs.Tab>
        </Tabs.List>

        <CourseDetailsOverview
          course={course}
          total={total}
          label={label}
          color={color}
        />

        <CourseDetailsResources
          course={course}
          selectedResource={selectedResource}
          setSelectedResource={setSelectedResource}
        />

        <CourseResource
          selectedResource={selectedResource}
          setSelectedResource={setSelectedResource}
        />
      </Tabs>
    </Box>
  );
}
