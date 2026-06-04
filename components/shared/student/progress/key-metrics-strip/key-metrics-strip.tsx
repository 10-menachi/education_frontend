import { Grid, Group, Paper, Text, ThemeIcon } from "@mantine/core";
import {
  IconAward,
  IconBolt,
  IconTarget,
  IconTrendingUp,
} from "@tabler/icons-react";

interface Props {
  avg: number;
  avgColor?: string;
  avgLabel?: string;
  published: Course[];
  courses: Course[];
}

const KeyMetricsStrip = ({
  avg,
  avgColor,
  avgLabel,
  published,
  courses,
}: Props) => {
  return (
    <Grid gap="md" mb="xl">
      <Grid.Col span={3}>
        <Paper radius="lg" p="lg" shadow="sm">
          <Group justify="space-between" mb={8}>
            <ThemeIcon size={40} radius="md" color={avgColor} variant="light">
              <IconAward size={20} />
            </ThemeIcon>
            <Text fz={24} fw={700} c={`${avgColor}.6`}>
              {avg ?? "—"}
            </Text>
          </Group>
          <Text fz={13} fw={600} c="dark.7">
            Current GPA
          </Text>
          <Text fz={11} c="dimmed">
            Grade {avgLabel} — {published.length}/{courses.length} courses
          </Text>
        </Paper>
      </Grid.Col>

      <Grid.Col span={3}>
        <Paper radius="lg" p="lg" shadow="sm">
          <Group justify="space-between" mb={8}>
            <ThemeIcon size={40} radius="md" color="teal" variant="light">
              <IconTrendingUp size={20} />
            </ThemeIcon>
            <Text fz={24} fw={700} c="teal.6">
              +5
            </Text>
          </Group>
          <Text fz={13} fw={600} c="dark.7">
            Semester Growth
          </Text>
          <Text fz={11} c="dimmed">
            Improving from last month
          </Text>
        </Paper>
      </Grid.Col>

      <Grid.Col span={3}>
        <Paper radius="lg" p="lg" shadow="sm">
          <Group justify="space-between" mb={8}>
            <ThemeIcon size={40} radius="md" color="blue" variant="light">
              <IconTarget size={20} />
            </ThemeIcon>
            <Text fz={24} fw={700} c="blue.6">
              75
            </Text>
          </Group>
          <Text fz={13} fw={600} c="dark.7">
            Target Grade
          </Text>
          <Text fz={11} c="dimmed">
            {avg ? 75 - avg : "—"} points away
          </Text>
        </Paper>
      </Grid.Col>

      <Grid.Col span={3}>
        <Paper radius="lg" p="lg" shadow="sm">
          <Group justify="space-between" mb={8}>
            <ThemeIcon size={40} radius="md" color="orange" variant="light">
              <IconBolt size={20} />
            </ThemeIcon>
            <Text fz={24} fw={700} c="orange.6">
              3
            </Text>
          </Group>
          <Text fz={13} fw={600} c="dark.7">
            At Risk Units
          </Text>
          <Text fz={11} c="dimmed">
            Requiring attention
          </Text>
        </Paper>
      </Grid.Col>
    </Grid>
  );
};

export default KeyMetricsStrip;
