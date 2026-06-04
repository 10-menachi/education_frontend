import {
  Badge,
  Box,
  Container,
  Grid,
  Group,
  Paper,
  rem,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconBrain, IconUsers } from "@tabler/icons-react";

export default function AISpotlight() {
  return (
    <Box
      py={100}
      style={{
        background:
          "linear-gradient(160deg, #0f172a 0%, #1e1b4b 60%, #0f172a 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(0,200,150,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
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
            Every night, a scheduled cron job analyses all student data, calls
            the Anthropic API, and delivers personalised natural-language
            insights — to both lecturers and students.
          </Text>
        </Box>

        <Grid gap="lg" justify="center">
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Paper
              radius="xl"
              p="xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                height: "100%",
              }}
            >
              <Group gap={8} mb={16}>
                <ThemeIcon
                  size={32}
                  radius="md"
                  style={{ background: "rgba(99,102,241,0.2)" }}
                >
                  <IconUsers size={16} color="#818cf8" />
                </ThemeIcon>
                <Text fw={700} fz={13} c="white">
                  Lecturer Digest
                </Text>
                <Badge size="xs" color="red" variant="filled" ml="auto">
                  9 flagged
                </Badge>
              </Group>
              <Text fz={12} c="rgba(255,255,255,0.35)" mb={12}>
                CS 301 — Database Systems · Today, 06:02 AM
              </Text>
              <Box
                p="md"
                style={{
                  background: "rgba(239,68,68,0.08)",
                  borderRadius: rem(12),
                  border: "1px solid rgba(239,68,68,0.15)",
                }}
              >
                <Text fz={13} c="rgba(255,255,255,0.75)" lh={1.7}>
                  <Text span fw={700} c="white">
                    9 of 48 students
                  </Text>{" "}
                  are performing below 50%. Class average (64.2) is 6 points
                  below the departmental benchmark. Suggested intervention:
                  revision session on normalisation before the exam window.
                </Text>
              </Box>
              <Group gap={8} mt={16}>
                <Badge size="sm" color="red" variant="dot">
                  Faith Wanjiku — 47/100
                </Badge>
                <Badge size="sm" color="red" variant="dot">
                  Brian Omondi — 42/100
                </Badge>
                <Badge size="sm" color="orange" variant="dot">
                  +7 more
                </Badge>
              </Group>
            </Paper>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 5 }}>
            <Paper
              radius="xl"
              p="xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                height: "100%",
              }}
            >
              <Group gap={8} mb={16}>
                <ThemeIcon
                  size={32}
                  radius="md"
                  style={{ background: "rgba(0,200,150,0.15)" }}
                >
                  <IconBrain size={16} color="#4ddab6" />
                </ThemeIcon>
                <Text fw={700} fz={13} c="white">
                  Student Feedback
                </Text>
                <Badge
                  size="xs"
                  style={{
                    background: "rgba(0,200,150,0.2)",
                    color: "#4ddab6",
                  }}
                  ml="auto"
                >
                  Personal
                </Badge>
              </Group>
              <Text fz={12} c="rgba(255,255,255,0.35)" mb={12}>
                Faith Wanjiku · CS/2021/043 · Today, 06:04 AM
              </Text>
              <Box
                p="md"
                style={{
                  background: "rgba(0,200,150,0.06)",
                  borderRadius: rem(12),
                  border: "1px solid rgba(0,200,150,0.15)",
                }}
              >
                <Text
                  fz={13}
                  c="rgba(255,255,255,0.75)"
                  lh={1.7}
                  style={{ fontStyle: "italic" }}
                >
                  "Faith scored 12/30 on CAT 1 and 15/30 on CAT 2 (class
                  averages: 18.4 and 20.1). Her exam score of 34/70 is 17 points
                  below the class average of 51.3. Recommended focus areas: core
                  database normalisation concepts and SQL query optimisation."
                </Text>
              </Box>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
