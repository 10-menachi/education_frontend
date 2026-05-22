import { Button } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

interface Props {
  course_id: string;
}

const CourseCardFooterActions = ({ course_id }: Props) => {
  return (
    <Link
      href={`/student/courses/${course_id}`}
      style={{ textDecoration: "none" }}
    >
      <Button
        component="div"
        variant="subtle"
        color="teal"
        size="xs"
        radius="xl"
        rightSection={<IconChevronRight size={13} />}
      >
        View Details
      </Button>
    </Link>
  );
};

export default CourseCardFooterActions;
