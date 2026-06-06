"use client";

import {
  Avatar,
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
import { IconAlertTriangle, IconMail, IconUser } from "@tabler/icons-react";
import { atRiskStudents } from "@/lib/utils/constants/data";

function gradeColor(score: number) {
  if (score >= 70) return "teal";
  if (score >= 60) return "blue";
  if (score >= 50) return "yellow";
  if (score >= 40) return "orange";
  return "red";
}

export default function LecturerAIInsightsRiskAlerts() {
  return (
    <Box mb="xl">
      <Flex justify="space-between" align="center" mb="md">
        <Group gap={8}>
          <Text fw={700} fz={15} c="dark.8">
            At-Risk Student Breakdowns
          </Text>
          <Badge color="red" size="sm" circle>
            {atRiskStudents.length}
          </Badge>
        </Group>
        <Button
          size="xs"
          variant="light"
          color="indigo"
          radius="xl"
          leftSection={<IconMail size={13} />}
        >
          Send Alerts to All
        </Button>
      </Flex>

      <Stack gap="sm">
        {atRiskStudents.map((s, i) => (
          <Paper
            key={i}
            radius="lg"
            p="md"
            shadow="sm"
            style={{ background: "#fff" }}
          >
            <Flex justify="space-between" align="flex-start" gap="md">
              <Group gap={12} align="flex-start" style={{ flex: 1 }}>
                <Avatar size={38} radius="xl" color="red" fz={12} fw={700}>
                  {s.name
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")}
                </Avatar>
                <Box style={{ flex: 1 }}>
                  <Group gap={8} mb={4}>
                    <Text fz={13} fw={700} c="dark.8">
                      {s.name}
                    </Text>
                    <Text fz={11} c="dimmed">
                      {s.reg}
                    </Text>
                    <Badge size="xs" color="gray" variant="outline" radius="xl">
                      {s.course}
                    </Badge>
                  </Group>

                  <Grid gap={8} mb={8}>
                    {[
                      { label: "CAT 1", value: s.cat1, max: 30 },
                      { label: "CAT 2", value: s.cat2, max: 30 },
                      { label: "Exam", value: s.exam, max: 70 },
                    ].map((item) => {
                      const score = parseInt(item.value);
                      const pct = Math.round((score / item.max) * 100);
                      return (
                        <Grid.Col span={4} key={item.label}>
                          <Group justify="space-between" mb={3}>
                            <Text fz={10} c="dimmed" fw={600}>
                              {item.label}
                            </Text>
                            <Text fz={10} fw={700}>
                              {item.value}
                            </Text>
                          </Group>
                          <Progress
                            value={pct}
                            color={
                              pct >= 60 ? "teal" : pct >= 40 ? "orange" : "red"
                            }
                            size="xs"
                            radius="xl"
                          />
                        </Grid.Col>
                      );
                    })}
                  </Grid>

                  <Flex gap={6} align="flex-start">
                    <ThemeIcon
                      size={16}
                      radius="xl"
                      color="indigo"
                      variant="light"
                      mt={1}
                      style={{ flexShrink: 0 }}
                    >
                      <IconAlertTriangle size={9} />
                    </ThemeIcon>
                    <Text fz={11} c="dimmed" lh={1.6}>
                      {s.reason}
                    </Text>
                  </Flex>
                </Box>
              </Group>

              <Flex
                direction="column"
                align="flex-end"
                gap={8}
                style={{ flexShrink: 0 }}
              >
                <Text fz={20} fw={800} c={gradeColor(s.score)} lh={1}>
                  {s.score}
                </Text>
                <Text fz={10} c="dimmed">
                  /100
                </Text>
                <Group gap={4}>
                  <Button
                    size="xs"
                    variant="light"
                    color="indigo"
                    radius="md"
                    leftSection={<IconMail size={11} />}
                  >
                    Alert
                  </Button>
                  <Button
                    size="xs"
                    variant="subtle"
                    color="gray"
                    radius="md"
                    leftSection={<IconUser size={11} />}
                  >
                    View
                  </Button>
                </Group>
              </Flex>
            </Flex>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}
