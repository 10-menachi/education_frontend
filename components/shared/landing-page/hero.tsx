import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Group,
  Paper,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconArrowRight,
  IconBolt,
  IconBrain,
  IconFileSpreadsheet,
  IconShieldCheck,
  IconStar,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Hero() {
  return (
    <Box
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(160deg, #f0fdf9 0%, #e6faf5 30%, #fafffe 60%, #f8fafc 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: -120,
          right: -100,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,200,150,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Box
        style={{
          position: "absolute",
          bottom: -80,
          left: -80,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container size="xl" py={160} style={{ position: "relative", zIndex: 1 }}>
        <Grid gap={60} align="center">
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
              real-time student results, and nightly AI insights delivered
              straight to your inbox.
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

          {/* Hero visual */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box style={{ position: "relative" }}>
              {/* Floating AI alert card */}
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
                  Faith scored 34/70 on the exam — 17 pts below class avg.
                  Recommend SQL revision before resit.
                </Text>
                <Badge color="red" size="xs" mt={8} radius="xl">
                  ⚠ At Risk
                </Badge>
              </Paper>

              {/* Main dashboard card */}
              <Paper
                radius="2xl"
                p="xl"
                shadow="xl"
                style={{
                  background: "#fff",
                  border: "1px solid #e6faf5",
                  overflow: "hidden",
                  marginTop: 20,
                }}
              >
                <Flex align="center" justify="space-between" mb={20}>
                  <Text fw={700} fz={14} c="dark.8">
                    CS 301 — Database Systems
                  </Text>
                  <Badge color="teal" size="sm">
                    48 students
                  </Badge>
                </Flex>

                <Box mb={20}>
                  <Flex justify="space-between" mb={6}>
                    <Text fz={12} c="dimmed">
                      Class Average
                    </Text>
                    <Text fz={12} fw={700} c="orange">
                      64.2/100
                    </Text>
                  </Flex>
                  <Box
                    style={{
                      height: 8,
                      background: "#f1f5f9",
                      borderRadius: 99,
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      style={{
                        height: "100%",
                        width: "64.2%",
                        background: "linear-gradient(90deg, #fb923c, #f59e0b)",
                        borderRadius: 99,
                      }}
                    />
                  </Box>
                </Box>

                {[
                  { name: "Faith Wanjiku", score: 47, risk: true },
                  { name: "Aisha Kamau", score: 74, risk: false },
                  { name: "Brian Omondi", score: 42, risk: true },
                  { name: "Cynthia Akinyi", score: 68, risk: false },
                ].map((s, i) => (
                  <Flex
                    key={i}
                    align="center"
                    justify="space-between"
                    py={8}
                    style={{
                      borderBottom: i < 3 ? "1px solid #f8f9fa" : "none",
                    }}
                  >
                    <Group gap={8}>
                      <Avatar
                        size={28}
                        radius="xl"
                        color={s.risk ? "red" : "teal"}
                        fz={10}
                      >
                        {s.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </Avatar>
                      <Text fz={12} fw={500} c="dark.7">
                        {s.name}
                      </Text>
                    </Group>
                    <Group gap={8}>
                      <Text fz={12} fw={700} c={s.risk ? "red" : "teal"}>
                        {s.score}/100
                      </Text>
                      {s.risk && (
                        <Badge color="red" size="xs" variant="light">
                          At Risk
                        </Badge>
                      )}
                    </Group>
                  </Flex>
                ))}

                <Flex mt={16} gap={8}>
                  <Button
                    size="xs"
                    color="teal"
                    variant="light"
                    flex={1}
                    leftSection={<IconFileSpreadsheet size={12} />}
                  >
                    Export Excel
                  </Button>
                  <Button
                    size="xs"
                    color="indigo"
                    variant="light"
                    flex={1}
                    leftSection={<IconBrain size={12} />}
                  >
                    AI Insights
                  </Button>
                </Flex>
              </Paper>

              {/* Floating stat */}
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
            </Box>
          </Grid.Col>
        </Grid>
      </Container>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </Box>
  );
}
