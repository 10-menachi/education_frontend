import { Badge, Box, Group, Text, Title } from "@mantine/core";
import { IconBrain } from "@tabler/icons-react";

const AISpotlightTitle = () => {
  return (
    <Box ta="center" mb={64}>
      <Badge
        size="lg"
        radius="xl"
        mb={20}
        style={{
          background: "rgba(0,200,150,0.15)",
          color: "#4ddab6",
          border: "1px solid rgba(0,200,150,0.25)",
        }}
      >
        <Group gap={6}>
          <IconBrain size={13} />
          AI Differentiation
        </Group>
      </Badge>
      <Title
        order={2}
        style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: "clamp(28px, 4vw, 46px)",
          fontWeight: 800,
          color: "#fff",
          lineHeight: 1.15,
          marginBottom: 20,
        }}
      >
        The AI works while{" "}
        <Text
          span
          style={{
            background: "linear-gradient(135deg, #00c896, #4ddab6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          you sleep
        </Text>
      </Title>
      <Text fz={17} c="rgba(255,255,255,0.5)" maw={600} mx="auto" lh={1.7}>
        Every night, a scheduled cron job analyses all student data, calls the
        Anthropic API, and delivers personalised natural-language insights — to
        both lecturers and students.
      </Text>
    </Box>
  );
};

export default AISpotlightTitle;
