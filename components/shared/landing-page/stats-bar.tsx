import { landingPageStats } from "@/lib/utils/constants/data";
import { Box, Container, SimpleGrid, Text } from "@mantine/core";

export default function StatsBar() {
  return (
    <Box style={{ background: "#0f172a" }}>
      <Container size="xl" py={48}>
        <Text
          fz={11}
          fw={600}
          ta="center"
          mb={32}
          c="rgba(255,255,255,0.3)"
          style={{ textTransform: "uppercase", letterSpacing: "0.12em" }}
        >
          From a 14-respondent survey of Kenyan university lecturers
        </Text>
        <SimpleGrid cols={{ base: 2, md: 4 }} spacing="xl">
          {landingPageStats.map((s) => (
            <Box key={s.value} ta="center">
              <Text
                fz={42}
                fw={800}
                lh={1}
                style={{
                  fontFamily: "'Sora', sans-serif",
                  background: "linear-gradient(135deg, #00c896, #4ddab6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.value}
              </Text>
              <Text fz={13} c="rgba(255,255,255,0.45)" mt={8} lh={1.5}>
                {s.label}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
