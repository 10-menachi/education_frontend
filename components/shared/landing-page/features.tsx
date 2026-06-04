import { features } from "@/lib/utils/constants/data";
import {
  Badge,
  Box,
  Container,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";

export default function Features() {
  return (
    <Box py={100} style={{ background: "#f8fafc" }}>
      <Container size="xl">
        <Box ta="center" mb={64}>
          <Badge color="teal" variant="light" size="lg" radius="xl" mb={16}>
            Features
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
            Everything lecturers actually need
          </Title>
          <Text fz={17} c="dark.4" mt={16} maw={560} mx="auto" lh={1.7}>
            Designed from 14 real lecturer interviews. No LMS bloat. No
            institutional IT dependency. Just the tools that make grading fast,
            accurate, and transparent.
          </Text>
        </Box>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
          {features.map((f) => (
            <Paper
              key={f.title}
              radius="xl"
              p="xl"
              style={{
                background: "#fff",
                border: "1px solid #f1f5f9",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 16px 40px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <Box
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  marginBottom: 20,
                  background: `${f.color}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <f.icon size={24} color={f.color} />
              </Box>
              <Text fw={700} fz={16} c="dark.8" mb={10}>
                {f.title}
              </Text>
              <Text fz={14} c="dark.4" lh={1.7}>
                {f.description}
              </Text>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
