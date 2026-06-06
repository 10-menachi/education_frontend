"use client";

import { useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Group,
  Modal,
  Paper,
  PasswordInput,
  Select,
  Stack,
  Switch,
  Tabs,
  Text,
  TextInput,
  ThemeIcon,
  Title,
  Slider,
  NumberInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  IconAlertTriangle,
  IconBrain,
  IconBell,
  IconCheck,
  IconDevices,
  IconId,
  IconLock,
  IconLogout,
  IconMail,
  IconPhone,
  IconSettings,
  IconShieldCheck,
  IconTrash,
  IconUser,
  IconBuildingCommunity,
} from "@tabler/icons-react";
import { lecturer, departments, ranks } from "@/lib/utils/constants/data";

// ─── Profile Tab ──────────────────────────────────────────────────────────────
function ProfileTab() {
  const [saved, setSaved] = useState(false);

  const form = useForm({
    initialValues: {
      name: lecturer.name,
      email: lecturer.email,
      phone: "+254 700 000 000",
      department: lecturer.department,
      rank: "Senior Lecturer",
      staffId: lecturer.employeeId,
    },
    validate: {
      name: (v) => (v.trim().length > 0 ? null : "Name is required"),
      email: (v) => (/^\S+@\S+\.\S+$/.test(v) ? null : "Invalid email"),
    },
    validateInputOnChange: true,
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <Stack gap="xl">
      {/* Avatar row */}
      <Paper radius="lg" p="lg" shadow="sm">
        <Group gap={20}>
          <Avatar size={72} radius="xl" color="indigo" fw={700} fz={24}>
            {lecturer.avatar}
          </Avatar>
          <Box>
            <Text fz={15} fw={700} c="dark.8">
              {lecturer.name}
            </Text>
            <Text fz={12} c="dimmed" mb={10}>
              {lecturer.email}
            </Text>
            <Group gap={8}>
              <Button size="xs" variant="light" color="indigo" radius="xl">
                Change Photo
              </Button>
              <Button size="xs" variant="subtle" color="gray" radius="xl">
                Remove
              </Button>
            </Group>
          </Box>
        </Group>
      </Paper>

      {/* Form */}
      <Paper radius="lg" p="lg" shadow="sm">
        <Text fw={700} fz={14} c="dark.8" mb="lg">
          Personal Information
        </Text>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack gap={14}>
            <TextInput
              label="Full Name"
              leftSection={<IconUser size={14} />}
              radius="md"
              {...form.getInputProps("name")}
            />
            <TextInput
              label="Institutional Email"
              leftSection={<IconMail size={14} />}
              radius="md"
              description="Contact your administrator to change your email."
              disabled
              {...form.getInputProps("email")}
            />
            <TextInput
              label="Phone Number"
              leftSection={<IconPhone size={14} />}
              radius="md"
              {...form.getInputProps("phone")}
            />
            <Divider label="Professional" labelPosition="left" />
            <TextInput
              label="Staff ID"
              leftSection={<IconId size={14} />}
              radius="md"
              disabled
              description="Staff ID cannot be changed. Contact HR if this is incorrect."
              {...form.getInputProps("staffId")}
            />
            <Select
              label="Department"
              leftSection={<IconBuildingCommunity size={14} />}
              data={departments}
              radius="md"
              searchable
              {...form.getInputProps("department")}
            />
            <Select
              label="Academic Rank"
              leftSection={<IconUser size={14} />}
              data={ranks}
              radius="md"
              {...form.getInputProps("rank")}
            />
            <Group justify="flex-end" mt={4}>
              <Button
                type="submit"
                radius="xl"
                color="indigo"
                leftSection={saved ? <IconCheck size={14} /> : undefined}
                disabled={!form.isValid()}
              >
                {saved ? "Saved!" : "Save Changes"}
              </Button>
            </Group>
          </Stack>
        </form>
      </Paper>
    </Stack>
  );
}

// ─── Password Tab ─────────────────────────────────────────────────────────────
function PasswordTab() {
  const [done, setDone] = useState(false);

  const form = useForm({
    initialValues: {
      current: "",
      password: "",
      confirm: "",
    },
    validate: {
      current: (v) => (v.length > 0 ? null : "Current password is required"),
      password: (v) => (v.length >= 6 ? null : "Must be at least 6 characters"),
      confirm: (v, values) =>
        v === values.password ? null : "Passwords don't match",
    },
    validateInputOnChange: true,
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
    setDone(true);
    form.reset();
    setTimeout(() => setDone(false), 3000);
  };

  return (
    <Stack gap="xl" style={{ maxWidth: 480 }}>
      <Paper radius="lg" p="lg" shadow="sm">
        <Group gap={10} mb="lg">
          <ThemeIcon size={32} radius="md" color="indigo" variant="light">
            <IconLock size={16} />
          </ThemeIcon>
          <Box>
            <Text fw={700} fz={14} c="dark.8">
              Change Password
            </Text>
            <Text fz={11} c="dimmed">
              Choose a strong, unique password.
            </Text>
          </Box>
        </Group>

        {done && (
          <Box
            mb="md"
            p="sm"
            style={{
              background: "#f0fdfa",
              border: "1px solid #99f6e4",
              borderRadius: 10,
            }}
          >
            <Group gap={8}>
              <IconCheck size={14} color="#14b8a6" />
              <Text fz={12} c="teal.7" fw={600}>
                Password updated successfully.
              </Text>
            </Group>
          </Box>
        )}

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack gap={14}>
            <PasswordInput
              label="Current Password"
              placeholder="Enter current password"
              leftSection={<IconLock size={14} />}
              radius="md"
              {...form.getInputProps("current")}
            />
            <PasswordInput
              label="New Password"
              placeholder="Min. 6 characters"
              leftSection={<IconLock size={14} />}
              radius="md"
              {...form.getInputProps("password")}
            />
            <PasswordInput
              label="Confirm New Password"
              placeholder="Repeat new password"
              leftSection={<IconLock size={14} />}
              radius="md"
              {...form.getInputProps("confirm")}
            />
            <Group justify="flex-end">
              <Button
                type="submit"
                radius="xl"
                color="indigo"
                disabled={!form.isValid()}
              >
                Update Password
              </Button>
            </Group>
          </Stack>
        </form>
      </Paper>
    </Stack>
  );
}

// ─── Notifications Tab ────────────────────────────────────────────────────────
function NotificationsTab() {
  const [prefs, setPrefs] = useState({
    aiAlerts: true,
    atRiskEmails: true,
    resultsPublished: true,
    csvImport: true,
    weeklyDigest: false,
    inApp: true,
    emailEnabled: true,
  });

  const toggle = (key: keyof typeof prefs) =>
    setPrefs((p) => ({ ...p, [key]: !p[key] }));

  const sections = [
    {
      title: "Email Notifications",
      description: "Control what gets sent to your institutional email.",
      icon: IconMail,
      color: "indigo",
      items: [
        {
          key: "emailEnabled",
          label: "Email notifications",
          description: "Master toggle for all email alerts",
        },
        {
          key: "aiAlerts",
          label: "AI class alerts",
          description: "When nightly analysis flags issues in your classes",
        },
        {
          key: "atRiskEmails",
          label: "At-risk student alerts",
          description: "When new students are flagged below the threshold",
        },
        {
          key: "resultsPublished",
          label: "Results confirmation",
          description: "Confirmation when you publish marks",
        },
        {
          key: "weeklyDigest",
          label: "Weekly digest",
          description: "A summary of all class activity every Monday",
        },
      ],
    },
    {
      title: "In-App Notifications",
      description: "Control what appears in the notification bell.",
      icon: IconBell,
      color: "blue",
      items: [
        {
          key: "inApp",
          label: "In-app notifications",
          description: "Master toggle for bell notifications",
        },
        {
          key: "csvImport",
          label: "CSV import updates",
          description: "When a bulk student import completes",
        },
      ],
    },
  ];

  return (
    <Stack gap="lg">
      {sections.map((section) => (
        <Paper key={section.title} radius="lg" p="lg" shadow="sm">
          <Group gap={10} mb="lg">
            <ThemeIcon
              size={32}
              radius="md"
              color={section.color}
              variant="light"
            >
              <section.icon size={16} />
            </ThemeIcon>
            <Box>
              <Text fw={700} fz={14} c="dark.8">
                {section.title}
              </Text>
              <Text fz={11} c="dimmed">
                {section.description}
              </Text>
            </Box>
          </Group>
          <Stack gap={0}>
            {section.items.map((item, i) => (
              <Box key={item.key}>
                <Flex justify="space-between" align="center" py={14}>
                  <Box>
                    <Text fz={13} fw={600} c="dark.7">
                      {item.label}
                    </Text>
                    <Text fz={11} c="dimmed">
                      {item.description}
                    </Text>
                  </Box>
                  <Switch
                    checked={prefs[item.key as keyof typeof prefs]}
                    onChange={() => toggle(item.key as keyof typeof prefs)}
                    color="indigo"
                    radius="xl"
                  />
                </Flex>
                {i < section.items.length - 1 && <Divider />}
              </Box>
            ))}
          </Stack>
        </Paper>
      ))}
    </Stack>
  );
}

// ─── AI Preferences Tab ───────────────────────────────────────────────────────
function AIPreferencesTab() {
  const [cronEnabled, setCronEnabled] = useState(true);
  const [sensitivity, setSensitivity] = useState(50);
  const [threshold, setThreshold] = useState<number | string>(50);
  const [autoSend, setAutoSend] = useState(false);
  const [saved, setSaved] = useState(false);

  const sensitivityLabels: Record<
    number,
    { label: string; color: string; description: string }
  > = {
    0: {
      label: "Low",
      color: "blue",
      description: "Only flags students below 35%",
    },
    25: {
      label: "Low",
      color: "blue",
      description: "Only flags students below 35%",
    },
    50: {
      label: "Medium",
      color: "orange",
      description: "Flags students below 50% (recommended)",
    },
    75: {
      label: "High",
      color: "red",
      description: "Flags students below 60%",
    },
    100: {
      label: "High",
      color: "red",
      description: "Flags students below 60%",
    },
  };

  const nearest = ([0, 25, 50, 75, 100] as number[]).reduce((a, b) =>
    Math.abs(b - sensitivity) < Math.abs(a - sensitivity) ? b : a,
  );
  const {
    label: sensLabel,
    color: sensColor,
    description: sensDesc,
  } = sensitivityLabels[nearest];

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <Stack gap="lg">
      {/* Cron toggle */}
      <Paper radius="lg" p="lg" shadow="sm">
        <Group gap={10} mb="lg">
          <ThemeIcon
            size={32}
            radius="md"
            color="indigo"
            variant="light"
            style={{
              background:
                "linear-gradient(135deg,rgba(99,102,241,0.15),rgba(139,92,246,0.15))",
            }}
          >
            <IconBrain size={16} color="#6366f1" />
          </ThemeIcon>
          <Box>
            <Text fw={700} fz={14} c="dark.8">
              Nightly Analysis
            </Text>
            <Text fz={11} c="dimmed">
              Runs automatically at 06:00 AM every day via Anthropic API
            </Text>
          </Box>
        </Group>

        <Flex
          justify="space-between"
          align="center"
          py={14}
          style={{ borderTop: "1px solid #f1f5f9" }}
        >
          <Box>
            <Text fz={13} fw={600} c="dark.7">
              Enable nightly AI cron
            </Text>
            <Text fz={11} c="dimmed">
              Analyses all classes and generates insights overnight
            </Text>
          </Box>
          <Switch
            checked={cronEnabled}
            onChange={() => setCronEnabled((v) => !v)}
            color="indigo"
            radius="xl"
            size="md"
          />
        </Flex>

        {cronEnabled && (
          <>
            <Divider />
            <Flex justify="space-between" align="center" py={14}>
              <Box>
                <Text fz={13} fw={600} c="dark.7">
                  Auto-send student alerts
                </Text>
                <Text fz={11} c="dimmed">
                  Automatically email at-risk students after each nightly run
                </Text>
              </Box>
              <Switch
                checked={autoSend}
                onChange={() => setAutoSend((v) => !v)}
                color="indigo"
                radius="xl"
                size="md"
              />
            </Flex>
          </>
        )}
      </Paper>

      {/* Sensitivity */}
      <Paper radius="lg" p="lg" shadow="sm">
        <Group justify="space-between" mb="lg">
          <Box>
            <Text fw={700} fz={14} c="dark.8">
              At-Risk Sensitivity
            </Text>
            <Text fz={11} c="dimmed">
              How aggressively the AI flags struggling students
            </Text>
          </Box>
          <Badge color={sensColor} size="md" radius="xl">
            {sensLabel}
          </Badge>
        </Group>

        <Box px={4} mb={8}>
          <Slider
            value={sensitivity}
            onChange={setSensitivity}
            color="indigo"
            marks={[
              { value: 0, label: "Low" },
              { value: 50, label: "Medium" },
              { value: 100, label: "High" },
            ]}
            step={25}
            mb={32}
          />
        </Box>

        <Box
          p="sm"
          style={{
            background: `var(--mantine-color-${sensColor}-0)`,
            borderRadius: 10,
            border: `1px solid var(--mantine-color-${sensColor}-2)`,
          }}
        >
          <Text fz={12} c={`${sensColor}.7`} lh={1.6}>
            <Text span fw={700}>
              Current setting:{" "}
            </Text>
            {sensDesc}
          </Text>
        </Box>
      </Paper>

      {/* Score threshold */}
      <Paper radius="lg" p="lg" shadow="sm">
        <Text fw={700} fz={14} c="dark.8" mb={4}>
          Score Threshold
        </Text>
        <Text fz={11} c="dimmed" mb="lg">
          Students scoring below this percentage are flagged as at-risk
          regardless of sensitivity.
        </Text>
        <Group gap={16} align="flex-end">
          <NumberInput
            value={threshold}
            onChange={setThreshold}
            min={0}
            max={100}
            suffix="%"
            radius="md"
            style={{ width: 120 }}
          />
          <Text fz={12} c="dimmed">
            Currently flagging students below{" "}
            <Text span fw={700} c="dark.7">
              {threshold}%
            </Text>
          </Text>
        </Group>
      </Paper>

      <Group justify="flex-end">
        <Button
          radius="xl"
          color="indigo"
          leftSection={saved ? <IconCheck size={14} /> : undefined}
          onClick={handleSave}
        >
          {saved ? "Saved!" : "Save Preferences"}
        </Button>
      </Group>
    </Stack>
  );
}

// ─── Account & Danger Zone Tab ────────────────────────────────────────────────
function AccountTab() {
  const [logoutModal, setLogoutModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [confirmText, setConfirmText] = useState("");

  return (
    <Stack gap="lg" style={{ maxWidth: 540 }}>
      {/* Active sessions */}
      <Paper radius="lg" p="lg" shadow="sm">
        <Group gap={10} mb="lg">
          <ThemeIcon size={32} radius="md" color="blue" variant="light">
            <IconDevices size={16} />
          </ThemeIcon>
          <Box>
            <Text fw={700} fz={14} c="dark.8">
              Active Sessions
            </Text>
            <Text fz={11} c="dimmed">
              Devices currently signed in to your account
            </Text>
          </Box>
        </Group>
        <Stack gap={0}>
          {[
            {
              device: "MacBook Pro · Chrome",
              location: "Nairobi, KE",
              current: true,
              time: "Now",
            },
            {
              device: "iPhone 15 · Safari",
              location: "Nairobi, KE",
              current: false,
              time: "2 hrs ago",
            },
          ].map((session, i, arr) => (
            <Box key={session.device}>
              <Flex justify="space-between" align="center" py={12}>
                <Group gap={10}>
                  <ThemeIcon size={28} radius="md" color="gray" variant="light">
                    <IconDevices size={14} />
                  </ThemeIcon>
                  <Box>
                    <Group gap={6}>
                      <Text fz={12} fw={600}>
                        {session.device}
                      </Text>
                      {session.current && (
                        <Badge size="xs" color="teal" variant="dot">
                          This device
                        </Badge>
                      )}
                    </Group>
                    <Text fz={11} c="dimmed">
                      {session.location} · {session.time}
                    </Text>
                  </Box>
                </Group>
                {!session.current && (
                  <Button size="xs" variant="subtle" color="red" radius="xl">
                    Revoke
                  </Button>
                )}
              </Flex>
              {i < arr.length - 1 && <Divider />}
            </Box>
          ))}
        </Stack>
        <Divider mt="sm" mb="md" />
        <Button
          size="sm"
          variant="light"
          color="red"
          radius="xl"
          fullWidth
          leftSection={<IconLogout size={14} />}
          onClick={() => setLogoutModal(true)}
        >
          Log Out All Other Devices
        </Button>
      </Paper>

      {/* Security info */}
      <Paper radius="lg" p="lg" shadow="sm">
        <Group gap={10} mb="lg">
          <ThemeIcon size={32} radius="md" color="teal" variant="light">
            <IconShieldCheck size={16} />
          </ThemeIcon>
          <Box>
            <Text fw={700} fz={14} c="dark.8">
              Account Security
            </Text>
            <Text fz={11} c="dimmed">
              Your account status and verification
            </Text>
          </Box>
        </Group>
        <Stack gap={0}>
          {[
            { label: "Account status", value: "Active", color: "teal" },
            { label: "Email verified", value: "Yes", color: "teal" },
            { label: "Department approval", value: "Approved", color: "teal" },
            { label: "Employee ID", value: lecturer.employeeId, color: "gray" },
          ].map((item, i, arr) => (
            <Box key={item.label}>
              <Flex justify="space-between" align="center" py={12}>
                <Text fz={12} c="dimmed">
                  {item.label}
                </Text>
                <Badge size="sm" color={item.color} variant="light" radius="xl">
                  {item.value}
                </Badge>
              </Flex>
              {i < arr.length - 1 && <Divider />}
            </Box>
          ))}
        </Stack>
      </Paper>

      {/* Danger zone */}
      <Paper
        radius="lg"
        p="lg"
        shadow="sm"
        style={{ border: "1px solid #fecdd3" }}
      >
        <Group gap={10} mb="lg">
          <ThemeIcon size={32} radius="md" color="red" variant="light">
            <IconAlertTriangle size={16} />
          </ThemeIcon>
          <Box>
            <Text fw={700} fz={14} c="red.7">
              Danger Zone
            </Text>
            <Text fz={11} c="dimmed">
              These actions are irreversible. Proceed with caution.
            </Text>
          </Box>
        </Group>
        <Flex
          justify="space-between"
          align="center"
          p="md"
          style={{
            background: "#fff5f5",
            borderRadius: 10,
            border: "1px solid #fecdd3",
          }}
        >
          <Box>
            <Text fz={13} fw={600} c="dark.7">
              Delete Account
            </Text>
            <Text fz={11} c="dimmed">
              Permanently removes your account, all classes, and student data.
            </Text>
          </Box>
          <Button
            size="sm"
            color="red"
            variant="light"
            radius="xl"
            leftSection={<IconTrash size={13} />}
            onClick={() => setDeleteModal(true)}
          >
            Delete Account
          </Button>
        </Flex>
      </Paper>

      {/* Logout all devices modal */}
      <Modal
        opened={logoutModal}
        onClose={() => setLogoutModal(false)}
        title={
          <Text fw={700} fz={15}>
            Log Out All Devices?
          </Text>
        }
        centered
        radius="lg"
      >
        <Text fz={13} c="dimmed" mb="lg" lh={1.7}>
          This will immediately end all other active sessions. You'll remain
          logged in on this device.
        </Text>
        <Group justify="flex-end" gap={8}>
          <Button
            variant="subtle"
            color="gray"
            radius="xl"
            onClick={() => setLogoutModal(false)}
          >
            Cancel
          </Button>
          <Button
            color="red"
            radius="xl"
            leftSection={<IconLogout size={13} />}
            onClick={() => setLogoutModal(false)}
          >
            Log Out All Devices
          </Button>
        </Group>
      </Modal>

      {/* Delete account modal */}
      <Modal
        opened={deleteModal}
        onClose={() => {
          setDeleteModal(false);
          setConfirmText("");
        }}
        title={
          <Text fw={700} fz={15} c="red.7">
            Delete Account
          </Text>
        }
        centered
        radius="lg"
      >
        <Text fz={13} c="dimmed" mb={16} lh={1.7}>
          This will permanently delete your account, all your classes, student
          enrolments, and marks.
          <Text span fw={700} c="dark.8">
            {" "}
            This cannot be undone.
          </Text>
        </Text>
        <TextInput
          label={
            <Text fz={12}>
              Type{" "}
              <Text span fw={700} c="dark.8">
                DELETE
              </Text>{" "}
              to confirm
            </Text>
          }
          placeholder="DELETE"
          value={confirmText}
          onChange={(e) => setConfirmText(e.currentTarget.value)}
          radius="md"
          mb="lg"
        />
        <Group justify="flex-end" gap={8}>
          <Button
            variant="subtle"
            color="gray"
            radius="xl"
            onClick={() => {
              setDeleteModal(false);
              setConfirmText("");
            }}
          >
            Cancel
          </Button>
          <Button
            color="red"
            radius="xl"
            leftSection={<IconTrash size={13} />}
            disabled={confirmText !== "DELETE"}
            onClick={() => {
              setDeleteModal(false);
              setConfirmText("");
            }}
          >
            Permanently Delete
          </Button>
        </Group>
      </Modal>
    </Stack>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function LecturerSettingsPage() {
  return (
    <Box px={28} py={24}>
      <Flex justify="space-between" align="flex-start" mb="xl">
        <Box>
          <Group gap={10} mb={6}>
            <ThemeIcon
              size={36}
              radius="md"
              variant="filled"
              style={{
                background: "linear-gradient(135deg, #6366f1, #14b8a6)",
              }}
            >
              <IconSettings size={18} color="white" />
            </ThemeIcon>
            <Box>
              <Title order={2} fz={22} fw={800} c="dark.9" lh={1.1}>
                Settings
              </Title>
              <Text fz={11} c="dimmed" mt={2}>
                Manage your profile, security, and preferences
              </Text>
            </Box>
          </Group>
        </Box>
      </Flex>

      <Tabs defaultValue="profile" color="indigo" radius="lg">
        <Tabs.List mb="xl">
          <Tabs.Tab value="profile" leftSection={<IconUser size={14} />}>
            Profile
          </Tabs.Tab>
          <Tabs.Tab value="password" leftSection={<IconLock size={14} />}>
            Password
          </Tabs.Tab>
          <Tabs.Tab value="notifications" leftSection={<IconBell size={14} />}>
            Notifications
          </Tabs.Tab>
          <Tabs.Tab value="ai" leftSection={<IconBrain size={14} />}>
            AI Preferences
          </Tabs.Tab>
          <Tabs.Tab value="account" leftSection={<IconShieldCheck size={14} />}>
            Account
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="profile">
          {" "}
          <ProfileTab />{" "}
        </Tabs.Panel>
        <Tabs.Panel value="password">
          {" "}
          <PasswordTab />{" "}
        </Tabs.Panel>
        <Tabs.Panel value="notifications">
          {" "}
          <NotificationsTab />{" "}
        </Tabs.Panel>
        <Tabs.Panel value="ai">
          {" "}
          <AIPreferencesTab />
        </Tabs.Panel>
        <Tabs.Panel value="account">
          {" "}
          <AccountTab />{" "}
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
}
