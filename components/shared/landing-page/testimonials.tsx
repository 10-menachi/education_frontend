import { testimonials } from "@/lib/utils/constants/data";
import {
  Avatar,
  Badge,
  Box,
  Container,
  Divider,
  Group,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { IconQuote } from "@tabler/icons-react";

export default function Testimonials() {
  return (
    <Box py={100} style={{ background: "#f8fafc" }}>
      <Container size="xl">
        <Box ta="center" mb={64}>
          <Badge color="teal" variant="light" size="lg" radius="xl" mb={16}>
            From the pilot
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
            Lecturers who've seen it
          </Title>
        </Box>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
          {testimonials.map((t) => (
            <Paper
              key={t.name}
              radius="xl"
              p="xl"
              shadow="sm"
              style={{
                background: "#fff",
                border: "1px solid #f1f5f9",
                position: "relative",
              }}
            >
              <IconQuote
                size={32}
                color={t.color}
                style={{ opacity: 0.2, marginBottom: 16 }}
              />
              <Text
                fz={15}
                c="dark.6"
                lh={1.8}
                mb={24}
                style={{ fontStyle: "italic" }}
              >
                "{t.quote}"
              </Text>
              <Divider mb={20} />
              <Group gap={12}>
                <Avatar
                  size={40}
                  radius="xl"
                  style={{
                    background: t.color,
                    color: "#fff",
                    fontWeight: 700,
                  }}
                >
                  {t.initials}
                </Avatar>
                <Box>
                  <Text fz={13} fw={700} c="dark.8">
                    {t.name}
                  </Text>
                  <Text fz={11} c="dimmed">
                    {t.role}
                  </Text>
                </Box>
              </Group>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
