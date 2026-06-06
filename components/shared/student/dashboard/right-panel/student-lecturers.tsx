import { lecturers } from "@/lib/utils/constants/data";
import {
  Avatar,
  Box,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { IconUsers } from "@tabler/icons-react";

const StudentLecturers = () => {
  return (
    <Paper radius="lg" p="lg" shadow="sm">
      <Group mb="md" gap={8}>
        <ThemeIcon size={28} radius="md" color="grape" variant="light">
          <IconUsers size={15} />
        </ThemeIcon>
        <Text fw={700} fz={14} c="dark.7">
          Your Lecturers
        </Text>
      </Group>
      <Stack gap={10}>
        {lecturers.map((l) => (
          <Group key={l.name} gap={10}>
            <Avatar size={36} radius="xl" color="grape">
              {l.initials}
            </Avatar>
            <Box>
              <Text fz={12} fw={600}>
                {l.name}
              </Text>
              <Text fz={11} c="dimmed" lineClamp={1}>
                {l.unit}
              </Text>
            </Box>
          </Group>
        ))}
      </Stack>
    </Paper>
  );
};

export default StudentLecturers;
