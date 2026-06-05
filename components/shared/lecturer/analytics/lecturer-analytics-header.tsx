"use client";

import { Box, Button, Flex, Group, Text, Title, Select } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import { useState } from "react";

export default function LecturerAnalyticsHeader() {
  const [dateRange, setDateRange] = useState<string | null>("semester");

  return (
    <Flex justify="space-between" align="flex-start" mb="xl">
      <Box>
        <Title order={2} fz={26} fw={800} c="dark.9" lh={1.2}>
          Analytics
        </Title>
        <Text fz={14} c="dimmed" mt={4}>
          Monitor your teaching performance and student engagement
        </Text>
      </Box>
      <Group gap={12}>
        <Select
          placeholder="Select period"
          data={[
            { value: "week", label: "This Week" },
            { value: "month", label: "This Month" },
            { value: "semester", label: "This Semester" },
            { value: "year", label: "This Year" },
          ]}
          value={dateRange}
          onChange={setDateRange}
          style={{ minWidth: 180 }}
        />
        <Button
          size="sm"
          variant="light"
          color="indigo"
          leftSection={<IconDownload size={14} />}
          radius="xl"
        >
          Export Report
        </Button>
      </Group>
    </Flex>
  );
}
