"use client";

import { Box, Grid, Text, Title } from "@mantine/core";
import StatsStrip from "@/components/shared/student/dashboard/stats-strip";
import AIAlertsPanel from "@/components/shared/student/dashboard/ai-alerts-panel";
import CourseCards from "@/components/shared/student/dashboard/course-cards/course-cards";
import RightPanel from "@/components/shared/student/dashboard/right-panel/right-panel";
import UpcomingAssessments from "@/components/shared/student/dashboard/upcoming-assessments";

export default function StudentDashboard() {
  return (
    <>
      <Box px={28} py={24}>
        <Box mb="xl">
          <Title
            order={2}
            fz={26}
            fw={700}
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Hello, Faith! 👋
          </Title>
          <Text fz={14} c="dimmed">
            Here is your current academic performance summary.
          </Text>
        </Box>
        <StatsStrip />
        <Grid gap="lg">
          <Grid.Col span={8}>
            <AIAlertsPanel />
            <CourseCards />
          </Grid.Col>
          <Grid.Col span={4}>
            <RightPanel />
            <Box mt="md">
              <UpcomingAssessments />
            </Box>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
}
