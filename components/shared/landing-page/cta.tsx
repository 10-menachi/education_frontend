import { Box, Button, Container, Group, Text, Title } from "@mantine/core";
import { IconArrowRight, IconCheck, IconMail } from "@tabler/icons-react";
import Link from "next/link";

export default function CTA() {
  return (
    <Box
      py={100}
      style={{
        background:
          "linear-gradient(135deg, #00c896 0%, #009973 40%, #006b52 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
          pointerEvents: "none",
        }}
      />
      <Box
        style={{
          position: "absolute",
          bottom: -80,
          left: -40,
          width: 250,
          height: 250,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.04)",
          pointerEvents: "none",
        }}
      />

      <Container
        size="md"
        ta="center"
        style={{ position: "relative", zIndex: 1 }}
      >
        <Title
          order={2}
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.15,
            marginBottom: 20,
          }}
        >
          Ready to stop fighting Excel?
        </Title>
        <Text
          fz={18}
          c="rgba(255,255,255,0.75)"
          mb={40}
          lh={1.7}
          maw={500}
          mx="auto"
        >
          Vibetech Education is in its pilot phase. If you are a lecturer at a
          Kenyan university and want to be part of the first cohort, reach out.
        </Text>

        <Group justify="center" gap={14} mb={40}>
          <Button
            component={Link}
            href="/register"
            size="xl"
            radius="xl"
            fw={700}
            rightSection={<IconArrowRight size={20} />}
            style={{
              background: "#fff",
              color: "#00a07a",
              paddingInline: 40,
              height: 58,
              boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
            }}
          >
            Get Started
          </Button>
        </Group>

        <Group justify="center" gap={32}>
          {[
            "Free pilot semester",
            "No credit card required",
            "Set up in under 1 hour",
          ].map((item) => (
            <Group key={item} gap={6}>
              <IconCheck size={15} color="rgba(255,255,255,0.7)" />
              <Text fz={13} c="rgba(255,255,255,0.7)" fw={500}>
                {item}
              </Text>
            </Group>
          ))}
        </Group>
      </Container>
    </Box>
  );
}
