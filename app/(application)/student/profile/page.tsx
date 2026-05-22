import Link from "next/link";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Grid,
  GridCol,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconArrowLeft,
  IconBook,
  IconCheck,
  IconMail,
  IconMapPin,
  IconSchool,
  IconShieldLock,
  IconStar,
  IconUser,
} from "@tabler/icons-react";

export default function StudentPublicProfilePage() {
  return (
    <Box px={28} py={24}>
      <Group justify="space-between" mb="xl">
        <Group gap={12}>
          <ThemeIcon size={48} radius="md" color="grape" variant="light">
            <IconUser size={24} />
          </ThemeIcon>
          <Box>
            <Title
              order={2}
              fw={700}
              fz={28}
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Public Profile
            </Title>
            <Text c="dimmed" fz={13}>
              A public-facing summary of your academic journey and achievements.
            </Text>
          </Box>
        </Group>

        <Link href="/student/settings">
          <Button radius="xl" leftSection={<IconArrowLeft size={16} />}>
            Back to Settings
          </Button>
        </Link>
      </Group>

      <Grid gutter="lg">
        <GridCol span={8}>
          <Paper radius="xl" p="lg" shadow="sm" mb="xl">
            <Group align="center" spacing="xl">
              <Avatar
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                radius="xl"
                size={112}
              />
              <Box>
                <Group gap={10} align="flex-end">
                  <Text fw={800} fz={24}>
                    Christian Timbe
                  </Text>
                  <Badge radius="xl" color="teal">
                    Active Student
                  </Badge>
                </Group>
                <Text c="dimmed" fz={13} mt={4}>
                  Bachelor of Science in Computer Science
                </Text>
                <Text c="dimmed" fz={13} mt={2}>
                  christiantimbe@student.edu
                </Text>
              </Box>
            </Group>

            <Stack gap="md" mt="lg">
              <Text fw={700} fz={16}>
                About Me
              </Text>
              <Text fz={13} c="dimmed" lh={1.7}>
                Enthusiastic computer science student focused on algorithms,
                database systems, and AI-powered learning. Passionate about
                building solutions that blend technical rigor with real-world
                impact.
              </Text>
            </Stack>

            <Stack gap="lg" mt="xl">
              <Grid>
                <GridCol span={6}>
                  <Card radius="lg" p="md" bg="gray.0">
                    <Group align="center" spacing="xs">
                      <ThemeIcon
                        size={32}
                        radius="md"
                        color="teal"
                        variant="light"
                      >
                        <IconSchool size={18} />
                      </ThemeIcon>
                      <Box>
                        <Text fw={700}>Degree</Text>
                        <Text fz={12} c="dimmed">
                          BSc Computer Science
                        </Text>
                      </Box>
                    </Group>
                  </Card>
                </GridCol>
                <GridCol span={6}>
                  <Card radius="lg" p="md" bg="gray.0">
                    <Group align="center" spacing="xs">
                      <ThemeIcon
                        size={32}
                        radius="md"
                        color="blue"
                        variant="light"
                      >
                        <IconBook size={18} />
                      </ThemeIcon>
                      <Box>
                        <Text fw={700}>Academic Focus</Text>
                        <Text fz={12} c="dimmed">
                          Databases, AI, and Software Engineering
                        </Text>
                      </Box>
                    </Group>
                  </Card>
                </GridCol>
                <GridCol span={6}>
                  <Card radius="lg" p="md" bg="gray.0">
                    <Group align="center" spacing="xs">
                      <ThemeIcon
                        size={32}
                        radius="md"
                        color="orange"
                        variant="light"
                      >
                        <IconShieldLock size={18} />
                      </ThemeIcon>
                      <Box>
                        <Text fw={700}>Student ID</Text>
                        <Text fz={12} c="dimmed">
                          STU20260012
                        </Text>
                      </Box>
                    </Group>
                  </Card>
                </GridCol>
                <GridCol span={6}>
                  <Card radius="lg" p="md" bg="gray.0">
                    <Group align="center" spacing="xs">
                      <ThemeIcon
                        size={32}
                        radius="md"
                        color="grape"
                        variant="light"
                      >
                        <IconMail size={18} />
                      </ThemeIcon>
                      <Box>
                        <Text fw={700}>Contact</Text>
                        <Text fz={12} c="dimmed">
                          Available for academic collaborations
                        </Text>
                      </Box>
                    </Group>
                  </Card>
                </GridCol>
              </Grid>
            </Stack>
          </Paper>

          <Paper radius="xl" p="lg" shadow="sm">
            <Group position="apart" mb="md">
              <Text fw={700} fz={16}>
                Achievements
              </Text>
              <Badge radius="xl" color="teal" variant="light">
                Top 10%
              </Badge>
            </Group>
            <Stack spacing="sm">
              {[
                "Maintained GPA above 3.6 for 4 semesters",
                "Top performer in Database Systems",
                "AI study recommendations implemented successfully",
              ].map((item) => (
                <Group key={item} spacing="xs">
                  <ThemeIcon size={28} radius="md" color="teal" variant="light">
                    <IconCheck size={16} />
                  </ThemeIcon>
                  <Text fz={13}>{item}</Text>
                </Group>
              ))}
            </Stack>
          </Paper>
        </GridCol>

        <GridCol span={4}>
          <Paper radius="xl" p="lg" shadow="sm">
            <Text fw={700} fz={16} mb="md">
              Skills & Interests
            </Text>
            <Stack spacing="sm">
              {[
                "SQL & Database Design",
                "Algorithmic Thinking",
                "Machine Learning",
                "Team Collaboration",
                "Technical Writing",
              ].map((skill) => (
                <Badge key={skill} color="grape" radius="xl" variant="light">
                  {skill}
                </Badge>
              ))}
            </Stack>
          </Paper>

          <Paper radius="xl" p="lg" shadow="sm" mt="lg">
            <Text fw={700} fz={16} mb="md">
              Campus Location
            </Text>
            <Group spacing="xs">
              <IconMapPin size={18} />
              <Text fz={13} c="dimmed">
                Nairobi Campus, Main Library
              </Text>
            </Group>
          </Paper>
        </GridCol>
      </Grid>
    </Box>
  );
}
