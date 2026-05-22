import { courses } from "@/lib/utils/constants";
import { gradeLabel, weightedTotal } from "@/lib/utils/helpers";
import { Box, Paper, Stack, Text } from "@mantine/core";
import CourseDetails from "./course-details";
import CourseMarks from "./course-marks";

export default function CourseCards() {
  return (
    <Box>
      <Text fw={700} fz={14} mb="md" c="dark.7">
        My Courses — Mark Breakdown
      </Text>
      <Stack gap="md">
        {courses.map((c) => {
          const total = weightedTotal(c);
          const { label, color } = gradeLabel(total);
          return (
            <Paper key={c.code} radius="lg" p="lg" shadow="sm">
              <CourseDetails c={c} total={total} color={color} label={label} />
              <CourseMarks c={c} />
            </Paper>
          );
        })}
      </Stack>
    </Box>
  );
}
