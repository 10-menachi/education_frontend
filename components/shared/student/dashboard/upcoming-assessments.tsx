import { upcomingAssessments } from "@/lib/utils/constants/data";
import { Box, Group, Paper, rem, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconClock } from "@tabler/icons-react";

export default function UpcomingAssessments() {
  return (
    <Paper radius="lg" p="lg" shadow="sm">
      <Group mb="md" gap={8}>
        <ThemeIcon size={28} radius="md" color="blue" variant="light">
          <IconClock size={15} />
        </ThemeIcon>
        <Text fw={700} fz={14} c="dark.7">
          Upcoming Assessments
        </Text>
      </Group>
      <Stack gap={12}>
        {upcomingAssessments.map((a, i) => (
          <Group
            key={i}
            justify="space-between"
            p="sm"
            style={{ background: "#f8f9fa", borderRadius: rem(10) }}
          >
            <Box>
              <Text fz={12} fw={600}>
                {a.name}
              </Text>
              <Text fz={11} c="dimmed">
                {a.course}
              </Text>
            </Box>
            <Box ta="right">
              <Text fz={12} fw={600} c="teal.6">
                {a.date}
              </Text>
              <Text fz={11} c="dimmed">
                {a.time}
              </Text>
            </Box>
          </Group>
        ))}
      </Stack>
    </Paper>
  );
}
