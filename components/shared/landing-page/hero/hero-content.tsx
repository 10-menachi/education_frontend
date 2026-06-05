import { Badge, Button, Grid, Group, Text, Title } from "@mantine/core";
import {
  IconArrowRight,
  IconBolt,
  IconBrain,
  IconShieldCheck,
  IconStar,
} from "@tabler/icons-react";
import Link from "next/link";

const HeroContent = () => {
  return (
    <Grid.Col span={{ base: 12, md: 6 }}>
      <Badge
        color="teal"
        size="lg"
        radius="xl"
        mb={28}
        variant="light"
        leftSection={<IconStar size={13} />}
        style={{ paddingInline: 14 }}
      >
        Validated by 14 African university lecturers
      </Badge>

      <Title
        order={1}
        style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: "clamp(36px, 5vw, 60px)",
          fontWeight: 800,
          lineHeight: 1.1,
          color: "#0f172a",
          marginBottom: 24,
        }}
      >
        Grading that{" "}
        <Text
          span
          style={{
            background: "linear-gradient(135deg, #00c896, #6366f1)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          thinks for you
        </Text>
      </Title>

      <Text fz={18} c="dark.4" lh={1.7} mb={36} style={{ maxWidth: 520 }}>
        Vibetech Education replaces Excel grade books with an AI-powered
        platform built for African universities — automated calculations,
        real-time student results, and nightly AI insights delivered straight to
        your inbox.
      </Text>

      <Group gap={14} mb={48}>
        <Button
          component={Link}
          href="/register"
          size="lg"
          radius="xl"
          fw={700}
          rightSection={<IconArrowRight size={18} />}
          style={{
            background: "linear-gradient(135deg, #00c896, #009973)",
            paddingInline: 32,
            height: 52,
            boxShadow: "0 8px 24px rgba(0,200,150,0.35)",
          }}
        >
          Register
        </Button>
        <Button
          size="lg"
          radius="xl"
          variant="outline"
          color="dark"
          fw={600}
          style={{ paddingInline: 28, height: 52 }}
        >
          Watch Demo
        </Button>
      </Group>

      <Group gap={24}>
        {[
          { icon: IconShieldCheck, label: "Invite-only security" },
          { icon: IconBolt, label: "No IT setup required" },
          { icon: IconBrain, label: "Anthropic API powered" },
        ].map((item) => (
          <Group key={item.label} gap={6}>
            <item.icon size={16} color="#00c896" />
            <Text fz={13} c="dark.4" fw={500}>
              {item.label}
            </Text>
          </Group>
        ))}
      </Group>
    </Grid.Col>
  );
};

export default HeroContent;
