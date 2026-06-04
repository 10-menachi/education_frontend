import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import { IconBrain } from "@tabler/icons-react";

export default function Footer() {
  return (
    <Box
      style={{
        background: "#0f172a",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <Container size="xl" py={60}>
        <Grid gap={48} mb={48}>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Group gap={10} mb={16}>
              <Box
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 9,
                  background: "linear-gradient(135deg, #00c896, #009973)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconBrain size={17} color="white" />
              </Box>
              <Text
                fw={800}
                fz={18}
                c="white"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Vibetech Education
              </Text>
            </Group>
            <Text fz={13} c="rgba(255,255,255,0.4)" lh={1.8} maw={280}>
              Lightweight, AI-powered grading for African universities. Built
              from surveying real lecturers. Not adapted from Western tools.
            </Text>
          </Grid.Col>

          {[
            {
              title: "Product",
              links: ["Features", "How it works", "Roadmap"],
            },
            { title: "Company", links: ["About", "Survey Data", "Contact"] },
            { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
          ].map((col) => (
            <Grid.Col span={{ base: 6, md: "auto" }} key={col.title}>
              <Text
                fz={12}
                fw={700}
                c="rgba(255,255,255,0.3)"
                mb={16}
                style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}
              >
                {col.title}
              </Text>
              <Stack gap={10}>
                {col.links.map((link) => (
                  <Text
                    key={link}
                    fz={13}
                    c="rgba(255,255,255,0.5)"
                    style={{ cursor: "pointer" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#00c896")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                    }
                  >
                    {link}
                  </Text>
                ))}
              </Stack>
            </Grid.Col>
          ))}
        </Grid>

        <Divider color="rgba(255,255,255,0.06)" mb={24} />

        <Flex justify="space-between" align="center" wrap="wrap" gap={12}>
          <Text fz={12} c="rgba(255,255,255,0.25)">
            © 2026 Vibetech Education. Built by Wamalwa Christian Timbe.
          </Text>
          <Text fz={12} c="rgba(255,255,255,0.25)">
            Powered by{" "}
            <Text span c="rgba(0,200,150,0.6)" fw={600}>
              Anthropic Claude
            </Text>
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
