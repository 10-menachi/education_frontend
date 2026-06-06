"use client";

import { useState } from "react";
import {
  Badge,
  Box,
  Button,
  Flex,
  Group,
  Text,
  Title,
  ThemeIcon,
} from "@mantine/core";
import { IconBrain, IconRefresh, IconClock } from "@tabler/icons-react";

export default function LecturerAIInsightsHeader() {
  const [running, setRunning] = useState(false);
  const [lastRun, setLastRun] = useState("Today, 06:00 AM");

  const handleRerun = () => {
    setRunning(true);
    setTimeout(() => {
      setRunning(false);
      setLastRun("Just now");
    }, 2500);
  };

  return (
    <Flex justify="space-between" align="flex-start" mb="xl">
      <Box>
        <Group gap={10} mb={6}>
          <ThemeIcon
            size={36}
            radius="md"
            variant="filled"
            style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
          >
            <IconBrain size={18} color="white" />
          </ThemeIcon>
          <Box>
            <Title order={2} fz={22} fw={800} c="dark.9" lh={1.1}>
              AI Insights
            </Title>
            <Group gap={6} mt={2}>
              <IconClock size={11} color="#94a3b8" />
              <Text fz={11} c="dimmed">
                Last analysis: {lastRun}
              </Text>
            </Group>
          </Box>
        </Group>
        <Text fz={13} c="dimmed" mt={4}>
          Nightly analysis across all 3 classes · Powered by Anthropic API
        </Text>
      </Box>

      <Group gap={8}>
        <Badge color="indigo" variant="dot" size="md">
          3 classes monitored
        </Badge>
        <Button
          size="sm"
          radius="xl"
          color="indigo"
          variant="light"
          leftSection={
            <IconRefresh size={14} className={running ? "spin" : ""} />
          }
          loading={running}
          onClick={handleRerun}
        >
          {running ? "Running analysis…" : "Re-run Analysis"}
        </Button>
      </Group>
    </Flex>
  );
}
