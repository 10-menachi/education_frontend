import { Badge, Group, Paper, Text, ThemeIcon } from "@mantine/core";
import { IconBrain } from "@tabler/icons-react";

const FloatingAIAlertCard = () => {
  return (
    <Paper
      radius="xl"
      p="lg"
      shadow="lg"
      style={{
        position: "absolute",
        top: -30,
        right: -20,
        zIndex: 10,
        width: 260,
        background: "#fff",
        border: "1px solid rgba(0,200,150,0.2)",
        animation: "float 4s ease-in-out infinite",
      }}
    >
      <Group gap={8} mb={8}>
        <ThemeIcon size={28} radius="md" color="teal" variant="light">
          <IconBrain size={14} />
        </ThemeIcon>
        <Text fz={11} fw={700} c="dark.8">
          AI Alert — 06:00 AM
        </Text>
      </Group>
      <Text fz={11} c="dark.5" lh={1.6}>
        Faith scored 34/70 on the exam — 17 pts below class avg. Recommend SQL
        revision before resit.
      </Text>
      <Badge color="red" size="xs" mt={8} radius="xl">
        ⚠ At Risk
      </Badge>
    </Paper>
  );
};

export default FloatingAIAlertCard;
