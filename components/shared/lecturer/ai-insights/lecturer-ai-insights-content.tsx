"use client";

import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Group,
  Paper,
  Progress,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import {
  IconBrain,
  IconSend,
  IconTrendingDown,
  IconTrendingUp,
  IconMinus,
} from "@tabler/icons-react";
import { aiInsights, classes } from "@/lib/utils/constants/data";

function TrendIcon({ trend }: { trend: string }) {
  if (trend === "up") return <IconTrendingUp size={13} color="#14b8a6" />;
  if (trend === "down") return <IconTrendingDown size={13} color="#f43f5e" />;
  return <IconMinus size={13} color="#94a3b8" />;
}

export default function LecturerAIInsightsContent() {
  return (
    <Box mb="xl">
      <Text fw={700} fz={15} c="dark.8" mb="md">
        Per-Class AI Summaries
      </Text>
      <Stack gap="md">
        {aiInsights.map((ins, i) => {
          const cls = classes.find(
            (c) => c.name === ins.course || ins.course.includes(c.code),
          );
          const isHigh = ins.severity === "high";

          return (
            <Paper
              key={i}
              radius="lg"
              shadow="sm"
              style={{ overflow: "hidden" }}
            >
              {/* Colored top bar */}
              <Box
                style={{
                  height: 4,
                  background: isHigh
                    ? "linear-gradient(90deg, #f43f5e, #fb7185)"
                    : "linear-gradient(90deg, #14b8a6, #2dd4bf)",
                }}
              />

              <Box p="lg">
                <Flex justify="space-between" align="flex-start" mb={14}>
                  <Group gap={10}>
                    <ThemeIcon
                      size={36}
                      radius="md"
                      color={isHigh ? "red" : "teal"}
                      variant="light"
                    >
                      <IconBrain size={18} />
                    </ThemeIcon>
                    <Box>
                      <Group gap={8}>
                        <Text fw={700} fz={14} c="dark.8">
                          {ins.course}
                        </Text>
                        <Badge
                          size="xs"
                          color={isHigh ? "red" : "teal"}
                          variant="filled"
                          radius="xl"
                        >
                          {isHigh ? "⚠ Action Required" : "✓ Positive Trend"}
                        </Badge>
                      </Group>
                      <Text fz={11} c="dimmed" mt={2}>
                        {ins.time}
                      </Text>
                    </Box>
                  </Group>
                  {cls && (
                    <Group gap={16}>
                      <Box ta="right">
                        <Text
                          fz={10}
                          c="dimmed"
                          fw={600}
                          style={{
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                          }}
                        >
                          Class Avg
                        </Text>
                        <Text
                          fz={18}
                          fw={800}
                          c={
                            cls.avgScore >= 70
                              ? "teal.6"
                              : cls.avgScore >= 50
                                ? "yellow.7"
                                : "red.6"
                          }
                          lh={1}
                        >
                          {cls.avgScore}
                        </Text>
                      </Box>
                      <Box ta="right">
                        <Text
                          fz={10}
                          c="dimmed"
                          fw={600}
                          style={{
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                          }}
                        >
                          At Risk
                        </Text>
                        <Text fz={18} fw={800} c="red.6" lh={1}>
                          {cls.atRisk}
                        </Text>
                      </Box>
                      <Box ta="right">
                        <Text
                          fz={10}
                          c="dimmed"
                          fw={600}
                          style={{
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                          }}
                        >
                          Trend
                        </Text>
                        <Flex justify="flex-end" mt={2}>
                          <TrendIcon trend={cls.trend} />
                        </Flex>
                      </Box>
                    </Group>
                  )}
                </Flex>

                {/* Progress bar for class average */}
                {cls && (
                  <Box mb={14}>
                    <Group justify="space-between" mb={4}>
                      <Text fz={11} c="dimmed">
                        Class average performance
                      </Text>
                      <Text fz={11} fw={600}>
                        {cls.avgScore}/100
                      </Text>
                    </Group>
                    <Progress
                      value={cls.avgScore}
                      color={
                        cls.avgScore >= 70
                          ? "teal"
                          : cls.avgScore >= 50
                            ? "yellow"
                            : "red"
                      }
                      size="sm"
                      radius="xl"
                    />
                  </Box>
                )}

                <Text fz={13} c="dark.6" lh={1.8} mb={14}>
                  {ins.message}
                </Text>

                <Group gap={8}>
                  <Button
                    size="xs"
                    variant="light"
                    color={isHigh ? "red" : "teal"}
                    radius="xl"
                  >
                    View Full Analysis →
                  </Button>
                  <Button
                    size="xs"
                    variant="subtle"
                    color="gray"
                    radius="xl"
                    leftSection={<IconSend size={11} />}
                  >
                    Forward to Students
                  </Button>
                </Group>
              </Box>
            </Paper>
          );
        })}
      </Stack>
    </Box>
  );
}
