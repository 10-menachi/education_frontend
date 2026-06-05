"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Group,
  MantineProvider,
  PasswordInput,
  Text,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconArrowLeft, IconCheck, IconLock } from "@tabler/icons-react";
import { theme } from "@/lib/utils/constants/localization";
import LeftPanel from "@/components/auth/left-panel";

export default function ResetPasswordPage() {
  const [done, setDone] = useState(false);

  const form = useForm({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validate: {
      password: (value) =>
        value.length >= 6 ? null : "Password must be at least 6 characters",
      confirmPassword: (value, values) =>
        value === values.password ? null : "Passwords don't match",
    },
    validateInputOnChange: true,
  });

  const handleSubmit = (values: typeof form.values) => {
    // call your backend here
    console.log(values);
    setDone(true);
  };

  return (
    <MantineProvider theme={theme}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');*{box-sizing:border-box;}body{margin:0;}`}</style>
      <Flex style={{ height: "100vh", overflow: "hidden" }}>
        <Box style={{ width: "42%", flexShrink: 0 }}>
          <LeftPanel />
        </Box>

        <Flex
          flex={1}
          align="center"
          justify="center"
          style={{ background: "#f8fafc", padding: "40px 32px" }}
        >
          {done ? (
            <Box ta="center" style={{ maxWidth: 320 }}>
              <Box
                mx="auto"
                mb={20}
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #14b8a6, #6366f1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconCheck size={30} color="white" />
              </Box>
              <Title order={2} fz={22} fw={800} c="dark.9" mb={8}>
                Password reset!
              </Title>
              <Text fz={13} c="dimmed" lh={1.8} mb={28}>
                Your password has been updated successfully. You can now sign in
                with your new credentials.
              </Text>
              <Button
                radius="xl"
                color="indigo"
                fullWidth
                leftSection={<IconArrowLeft size={13} />}
              >
                Go to Login
              </Button>
            </Box>
          ) : (
            <Box style={{ width: "100%", maxWidth: 380 }}>
              <Text
                fz={11}
                fw={700}
                c="indigo.5"
                mb={6}
                style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}
              >
                Password Reset
              </Text>
              <Title order={2} fz={24} fw={800} c="dark.9" mb={2}>
                Set a new password
              </Title>
              <Text fz={13} c="dimmed" mb={28}>
                Must be at least 6 characters.
              </Text>

              <form onSubmit={form.onSubmit(handleSubmit)}>
                <Box mb={14}>
                  <PasswordInput
                    label="New Password"
                    placeholder="Min. 6 characters"
                    leftSection={<IconLock size={14} />}
                    radius="md"
                    {...form.getInputProps("password")}
                  />
                </Box>

                <Box mb={24}>
                  <PasswordInput
                    label="Confirm Password"
                    placeholder="Repeat new password"
                    leftSection={<IconLock size={14} />}
                    radius="md"
                    {...form.getInputProps("confirmPassword")}
                  />
                </Box>

                <Button
                  type="submit"
                  fullWidth
                  radius="xl"
                  size="md"
                  color="indigo"
                  disabled={!form.isValid()}
                >
                  Reset Password
                </Button>
              </form>

              <Flex justify="center" mt={20}>
                <Group gap={6} style={{ cursor: "pointer" }}>
                  <IconArrowLeft size={13} color="#6366f1" />
                  <Text fz={13} c="indigo.5" fw={600}>
                    Back to Login
                  </Text>
                </Group>
              </Flex>
            </Box>
          )}
        </Flex>
      </Flex>
    </MantineProvider>
  );
}
