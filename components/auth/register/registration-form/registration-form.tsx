"use client";

import { useState } from "react";
import { Box, Group, Stepper, Text, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { steps } from "@/lib/utils/constants/data";
import Personal from "../steps/personal";
import Professional from "../steps/professional";
import FormNavigation from "./form-navigation";
import Link from "next/link";

const RegistrationForm = () => {
  const [active, setActive] = useState(0);

  const form = useForm<RegisterUser>({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      staffId: "",
      department: "",
      rank: "",
    },
    validate: {
      fullName: (value) =>
        value.trim().length > 0 ? null : "Full name is required",
      email: (value) =>
        /^\S+@\S+\.\S+$/.test(value) ? null : "Enter a valid email address",
      staffId: (value) =>
        value.trim().length > 0 ? null : "Staff ID is required",
      department: (value) =>
        value.length > 0 ? null : "Please select a department",
      rank: (value) => (value.length > 0 ? null : "Please select a rank"),
    },
    validateInputOnChange: true,
  });

  const stepFields: Record<number, (keyof typeof form.values)[]> = {
    0: ["fullName", "email"],
    1: ["staffId", "department", "rank"],
  };

  const isStepValid = () =>
    stepFields[active].every((field) => {
      const error = form.validateField(field).hasError;
      return !error && form.values[field].toString().trim().length > 0;
    });

  const handleNext = () => {
    const fields = stepFields[active];
    const result = form.validate();
    const stepHasErrors = fields.some((f) => result.errors[f]);
    if (!stepHasErrors) {
      if (active < steps.length - 1) {
        setActive((a) => a + 1);
      } else {
        console.log(form.values);
      }
    }
  };

  return (
    <Box style={{ width: "100%", maxWidth: 400 }}>
      <Text
        fz={11}
        fw={700}
        c="indigo.5"
        mb={6}
        style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}
      >
        Lecturer Registration
      </Text>
      <Title order={2} fz={24} fw={800} c="dark.9" mb={2}>
        Create your account
      </Title>
      <Text fz={13} c="dimmed" mb={28}>
        Already registered?{" "}
        <Text
          component={Link}
          href="/login"
          span
          c="indigo.5"
          fw={600}
          style={{ cursor: "pointer" }}
        >
          Sign in
        </Text>
      </Text>

      <Stepper
        active={active}
        color="indigo"
        size="xs"
        radius="xl"
        mb={28}
        styles={{ stepLabel: { fontSize: 11, fontWeight: 600 } }}
      >
        {steps.map((s) => (
          <Stepper.Step key={s} label={s} />
        ))}
      </Stepper>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleNext();
        }}
      >
        {active === 0 && <Personal form={form} />}

        {active === 1 && <Professional form={form} />}

        <FormNavigation active={active} setActive={setActive} />
      </form>

      <Group justify="center" gap={6} mt={20}>
        {steps.map((_, i) => (
          <Box
            key={i}
            style={{
              width: i === active ? 20 : 7,
              height: 7,
              borderRadius: 4,
              background:
                i === active ? "#6366f1" : i < active ? "#14b8a6" : "#e2e8f0",
              transition: "all 0.25s ease",
            }}
          />
        ))}
      </Group>

      <Text fz={11} c="dimmed" ta="center" mt={16} lh={1.7}>
        Student accounts are created by lecturers after login.
      </Text>
    </Box>
  );
};

export default RegistrationForm;
