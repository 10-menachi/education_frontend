import { aiInsights } from "@/lib/utils/constants/data";
import {
  Badge,
  Box,
  Button,
  Flex,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { IconBrain, IconSend } from "@tabler/icons-react";

export default function LecturerAIInsightsPanel() {
  return (
    <Paper radius="lg" shadow="sm" style={{ overflow: "hidden" }}>
      <Flex
        align="center"
        justify="space-between"
        px="lg"
        py="md"
        style={{ borderBottom: "1px solid #f1f5f9" }}
      >
        <Group gap={8}>
          <ThemeIcon
            size={30}
            radius="md"
            variant="filled"
            style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
          >
            <IconBrain size={15} color="white" />
          </ThemeIcon>
          <Box>
            <Text fw={700} fz={14} c="dark.8">
              AI Class Insights
            </Text>
            <Text fz={11} c="dimmed">
              Generated nightly via Anthropic API
            </Text>
          </Box>
        </Group>
        <Badge color="indigo" variant="dot" size="sm">
          Live · 06:00 AM
        </Badge>
      </Flex>
      <Stack gap={0}>
        {aiInsights.map((ins, i) => (
          <Box
            key={i}
            p="lg"
            style={{
              borderBottom:
                i < aiInsights.length - 1 ? "1px solid #f1f5f9" : "none",
              background:
                ins.severity === "high"
                  ? "linear-gradient(90deg, #fff1f2 0%, #fff 50%)"
                  : "linear-gradient(90deg, #f0fdfa 0%, #fff 50%)",
            }}
          >
            <Group justify="space-between" mb={8}>
              <Group gap={8}>
                <Badge
                  color={ins.severity === "high" ? "rose" : "teal"}
                  size="xs"
                  radius="xl"
                  variant="filled"
                >
                  {ins.severity === "high"
                    ? "⚠ Action Required"
                    : "✓ Positive Trend"}
                </Badge>
                <Badge color="gray" size="xs" variant="outline">
                  {ins.course}
                </Badge>
              </Group>
              <Text fz={10} c="dimmed">
                {ins.time}
              </Text>
            </Group>
            <Text fz={13} c="dark.6" lh={1.7}>
              {ins.message}
            </Text>
            <Group gap={8} mt={10}>
              <Button
                size="xs"
                variant="subtle"
                color={ins.severity === "high" ? "rose" : "teal"}
                px={8}
              >
                View Full Analysis →
              </Button>
              <Button
                size="xs"
                variant="subtle"
                color="gray"
                px={8}
                leftSection={<IconSend size={11} />}
              >
                Forward to Students
              </Button>
            </Group>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}
