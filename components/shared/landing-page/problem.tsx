import { problems } from "@/lib/utils/constants/data";
import {
  Badge,
  Box,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";

export default function Problem() {
  return (
    <Box py={100} style={{ background: "#fff" }}>
      <Container size="xl">
        <Box ta="center" mb={64}>
          <Badge color="red" variant="light" size="lg" radius="xl" mb={16}>
            The Problem
          </Badge>
          <Title
            order={2}
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "#0f172a",
            }}
          >
            African universities deserve better tools
          </Title>
          <Text fz={17} c="dark.4" mt={16} maw={560} mx="auto" lh={1.7}>
            Existing LMS platforms were built for Western universities with IT
            departments, institutional licenses, and reliable infrastructure.
            They don't fit here.
          </Text>
        </Box>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          {problems.map((p) => (
            <Paper
              key={p.title}
              radius="xl"
              p="xl"
              style={{
                background: "#fafafa",
                border: "1px solid #f1f5f9",
              }}
            >
              <Group gap={14} mb={14} align="flex-start">
                <Box
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    flexShrink: 0,
                    background: `${p.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p.icon size={22} color={p.color} />
                </Box>
                <Text fw={700} fz={16} c="dark.8" pt={10}>
                  {p.title}
                </Text>
              </Group>
              <Text fz={14} c="dark.4" lh={1.75}>
                {p.body}
              </Text>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
