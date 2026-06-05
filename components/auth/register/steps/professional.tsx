import { departments, ranks } from "@/lib/utils/constants/data";
import { Box, Stack, TextInput, Text, Title, Select } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { IconId } from "@tabler/icons-react";

interface Props {
  form: UseFormReturnType<RegisterUser>;
}

const Professional = ({ form }: Props) => {
  return (
    <Stack gap={14} mb={24}>
      <Box mb={4}>
        <Title order={3} fz={18} fw={800} c="dark.9" mb={2}>
          Professional details
        </Title>
        <Text fz={12} c="dimmed">
          Your department and staff information.
        </Text>
      </Box>
      <TextInput
        label="Staff ID"
        placeholder="STR/LECT/2024/001"
        leftSection={<IconId size={14} />}
        radius="md"
        description="Your institution-issued staff number."
        {...form.getInputProps("staffId")}
      />
      <Select
        label="Department"
        placeholder="Select department"
        data={departments}
        searchable
        radius="md"
        {...form.getInputProps("department")}
      />
      <Select
        label="Academic Rank"
        placeholder="Select rank"
        data={ranks}
        radius="md"
        {...form.getInputProps("rank")}
      />
    </Stack>
  );
};

export default Professional;
