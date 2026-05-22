import { stats } from "@/lib/utils/constants";
import { Grid, Group, Paper, Text, ThemeIcon } from "@mantine/core";

export default function StatsStrip() {
  return (
    <Grid gap="md" mb="xl">
      {stats.map((s) => (
        <Grid.Col span={3} key={s.label}>
          <Paper radius="lg" p="lg" shadow="sm" style={{ background: "#fff" }}>
            <Group justify="space-between" mb={8}>
              <ThemeIcon size={40} radius="md" color={s.color} variant="light">
                <s.icon size={20} />
              </ThemeIcon>
              <Text fz={24} fw={700} c={`${s.color}.6`}>
                {s.value}
              </Text>
            </Group>
            <Text fz={13} fw={600} c="dark.7">
              {s.label}
            </Text>
            <Text fz={11} c="dimmed">
              {s.sub}
            </Text>
          </Paper>
        </Grid.Col>
      ))}
    </Grid>
  );
}
