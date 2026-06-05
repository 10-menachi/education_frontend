import { gradeColor } from "@/lib/utils/helpers";
import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Group,
  Table,
  Text,
  Tooltip,
} from "@mantine/core";
import { IconMail, IconUser } from "@tabler/icons-react";

interface Props {
  i: number;
  s: {
    name: string;
    reg: string;
    course: string;
    cat1: string;
    cat2: string;
    exam: string;
    score: string;
    reason: string;
  };
}

const LecturerAtRiskTableBody = ({ i, s }: Props) => {
  return (
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
        <Text fz={13} fw={700} c={gradeColor(Number(s.score))}>
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
            <ActionIcon size="sm" variant="light" color="indigo" radius="md">
              <IconMail size={12} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="View profile">
            <ActionIcon size="sm" variant="light" color="gray" radius="md">
              <IconUser size={12} />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Table.Td>
    </Table.Tr>
  );
};

export default LecturerAtRiskTableBody;
