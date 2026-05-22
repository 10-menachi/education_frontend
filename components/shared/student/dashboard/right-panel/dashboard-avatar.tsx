import { student } from "@/lib/utils/constants";
import {
  Avatar,
  Badge,
  Button,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
} from "@mantine/core";

interface Props {
  setTranscriptModalOpen: (open: boolean) => void;
}

const DashboardAvatar = ({ setTranscriptModalOpen }: Props) => {
  return (
    <Paper radius="lg" p="lg" shadow="sm">
      <Stack align="center" gap={6}>
        <Avatar size={60} radius="xl" color="teal" fw={700} fz={22}>
          FW
        </Avatar>
        <Text fw={700} fz={15} mt={4}>
          {student.name}
        </Text>
        <Text fz={11} c="dimmed" ta="center">
          {student.department}
        </Text>
        <Badge color="teal" radius="xl" size="sm">
          {student.year}
        </Badge>
      </Stack>
      <Divider my="md" />
      <Stack gap={6}>
        <Group justify="space-between">
          <Text fz={12} c="dimmed">
            Reg. Number
          </Text>
          <Text fz={12} fw={600}>
            {student.reg}
          </Text>
        </Group>
        <Group justify="space-between">
          <Text fz={12} c="dimmed">
            AVR Grade
          </Text>
          <Text fz={12} fw={700} c="teal.6">
            {student.overallGrade}/100
          </Text>
        </Group>
        <Group justify="space-between">
          <Text fz={12} c="dimmed">
            Units Enrolled
          </Text>
          <Text fz={12} fw={600}>
            4
          </Text>
        </Group>
      </Stack>
      <Button
        fullWidth
        mt="md"
        color="teal"
        radius="xl"
        size="sm"
        onClick={() => setTranscriptModalOpen(true)}
      >
        View Full Transcript
      </Button>
    </Paper>
  );
};

export default DashboardAvatar;
