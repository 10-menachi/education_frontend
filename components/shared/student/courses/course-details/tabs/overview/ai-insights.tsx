import { Box, Group, Paper, Text, ThemeIcon } from "@mantine/core";
import { IconAlertTriangle, IconCheck } from "@tabler/icons-react";

interface Props {
  course: Course;
}

const AIInsights = ({ course }: Props) => {
  return (
    <>
      {course.trend === "down" && (
        <Paper
          radius="lg"
          p="lg"
          shadow="sm"
          style={{
            background: "#fff5f5",
            border: "1px solid #fcd5d5",
          }}
        >
          <Group gap={10} mb={10}>
            <ThemeIcon size={36} radius="md" color="red" variant="light">
              <IconAlertTriangle size={18} />
            </ThemeIcon>
            <Box>
              <Text fw={700} fz={13} c="red.8">
                AI Alert — At Risk
              </Text>
              <Text fz={12} c="dimmed">
                Based on performance trends
              </Text>
            </Box>
          </Group>
          <Text fz={12} c="dark.6" lh={1.7}>
            Your CAT scores show a declining trend. Focus on past papers and
            seek clarification from your lecturer before the exam.
          </Text>
        </Paper>
      )}
      {course.trend === "up" && (
        <Paper
          radius="lg"
          p="lg"
          shadow="sm"
          style={{
            background: "#f0fdf9",
            border: "1px solid #b2f2e0",
          }}
        >
          <Group gap={10} mb={10}>
            <ThemeIcon size={36} radius="md" color="teal" variant="light">
              <IconCheck size={18} />
            </ThemeIcon>
            <Box>
              <Text fw={700} fz={13} c="teal.8">
                AI Insight — Performing Well
              </Text>
              <Text fz={12} c="dimmed">
                Based on performance trends
              </Text>
            </Box>
          </Group>
          <Text fz={12} c="dark.6" lh={1.7}>
            You are consistently improving in this unit. Keep it up and aim for
            a distinction in the final exam.
          </Text>
        </Paper>
      )}
    </>
  );
};

export default AIInsights;
