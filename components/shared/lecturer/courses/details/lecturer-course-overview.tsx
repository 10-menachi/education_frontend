"use client";

import { Box, Grid, Paper, Text, Group, Avatar, Stack } from "@mantine/core";

interface LecturerCourseOverviewProps {
  course: Course;
}

export default function LecturerCourseOverview({
  course,
}: LecturerCourseOverviewProps) {
  return (
    <Grid gap="lg" mb="xl">
      <Grid.Col span={{ base: 12, md: 8 }}>
        <Paper radius="lg" p="lg" shadow="sm" style={{ background: "#fff" }}>
          <Text fw={700} fz={16} c="dark.8" mb="md">
            Course Description
          </Text>
          <Text fz={14} c="dimmed" lh={1.6}>
            {course.description}
          </Text>
        </Paper>
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 4 }}>
        <Paper radius="lg" p="lg" shadow="sm" style={{ background: "#fff" }}>
          <Text fw={700} fz={16} c="dark.8" mb="md">
            Course Instructor
          </Text>
          <Stack gap="md">
            <Group gap="md">
              <Avatar
                size={56}
                radius="lg"
                color="indigo"
                name={course.lecturerInitials}
              />
              <Box style={{ flex: 1 }}>
                <Text fw={600} c="dark.8">
                  {course.lecturer}
                </Text>
                <Text fz={12} c="dimmed" mt={4}>
                  Course Lead
                </Text>
              </Box>
            </Group>
          </Stack>
        </Paper>
      </Grid.Col>
    </Grid>
  );
}
