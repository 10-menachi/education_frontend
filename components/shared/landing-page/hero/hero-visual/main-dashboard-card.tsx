import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Group,
  Paper,
  Text,
} from "@mantine/core";
import { IconBrain, IconFileSpreadsheet } from "@tabler/icons-react";

const MainDashboardCard = () => {
  return (
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
  );
};

export default MainDashboardCard;
