"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Group,
  MantineProvider,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconArrowLeft, IconCheck, IconMail } from "@tabler/icons-react";
import { theme } from "@/lib/utils/constants/localization";
import LeftPanel from "@/components/auth/left-panel";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  const form = useForm({
    initialValues: {
      email: "",
    },
    validate: {
      email: (value) =>
        /^\S+@\S+\.\S+$/.test(value) ? null : "Enter a valid email address",
    },
    validateInputOnChange: true,
  });

  const handleSubmit = (values: typeof form.values) => {
    // call your backend here
    console.log(values);
    setSent(true);
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
          {sent ? (
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
                Check your inbox
              </Title>
              <Text fz={13} c="dimmed" lh={1.8} mb={6}>
                We've sent a password reset link to
              </Text>
              <Text fz={13} fw={600} c="dark.8" mb={28}>
                {form.values.email}
              </Text>
              <Text fz={11} c="dimmed" lh={1.7} mb={28}>
                Didn't receive it? Check your spam folder or{" "}
                <Text
                  span
                  c="indigo.5"
                  fw={600}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setSent(false);
                    form.reset();
                  }}
                >
                  try again
                </Text>
                .
              </Text>
              <Button
                radius="xl"
                color="indigo"
                variant="light"
                fullWidth
                leftSection={<IconArrowLeft size={13} />}
              >
                Back to Login
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
                Forgot your password?
              </Title>
              <Text fz={13} c="dimmed" mb={28}>
                No worries. Enter your email and we'll send you a reset link.
              </Text>

              <form onSubmit={form.onSubmit(handleSubmit)}>
                <Box mb={24}>
                  <TextInput
                    label="Email Address"
                    placeholder="your@university.edu"
                    leftSection={<IconMail size={14} />}
                    radius="md"
                    {...form.getInputProps("email")}
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
                  Send Reset Link
                </Button>
              </form>

              <Flex justify="center" mt={20}>
                <Group gap={6} style={{ cursor: "pointer" }}>
                  <IconArrowLeft size={13} color="#6366f1" />
                  <Text
                    component={Link}
                    href="/login"
                    fz={13}
                    c="indigo.5"
                    fw={600}
                  >
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
