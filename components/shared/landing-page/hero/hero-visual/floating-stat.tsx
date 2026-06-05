import { Paper, Text } from "@mantine/core";

const FloatingStat = () => {
  return (
    <Paper
      radius="xl"
      p="md"
      shadow="lg"
      style={{
        position: "absolute",
        bottom: -20,
        left: -30,
        zIndex: 10,
        background: "linear-gradient(135deg, #0f172a, #1e1b4b)",
        animation: "float 4s ease-in-out infinite 2s",
      }}
    >
      <Text fz={24} fw={800} c="white">
        85.7%
      </Text>
      <Text fz={10} c="rgba(255,255,255,0.6)">
        would switch to Vibetech
      </Text>
    </Paper>
  );
};

export default FloatingStat;
