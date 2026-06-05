import { Box, Stack, TextInput, Text, Title } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { IconMail, IconPhone, IconUser } from "@tabler/icons-react";

interface Props {
  form: UseFormReturnType<RegisterUser>;
}

const Personal = ({ form }: Props) => {
  return (
    <Stack gap={14} mb={24}>
      <Box mb={4}>
        <Title order={3} fz={18} fw={800} c="dark.9" mb={2}>
          Personal details
        </Title>
        <Text fz={12} c="dimmed">
          Your name and contact information.
        </Text>
      </Box>
      <TextInput
        label="Full Name"
        placeholder="Kamau Njoroge"
        leftSection={<IconUser size={14} />}
        radius="md"
        {...form.getInputProps("fullName")}
      />
      <TextInput
        label="Institutional Email"
        placeholder="k.njoroge@university.edu"
        leftSection={<IconMail size={14} />}
        radius="md"
        description="Your login credentials will be sent here once approved."
        {...form.getInputProps("email")}
      />
      <TextInput
        label="Phone Number (optional)"
        placeholder="+254 700 000 000"
        leftSection={<IconPhone size={14} />}
        radius="md"
        {...form.getInputProps("phone")}
      />
    </Stack>
  );
};

export default Personal;
