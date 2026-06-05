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
import { IconBrain } from "@tabler/icons-react";

const StudentFeedback = () => {
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
            "Faith scored 12/30 on CAT 1 and 15/30 on CAT 2 (class averages:
            18.4 and 20.1). Her exam score of 34/70 is 17 points below the class
            average of 51.3. Recommended focus areas: core database
            normalisation concepts and SQL query optimisation."
          </Text>
        </Box>
      </Paper>
    </Grid.Col>
  );
};

export default StudentFeedback;
