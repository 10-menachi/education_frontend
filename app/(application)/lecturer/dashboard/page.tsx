"use client";

import LecturerAIInsightsPanel from "@/components/shared/lecturer/dashboard/lecturer-ai-insights-panel";
import LecturerAtRiskTable from "@/components/shared/lecturer/dashboard/lecturer-at-risk-table";
import LecturerClassCards from "@/components/shared/lecturer/dashboard/lecturer-class-cards";
import LecturerDashboardRightPanel from "@/components/shared/lecturer/dashboard/lecturer-dashboard-right-panel";
import LecturerStatsStrip from "@/components/shared/lecturer/dashboard/lecturer-stats-strip";
import { Box, Button, Flex, Grid, Group, Text, Title } from "@mantine/core";
import { IconCloudDownload, IconPlus } from "@tabler/icons-react";

export default function LecturerDashboard() {
  return (
    <Box px={28} py={24}>
      <Flex justify="space-between" align="flex-start" mb="xl">
        <Box>
          <Title order={2} fz={26} fw={800} c="dark.9" lh={1.2}>
            Good morning, Dr. Njoroge 👋
          </Title>
          <Text fz={14} c="dimmed" mt={4}>
            You have{" "}
            <Text span fw={600} c="red.6">
              20 at-risk students
            </Text>{" "}
            and{" "}
            <Text span fw={600} c="indigo.6">
              3 AI insights
            </Text>{" "}
            awaiting review.
          </Text>
        </Box>
        <Group gap={8}>
          <Button
            size="sm"
            variant="light"
            color="indigo"
            leftSection={<IconPlus size={14} />}
            radius="xl"
          >
            Add Assessment
          </Button>
          <Button
            size="sm"
            variant="filled"
            color="indigo"
            leftSection={<IconCloudDownload size={14} />}
            radius="xl"
          >
            Export Reports
          </Button>
        </Group>
      </Flex>

      <LecturerStatsStrip />
      <LecturerClassCards />

      <Grid gap="lg">
        <Grid.Col span={8}>
          <LecturerAtRiskTable />
          <LecturerAIInsightsPanel />
        </Grid.Col>
        <Grid.Col span={4}>
          <LecturerDashboardRightPanel />
        </Grid.Col>
      </Grid>
    </Box>
  );
}
