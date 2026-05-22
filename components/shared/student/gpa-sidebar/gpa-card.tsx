import { Badge, Paper, RingProgress, Stack, Text } from "@mantine/core";

interface Props {
  avg: number | null;
  color: string;
  label: string;
  published: any[];
}

const GPACard = ({ avg, color, label, published }: Props) => {
  return (
    <Paper radius="lg" p="lg" shadow="sm">
      <Text fw={700} fz={14} c="dark.7" mb="md">
        Semester GPA
      </Text>
      <Stack align="center" gap={6}>
        <RingProgress
          size={120}
          thickness={10}
          roundCaps
          sections={[{ value: avg ?? 0, color: color }]}
          label={
            <Stack gap={2} align="center">
              <Text fz={22} fw={700} c={`${color}.6`} lh={1}>
                {avg ?? "—"}
              </Text>
              <Text fz={10} c="dimmed">
                / 100
              </Text>
            </Stack>
          }
        />
        <Badge color={color} size="md" radius="xl" mt={4}>
          Grade {label}
        </Badge>
        <Text fz={11} c="dimmed" ta="center">
          Based on {published.length} published result
          {published.length !== 1 ? "s" : ""}
        </Text>
      </Stack>
    </Paper>
  );
};

export default GPACard;
