import { atRiskStudents } from "@/lib/utils/constants/data";
import { gradeColor } from "@/lib/utils/helpers";
import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Group,
  Paper,
  ScrollArea,
  Table,
  Text,
  ThemeIcon,
  Tooltip,
} from "@mantine/core";
import {
  IconAlertTriangle,
  IconMail,
  IconRefresh,
  IconSend,
  IconUser,
} from "@tabler/icons-react";

export default function LecturerAtRiskTable() {
  return (
    <Paper radius="lg" shadow="sm" mb="xl" style={{ overflow: "hidden" }}>
      <Flex
        align="center"
        justify="space-between"
        px="lg"
        py="md"
        style={{ borderBottom: "1px solid #f1f5f9" }}
      >
        <Group gap={8}>
          <ThemeIcon size={30} radius="md" color="rose" variant="light">
            <IconAlertTriangle size={15} />
          </ThemeIcon>
          <Box>
            <Text fw={700} fz={14} c="dark.8">
              At-Risk Students
            </Text>
            <Text fz={11} c="dimmed">
              AI-identified — requires intervention
            </Text>
          </Box>
        </Group>
        <Group gap={8}>
          <Button
            size="xs"
            variant="light"
            color="indigo"
            leftSection={<IconSend size={12} />}
          >
            Send Alerts
          </Button>
          <Button
            size="xs"
            variant="light"
            color="gray"
            leftSection={<IconRefresh size={12} />}
          >
            Refresh
          </Button>
        </Group>
      </Flex>

      <ScrollArea>
        <Table highlightOnHover style={{ minWidth: 800 }}>
          <Table.Thead style={{ background: "#f8fafc" }}>
            <Table.Tr>
              {[
                "Student",
                "Course",
                "CAT 1",
                "CAT 2",
                "Exam",
                "Total",
                "AI Note",
                "",
              ].map((h) => (
                <Table.Th
                  key={h}
                  style={{
                    fontSize: 11,
                    color: "#64748b",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {h}
                </Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {atRiskStudents.map((s, i) => (
              <Table.Tr key={i}>
                <Table.Td>
                  <Group gap={8}>
                    <Avatar size={30} radius="xl" color="rose" fz={11}>
                      {s.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </Avatar>
                    <Box>
                      <Text fz={12} fw={600}>
                        {s.name}
                      </Text>
                      <Text fz={10} c="dimmed">
                        {s.reg}
                      </Text>
                    </Box>
                  </Group>
                </Table.Td>
                <Table.Td>
                  <Text fz={12} c="dimmed">
                    {s.course}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Badge
                    size="sm"
                    color={parseInt(s.cat1) / 30 >= 0.6 ? "teal" : "orange"}
                    variant="light"
                  >
                    {s.cat1}
                  </Badge>
                </Table.Td>
                <Table.Td>
                  <Badge
                    size="sm"
                    color={parseInt(s.cat2) / 30 >= 0.6 ? "teal" : "orange"}
                    variant="light"
                  >
                    {s.cat2}
                  </Badge>
                </Table.Td>
                <Table.Td>
                  <Badge
                    size="sm"
                    color={parseInt(s.exam) / 70 >= 0.6 ? "teal" : "red"}
                    variant="light"
                  >
                    {s.exam}
                  </Badge>
                </Table.Td>
                <Table.Td>
                  <Text fz={13} fw={700} c={gradeColor(s.score)}>
                    {s.score}/100
                  </Text>
                </Table.Td>
                <Table.Td style={{ maxWidth: 220 }}>
                  <Text fz={11} c="dimmed" lineClamp={2}>
                    {s.reason}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Group gap={4}>
                    <Tooltip label="Send alert">
                      <ActionIcon
                        size="sm"
                        variant="light"
                        color="indigo"
                        radius="md"
                      >
                        <IconMail size={12} />
                      </ActionIcon>
                    </Tooltip>
                    <Tooltip label="View profile">
                      <ActionIcon
                        size="sm"
                        variant="light"
                        color="gray"
                        radius="md"
                      >
                        <IconUser size={12} />
                      </ActionIcon>
                    </Tooltip>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </Paper>
  );
}
