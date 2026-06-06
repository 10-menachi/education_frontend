import { student } from "@/lib/utils/constants/data";
import { Box, Group, Text } from "@mantine/core";

const StudentInformation = () => {
  return (
    <Box>
      <Text fw={700} mb="xs">
        Student Information
      </Text>
      <Group justify="space-between" mb="sm">
        <Text fz={13} c="dimmed">
          Name
        </Text>
        <Text fz={13} fw={600}>
          {student.name}
        </Text>
      </Group>
      <Group justify="space-between" mb="sm">
        <Text fz={13} c="dimmed">
          Registration Number
        </Text>
        <Text fz={13} fw={600}>
          {student.reg}
        </Text>
      </Group>
      <Group justify="space-between">
        <Text fz={13} c="dimmed">
          Overall Grade
        </Text>
        <Text fz={13} fw={700} c="teal.6">
          {student.overallGrade}/100
        </Text>
      </Group>
    </Box>
  );
};

export default StudentInformation;
