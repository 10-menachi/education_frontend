import {
  Badge,
  Box,
  Grid,
  Group,
  Paper,
  rem,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { IconUsers } from "@tabler/icons-react";

const LecturerDigest = () => {
  return (
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
            are performing below 50%. Class average (64.2) is 6 points below the
            departmental benchmark. Suggested intervention: revision session on
            normalisation before the exam window.
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
  );
};

export default LecturerDigest;
