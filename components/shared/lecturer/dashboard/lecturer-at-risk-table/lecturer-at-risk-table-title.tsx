import { Box, Group, Text, ThemeIcon } from "@mantine/core";
import { IconAlertTriangle } from "@tabler/icons-react";
import React from "react";

const LecturerAtRiskTableTitle = () => {
  return (
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
  );
};

export default LecturerAtRiskTableTitle;
