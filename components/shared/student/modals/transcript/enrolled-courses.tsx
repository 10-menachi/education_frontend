import { courses } from "@/lib/utils/constants";
import { Badge, Box, Group, Stack, Text } from "@mantine/core";

const EnrolledCourses = () => {
  return (
    <Box>
      <Text fw={700} mb="md">
        Enrolled Courses
      </Text>
      <Stack gap="md">
        {courses.map((course) => (
          <Box key={course.code}>
            <Group justify="space-between" mb="xs">
              <Box flex={1}>
                <Text fz={13} fw={600}>
                  {course.code}: {course.name}
                </Text>
              </Box>
              <Badge
                color={course.published ? "teal" : "gray"}
                radius="sm"
                size="sm"
              >
                {course.published ? `Grade: ${course.avg}/100` : "Pending"}
              </Badge>
            </Group>
            {course.published && (
              <Group gap="xs" ml="sm">
                <Text fz={12} c="dimmed">
                  CAT: {course.cat1.score}/{course.cat1.max}
                </Text>
                <Text fz={12} c="dimmed">
                  •
                </Text>
                <Text fz={12} c="dimmed">
                  Exam: {course.exam.score ? `${course.exam.score}/70` : "N/A"}
                </Text>
              </Group>
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default EnrolledCourses;
