import { courses } from "@/lib/utils/constants";
import { Grid, Progress, Text } from "@mantine/core";

interface Props {
  c: (typeof courses)[0];
}

const CourseMarks = ({ c }: Props) => {
  return (
    <Grid gap="xs">
      {[
        {
          label: `CAT 1 (${c.cat1.weight}%)`,
          score: c.cat1.score,
          max: c.cat1.max,
        },
        {
          label: `CAT 2 (${c.cat2.weight}%)`,
          score: c.cat2.score,
          max: c.cat2.max,
        },
        {
          label: `Exam (${c.exam.weight}%)`,
          score: c.exam.score,
          max: c.exam.max,
        },
      ].map((item) => (
        <Grid.Col span={4} key={item.label}>
          <Text fz={11} c="dimmed" mb={4}>
            {item.label}
          </Text>
          <Progress
            value={item.score !== null ? (item.score / item.max) * 100 : 0}
            color={
              item.score !== null
                ? item.score / item.max >= 0.6
                  ? "teal"
                  : "orange"
                : "gray"
            }
            radius="xl"
            size="sm"
          />
          <Text fz={11} mt={3} fw={600} c="dark.6">
            {item.score !== null ? `${item.score}/${item.max}` : "—"}
          </Text>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default CourseMarks;
