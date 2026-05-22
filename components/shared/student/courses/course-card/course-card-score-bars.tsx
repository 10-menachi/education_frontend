import { componentPct } from "@/lib/utils/helpers";
import { Grid, Progress, Text, Tooltip } from "@mantine/core";

interface Props {
  course: Course;
}

const CourseCardScoreBars = ({ course }: Props) => {
  return (
    <Grid gap="xs">
      {[
        { label: `CAT 1 (${course.cat1.weight}%)`, item: course.cat1 },
        { label: `CAT 2 (${course.cat2.weight}%)`, item: course.cat2 },
        { label: `Exam (${course.exam.weight}%)`, item: course.exam },
      ].map(({ label: lbl, item }) => {
        const pct = componentPct(item);
        return (
          <Grid.Col span={4} key={lbl}>
            <Text fz={11} c="dimmed" mb={4}>
              {lbl}
            </Text>
            <Tooltip
              label={
                item.score !== null
                  ? `${item.score}/${item.max} (${pct}%)`
                  : "Not yet published"
              }
              withArrow
            >
              <Progress
                value={pct}
                color={
                  item.score === null ? "gray" : pct >= 60 ? "teal" : "orange"
                }
                radius="xl"
                size="sm"
              />
            </Tooltip>
            <Text fz={11} mt={3} fw={600} c="dark.6">
              {item.score !== null ? `${item.score}/${item.max}` : "—"}
            </Text>
          </Grid.Col>
        );
      })}
    </Grid>
  );
};

export default CourseCardScoreBars;
