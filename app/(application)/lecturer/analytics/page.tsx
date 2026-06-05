"use client";

import { Box } from "@mantine/core";
import LecturerAnalyticsHeader from "@/components/shared/lecturer/analytics/lecturer-analytics-header";
import LecturerAnalyticsOverview from "@/components/shared/lecturer/analytics/lecturer-analytics-overview";
import LecturerAnalyticsPerformance from "@/components/shared/lecturer/analytics/lecturer-analytics-performance";
import LecturerAnalyticsCourses from "@/components/shared/lecturer/analytics/lecturer-analytics-courses";
import LecturerAnalyticsEngagement from "@/components/shared/lecturer/analytics/lecturer-analytics-engagement";

export default function LecturerAnalyticsPage() {
  return (
    <Box px={28} py={24}>
      <LecturerAnalyticsHeader />
      <LecturerAnalyticsOverview />
      <LecturerAnalyticsPerformance />
      <LecturerAnalyticsCourses />
      <LecturerAnalyticsEngagement />
    </Box>
  );
}
