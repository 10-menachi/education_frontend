"use client";

import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import {
  IconAlertTriangle,
  IconBrain,
  IconCalendar,
  IconCheck,
  IconMail,
  IconTrendingUp,
  IconUsers,
} from "@tabler/icons-react";
import { classes, atRiskStudents } from "@/lib/utils/constants/data";

const recommendations = [
  {
    priority: "high",
    icon: IconAlertTriangle,
    color: "red",
    title: "Schedule a revision session for Database Systems",
    body: `${atRiskStudents.filter((s) => s.course === "Database Systems").length} students are below 50% in CS 301. A targeted revision on SQL optimisation and normalisation before the exam window could significantly reduce failure risk.`,
    actions: [
      { label: "Send Session Invite", icon: IconMail },
      { label: "View Students", icon: IconUsers },
    ],
  },
  {
    priority: "medium",
    icon: IconBrain,
    color: "indigo",
    title: "Send personalised AI feedback to at-risk students",
    body: `${atRiskStudents.length} students across all classes have been flagged. Sending AI-generated personalised feedback now gives them time to act before the exam window closes.`,
    actions: [{ label: "Send AI Feedback", icon: IconBrain }],
  },
  {
    priority: "medium",
    icon: IconTrendingUp,
    color: "teal",
    title: "Capitalise on Algorithms & DS momentum",
    body: "CS 312 class average improved from 67.1 to 71.5 between CAT 1 and CAT 2. Reinforce this with a quick motivational update and ensure the bottom 5 students get targeted support on dynamic programming.",
    actions: [{ label: "Message Class", icon: IconMail }],
  },
  {
    priority: "low",
    icon: IconCalendar,
    color: "blue",
    title: "Publish pending CS 325 exam results",
    body: "Software Engineering exam results are still unpublished. Students are waiting — publishing now will reduce enquiries and allow AI to generate end-of-semester feedback.",
    actions: [{ label: "Go to Marks", icon: IconCheck }],
  },
];

const priorityConfig: Record<string, { label: string; color: string }> = {
  high: { label: "High Priority", color: "red" },
  medium: { label: "Medium", color: "orange" },
  low: { label: "Low", color: "gray" },
};

export default function LecturerAIInsightsRecommendations() {
  return (
    <Box mb="xl">
      <Flex justify="space-between" align="center" mb="md">
        <Group gap={8}>
          <Text fw={700} fz={15} c="dark.8">
            Recommended Actions
          </Text>
          <Badge color="indigo" size="sm">
            {recommendations.length} suggestions
          </Badge>
        </Group>
        <Text fz={11} c="dimmed">
          AI-generated · Updated{" "}
          {new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </Text>
      </Flex>

      <Stack gap="sm">
        {recommendations.map((rec, i) => {
          const p = priorityConfig[rec.priority];
          return (
            <Paper
              key={i}
              radius="lg"
              shadow="sm"
              style={{ overflow: "hidden" }}
            >
              <Flex>
                {/* Priority stripe */}
                <Box
                  style={{
                    width: 4,
                    background:
                      rec.priority === "high"
                        ? "#f43f5e"
                        : rec.priority === "medium"
                          ? "#f97316"
                          : "#94a3b8",
                    flexShrink: 0,
                  }}
                />

                <Box p="md" style={{ flex: 1 }}>
                  <Flex justify="space-between" align="flex-start" mb={8}>
                    <Group gap={10} align="flex-start">
                      <ThemeIcon
                        size={32}
                        radius="md"
                        color={rec.color}
                        variant="light"
                        mt={2}
                        style={{ flexShrink: 0 }}
                      >
                        <rec.icon size={16} />
                      </ThemeIcon>
                      <Box>
                        <Group gap={8} mb={2}>
                          <Text fz={13} fw={700} c="dark.8">
                            {rec.title}
                          </Text>
                          <Badge
                            size="xs"
                            color={p.color}
                            variant="light"
                            radius="xl"
                          >
                            {p.label}
                          </Badge>
                        </Group>
                        <Text fz={12} c="dimmed" lh={1.7}>
                          {rec.body}
                        </Text>
                      </Box>
                    </Group>
                  </Flex>

                  <Group gap={6} ml={42}>
                    {rec.actions.map((action) => (
                      <Button
                        key={action.label}
                        size="xs"
                        variant="light"
                        color={rec.color}
                        radius="xl"
                        leftSection={<action.icon size={12} />}
                      >
                        {action.label}
                      </Button>
                    ))}
                    <Button size="xs" variant="subtle" color="gray" radius="xl">
                      Dismiss
                    </Button>
                  </Group>
                </Box>
              </Flex>
            </Paper>
          );
        })}
      </Stack>
    </Box>
  );
}
