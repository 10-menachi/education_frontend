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
import LecturerAtRiskTableTitle from "./lecturer-at-risk-table-title";
import LecturerAtRiskTableBody from "./lecturer-at-risk-table-body";

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
        <LecturerAtRiskTableTitle />

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
              <LecturerAtRiskTableBody
                i={i}
                s={{ ...s, score: String(s.score) }}
              />
            ))}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </Paper>
  );
}
