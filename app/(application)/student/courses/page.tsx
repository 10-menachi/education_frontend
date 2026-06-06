"use client";

import CourseCard from "@/components/shared/student/courses/course-card/course-card";
import CourseSummaryStrip from "@/components/shared/student/courses/summary-strip";
import FiltersBar from "@/components/shared/student/filters-bar";
import GPASidebar from "@/components/shared/student/gpa-sidebar/gpa-sidebar";
import { courses } from "@/lib/utils/constants/data";
import { Box, Grid, Paper, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";

export default function MyCoursesPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string | null>(null);

  const filtered = courses.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase());

    if (!matchesSearch) return false;
    if (!filter || filter === "all") return true;
    if (filter === "published") return c.published;
    if (filter === "pending") return !c.published;
    if (filter === "at-risk") return c.trend === "down";
    if (filter === "improving") return c.trend === "up";
    return true;
  });

  return (
    <Box px={28} py={24}>
      {/* Page header */}
      <Box mb="xl">
        <Title
          order={2}
          fz={26}
          fw={700}
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          My Courses 📚
        </Title>
        <Text fz={14} c="dimmed">
          View your enrolled units, marks breakdown, and academic resources.
        </Text>
      </Box>

      <CourseSummaryStrip />

      <FiltersBar
        search={search}
        onSearch={setSearch}
        filter={filter}
        onFilter={setFilter}
      />

      {/* Main content + sidebar */}
      <Grid gap="lg">
        <Grid.Col span={8}>
          {filtered.length === 0 ? (
            <Paper radius="lg" p="xl" shadow="sm" ta="center">
              <Text fz={13} c="dimmed">
                No courses match your search or filter.
              </Text>
            </Paper>
          ) : (
            <Stack gap="md">
              {filtered.map((c) => (
                <CourseCard key={c.code} course={c} />
              ))}
            </Stack>
          )}
        </Grid.Col>

        <Grid.Col span={4}>
          <GPASidebar />
        </Grid.Col>
      </Grid>
    </Box>
  );
}
