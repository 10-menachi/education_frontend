import { howItWorks } from "@/lib/utils/constants/data";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <Box py={100} style={{ background: "#fff" }}>
      <Container size="xl">
        <Grid gap={80} align="center">
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Badge color="teal" variant="light" size="lg" radius="xl" mb={20}>
              How it works
            </Badge>
            <Title
              order={2}
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: 800,
                color: "#0f172a",
                lineHeight: 1.15,
                marginBottom: 20,
              }}
            >
              From zero to AI-powered grading in one afternoon
            </Title>
            <Text fz={16} c="dark.4" lh={1.8} mb={32}>
              No server setup. No IT ticket. No institutional license. A single
              lecturer can get their entire class running in under an hour.
            </Text>
            <Button
              component={Link}
              href="/register"
              size="md"
              radius="xl"
              fw={600}
              rightSection={<IconArrowRight size={16} />}
              style={{
                background: "linear-gradient(135deg, #00c896, #009973)",
              }}
            >
              Register
            </Button>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 7 }}>
            <Stack gap="lg">
              {howItWorks.map((step, i) => (
                <Flex key={step.step} gap={20} align="flex-start">
                  <Box style={{ flexShrink: 0 }}>
                    <Box
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 16,
                        background:
                          i === 0
                            ? "linear-gradient(135deg, #00c896, #009973)"
                            : "#f1f5f9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        fw={800}
                        fz={15}
                        style={{ fontFamily: "'Sora', sans-serif" }}
                        c={i === 0 ? "white" : "dark.4"}
                      >
                        {step.step}
                      </Text>
                    </Box>
                    {i < howItWorks.length - 1 && (
                      <Box
                        style={{
                          width: 2,
                          height: 24,
                          background: "#e2e8f0",
                          margin: "6px auto",
                        }}
                      />
                    )}
                  </Box>
                  <Box pt={10}>
                    <Text fw={700} fz={16} c="dark.8" mb={6}>
                      {step.title}
                    </Text>
                    <Text fz={14} c="dark.4" lh={1.7}>
                      {step.body}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
