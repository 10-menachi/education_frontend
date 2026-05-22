"use client";

import React, { useState } from "react";

import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Group,
  Paper,
  PasswordInput,
  Select,
  SimpleGrid,
  Stack,
  Switch,
  Tabs,
  Text,
  TextInput,
  ThemeIcon,
  Title,
} from "@mantine/core";

import {
  IconArrowLeft,
  IconBell,
  IconBrain,
  IconCamera,
  IconCheck,
  IconDeviceLaptop,
  IconLanguage,
  IconLock,
  IconMoon,
  IconPalette,
  IconSchool,
  IconShieldLock,
  IconUser,
} from "@tabler/icons-react";

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function StudentSettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [aiRecommendations, setAiRecommendations] = useState(true);
  const [studyReminders, setStudyReminders] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  return (
    <Box px={28} py={24}>
      {/* Header */}
      <Group justify="space-between" mb="xl">
        <Group gap={14}>
          <ThemeIcon size={54} radius="xl" color="grape" variant="light">
            <IconUser size={28} />
          </ThemeIcon>

          <Box>
            <Title
              order={2}
              fw={800}
              fz={30}
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Settings
            </Title>

            <Text c="dimmed" fz={13}>
              Manage your profile, notifications, privacy, and learning
              preferences.
            </Text>
          </Box>
        </Group>

        <Button radius="xl" color="grape" leftSection={<IconCheck size={16} />}>
          Save Changes
        </Button>
      </Group>

      {/* Profile Summary */}
      <Paper radius="xl" p="lg" shadow="sm" mb="xl">
        <Group justify="space-between">
          <Group gap={16}>
            <Avatar
              size={84}
              radius="xl"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            />

            <Box>
              <Group gap={10}>
                <Text fw={800} fz={22}>
                  Christian Timbe
                </Text>

                <Badge radius="xl" color="teal">
                  Active Student
                </Badge>
              </Group>

              <Text c="dimmed" fz={13} mt={4}>
                Bachelor of Science in Computer Science
              </Text>

              <Text c="dimmed" fz={13}>
                christiantimbe@student.edu
              </Text>

              <Group gap={10} mt="md">
                <Button
                  radius="xl"
                  size="xs"
                  variant="light"
                  leftSection={<IconCamera size={14} />}
                >
                  Change Photo
                </Button>

                <Button
                  component="a"
                  href="/student/profile"
                  radius="xl"
                  size="xs"
                  variant="subtle"
                >
                  View Public Profile
                </Button>
              </Group>
            </Box>
          </Group>

          <ThemeIcon size={72} radius="xl" color="grape" variant="light">
            <IconSchool size={36} />
          </ThemeIcon>
        </Group>
      </Paper>

      {/* Tabs */}
      <Tabs defaultValue="account" radius="xl" color="grape">
        <Tabs.List mb="lg">
          <Tabs.Tab value="account" leftSection={<IconUser size={14} />}>
            Account
          </Tabs.Tab>

          <Tabs.Tab value="notifications" leftSection={<IconBell size={14} />}>
            Notifications
          </Tabs.Tab>

          <Tabs.Tab value="appearance" leftSection={<IconPalette size={14} />}>
            Appearance
          </Tabs.Tab>

          <Tabs.Tab value="privacy" leftSection={<IconLock size={14} />}>
            Privacy & Security
          </Tabs.Tab>

          <Tabs.Tab value="ai" leftSection={<IconBrain size={14} />}>
            AI Preferences
          </Tabs.Tab>
        </Tabs.List>

        {/* Account */}
        <Tabs.Panel value="account">
          <Grid>
            <Grid.Col span={{ base: 12, lg: 8 }}>
              <Paper radius="xl" p="lg" shadow="sm">
                <Text fw={700} fz={16} mb="lg">
                  Personal Information
                </Text>

                <Grid>
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <TextInput
                      radius="lg"
                      label="First Name"
                      placeholder="Christian"
                      defaultValue="Christian"
                    />
                  </Grid.Col>

                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <TextInput
                      radius="lg"
                      label="Last Name"
                      placeholder="Timbe"
                      defaultValue="Timbe"
                    />
                  </Grid.Col>

                  <Grid.Col span={12}>
                    <TextInput
                      radius="lg"
                      label="Email Address"
                      placeholder="you@example.com"
                      defaultValue="christiantimbe@student.edu"
                    />
                  </Grid.Col>

                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <TextInput
                      radius="lg"
                      label="Student ID"
                      defaultValue="STU20260012"
                    />
                  </Grid.Col>

                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <Select
                      radius="lg"
                      label="Year of Study"
                      defaultValue="3rd Year"
                      data={["1st Year", "2nd Year", "3rd Year", "4th Year"]}
                    />
                  </Grid.Col>

                  <Grid.Col span={12}>
                    <Select
                      radius="lg"
                      label="Department"
                      defaultValue="Computer Science"
                      data={[
                        "Computer Science",
                        "Software Engineering",
                        "Information Technology",
                      ]}
                    />
                  </Grid.Col>
                </Grid>
              </Paper>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 4 }}>
              <Paper radius="xl" p="lg" shadow="sm">
                <Text fw={700} fz={16} mb="lg">
                  Academic Snapshot
                </Text>

                <Stack gap="md">
                  <Card radius="lg" bg="gray.0">
                    <Text fz={12} c="dimmed">
                      Current GPA
                    </Text>

                    <Text fw={800} fz={28}>
                      3.67
                    </Text>
                  </Card>

                  <Card radius="lg" bg="gray.0">
                    <Text fz={12} c="dimmed">
                      Completed Courses
                    </Text>

                    <Text fw={800} fz={28}>
                      28
                    </Text>
                  </Card>

                  <Card radius="lg" bg="gray.0">
                    <Text fz={12} c="dimmed">
                      AI Learning Score
                    </Text>

                    <Text fw={800} fz={28}>
                      85%
                    </Text>
                  </Card>
                </Stack>
              </Paper>
            </Grid.Col>
          </Grid>
        </Tabs.Panel>

        {/* Notifications */}
        <Tabs.Panel value="notifications">
          <Paper radius="xl" p="lg" shadow="sm">
            <Text fw={700} fz={16} mb="lg">
              Notification Preferences
            </Text>

            <Stack gap="lg">
              <Group justify="space-between">
                <Box>
                  <Text fw={600}>Push Notifications</Text>

                  <Text fz={13} c="dimmed">
                    Receive alerts about grades, assignments, and announcements.
                  </Text>
                </Box>

                <Switch
                  checked={notifications}
                  onChange={(e) => setNotifications(e.currentTarget.checked)}
                  color="grape"
                />
              </Group>

              <Divider />

              <Group justify="space-between">
                <Box>
                  <Text fw={600}>Email Alerts</Text>

                  <Text fz={13} c="dimmed">
                    Get important updates delivered to your email.
                  </Text>
                </Box>

                <Switch
                  checked={emailAlerts}
                  onChange={(e) => setEmailAlerts(e.currentTarget.checked)}
                  color="grape"
                />
              </Group>

              <Divider />

              <Group justify="space-between">
                <Box>
                  <Text fw={600}>Study Reminders</Text>

                  <Text fz={13} c="dimmed">
                    Receive personalized study session reminders.
                  </Text>
                </Box>

                <Switch
                  checked={studyReminders}
                  onChange={(e) => setStudyReminders(e.currentTarget.checked)}
                  color="grape"
                />
              </Group>
            </Stack>
          </Paper>
        </Tabs.Panel>

        {/* Appearance */}
        <Tabs.Panel value="appearance">
          <SimpleGrid cols={{ base: 1, md: 2 }}>
            <Paper radius="xl" p="lg" shadow="sm">
              <Group gap={10} mb="lg">
                <ThemeIcon radius="xl" color="dark" variant="light">
                  <IconMoon size={16} />
                </ThemeIcon>

                <Text fw={700}>Theme Preferences</Text>
              </Group>

              <Stack gap="lg">
                <Group justify="space-between">
                  <Box>
                    <Text fw={600}>Dark Mode</Text>

                    <Text fz={13} c="dimmed">
                      Switch between light and dark themes.
                    </Text>
                  </Box>

                  <Switch
                    checked={darkMode}
                    onChange={(e) => setDarkMode(e.currentTarget.checked)}
                    color="grape"
                  />
                </Group>

                <Select
                  radius="lg"
                  label="Accent Color"
                  defaultValue="Grape"
                  data={["Grape", "Blue", "Teal", "Pink", "Orange"]}
                />

                <Select
                  radius="lg"
                  label="Font Size"
                  defaultValue="Medium"
                  data={["Small", "Medium", "Large"]}
                />
              </Stack>
            </Paper>

            <Paper radius="xl" p="lg" shadow="sm">
              <Group gap={10} mb="lg">
                <ThemeIcon radius="xl" color="blue" variant="light">
                  <IconDeviceLaptop size={16} />
                </ThemeIcon>

                <Text fw={700}>Language & Region</Text>
              </Group>

              <Stack gap="lg">
                <Select
                  radius="lg"
                  label="Language"
                  defaultValue="English"
                  leftSection={<IconLanguage size={16} />}
                  data={["English", "Swahili", "French", "German"]}
                />

                <Select
                  radius="lg"
                  label="Timezone"
                  defaultValue="Africa/Nairobi"
                  data={[
                    "Africa/Nairobi",
                    "UTC",
                    "Europe/London",
                    "America/New_York",
                  ]}
                />
              </Stack>
            </Paper>
          </SimpleGrid>
        </Tabs.Panel>

        {/* Privacy */}
        <Tabs.Panel value="privacy">
          <Grid>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Paper radius="xl" p="lg" shadow="sm">
                <Group gap={10} mb="lg">
                  <ThemeIcon radius="xl" color="red" variant="light">
                    <IconShieldLock size={16} />
                  </ThemeIcon>

                  <Text fw={700}>Security Settings</Text>
                </Group>

                <Stack gap="lg">
                  <PasswordInput
                    radius="lg"
                    label="Current Password"
                    placeholder="Enter current password"
                  />

                  <PasswordInput
                    radius="lg"
                    label="New Password"
                    placeholder="Enter new password"
                  />

                  <PasswordInput
                    radius="lg"
                    label="Confirm Password"
                    placeholder="Confirm new password"
                  />

                  <Group justify="space-between">
                    <Box>
                      <Text fw={600}>Two-Factor Authentication</Text>

                      <Text fz={13} c="dimmed">
                        Add an extra layer of account security.
                      </Text>
                    </Box>

                    <Switch
                      checked={twoFactorAuth}
                      onChange={(e) =>
                        setTwoFactorAuth(e.currentTarget.checked)
                      }
                      color="grape"
                    />
                  </Group>

                  <Button radius="xl" color="red">
                    Update Password
                  </Button>
                </Stack>
              </Paper>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Paper radius="xl" p="lg" shadow="sm">
                <Text fw={700} fz={16} mb="lg">
                  Login Activity
                </Text>

                <Stack gap="md">
                  {[
                    {
                      device: "Chrome on Ubuntu",
                      location: "Nairobi, Kenya",
                      active: true,
                    },
                    {
                      device: "Mobile Safari",
                      location: "Kiambu, Kenya",
                      active: false,
                    },
                  ].map((session, idx) => (
                    <Card radius="lg" key={idx} bg="gray.0">
                      <Group justify="space-between">
                        <Box>
                          <Text fw={600}>{session.device}</Text>

                          <Text fz={12} c="dimmed">
                            {session.location}
                          </Text>
                        </Box>

                        <Badge
                          radius="xl"
                          color={session.active ? "teal" : "gray"}
                        >
                          {session.active ? "Current Session" : "Previous"}
                        </Badge>
                      </Group>
                    </Card>
                  ))}
                </Stack>
              </Paper>
            </Grid.Col>
          </Grid>
        </Tabs.Panel>

        {/* AI Preferences */}
        <Tabs.Panel value="ai">
          <Paper radius="xl" p="lg" shadow="sm">
            <Group gap={10} mb="lg">
              <ThemeIcon radius="xl" color="grape" variant="light">
                <IconBrain size={16} />
              </ThemeIcon>

              <Text fw={700}>AI Learning Preferences</Text>
            </Group>

            <Stack gap="lg">
              <Group justify="space-between">
                <Box>
                  <Text fw={600}>AI Study Recommendations</Text>

                  <Text fz={13} c="dimmed">
                    Allow AI to recommend study materials and revision plans.
                  </Text>
                </Box>

                <Switch
                  checked={aiRecommendations}
                  onChange={(e) =>
                    setAiRecommendations(e.currentTarget.checked)
                  }
                  color="grape"
                />
              </Group>

              <Divider />

              <Select
                radius="lg"
                label="Preferred Learning Style"
                defaultValue="Visual Learning"
                data={[
                  "Visual Learning",
                  "Hands-on Practice",
                  "Reading & Writing",
                  "Collaborative Learning",
                ]}
              />

              <Select
                radius="lg"
                label="AI Feedback Frequency"
                defaultValue="Weekly"
                data={["Daily", "Weekly", "Monthly"]}
              />

              <TextInput
                radius="lg"
                label="Study Goal"
                placeholder="e.g. Maintain a GPA above 3.5"
                defaultValue="Improve algorithm problem-solving skills"
              />
            </Stack>
          </Paper>
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
}
