"use client";

import {
  Button,
  Box,
  Flex,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconLock, IconMail } from "@tabler/icons-react";
import Link from "next/link";

const LoginForm = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) =>
        /^\S+@\S+\.\S+$/.test(value) ? null : "Enter a valid email address",
      password: (value) => (value.length > 0 ? null : "Password is required"),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
  };

  return (
    <Flex
      flex={1}
      align="center"
      justify="center"
      style={{ background: "#f8fafc", padding: "40px 32px" }}
    >
      <Box style={{ width: "100%", maxWidth: 380 }}>
        <Text
          fz={11}
          fw={700}
          c="indigo.5"
          mb={6}
          style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}
        >
          Sign In
        </Text>
        <Title order={2} fz={24} fw={800} c="dark.9" mb={2}>
          Welcome back
        </Title>
        <Text fz={13} c="dimmed" mb={28}>
          Don't have an account?{" "}
          <Text
            component={Link}
            href="/register"
            span
            c="indigo.5"
            fw={600}
            style={{ cursor: "pointer" }}
          >
            Register here
          </Text>
        </Text>

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Box mb={14}>
            <TextInput
              label="Email Address"
              placeholder="your@university.edu"
              leftSection={<IconMail size={14} />}
              radius="md"
              {...form.getInputProps("email")}
            />
          </Box>

          <Box mb={6}>
            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              leftSection={<IconLock size={14} />}
              radius="md"
              {...form.getInputProps("password")}
            />
          </Box>

          <Flex justify="flex-end" mb={24}>
            <Text
              component={Link}
              href="/forgot-password"
              fz={12}
              c="indigo.5"
              fw={600}
              style={{ cursor: "pointer" }}
            >
              Forgot password?
            </Text>
          </Flex>

          <Button
            type="submit"
            fullWidth
            radius="xl"
            size="md"
            color="indigo"
            disabled={!form.isValid()}
          >
            Sign In
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default LoginForm;
