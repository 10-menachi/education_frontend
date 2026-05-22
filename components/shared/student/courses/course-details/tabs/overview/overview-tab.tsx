import { componentPct } from "@/lib/utils/helpers";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  Group,
  Paper,
  Progress,
  RingProgress,
  Stack,
  Tabs,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { IconAlertTriangle, IconCheck } from "@tabler/icons-react";
import LecturerDetails from "./lecturer-details";
import CourseDescription from "./course-description";
import GradeAnalysis from "./grade-analysis";
import AIInsights from "./ai-insights";

interface Props {
  course: Course;
  total: number | null;
  label: string;
  color: string;
}

const CourseDetailsOverview = ({ course, total, label, color }: Props) => {
  return (
    <Tabs.Panel value="overview">
      <Stack gap="md">
        <LecturerDetails course={course} />

        <CourseDescription course={course} />

        <Divider />

        <GradeAnalysis
          course={course}
          total={total}
          label={label}
          color={color}
        />

        <AIInsights course={course} />
      </Stack>
    </Tabs.Panel>
  );
};

export default CourseDetailsOverview;
