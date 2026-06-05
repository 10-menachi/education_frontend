import { Badge } from "@mantine/core";
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";

export default function TrendBadgeGray({ trend }: { trend: string }) {
  if (trend === "up")
    return (
      <Badge
        color="teal"
        variant="light"
        size="xs"
        leftSection={<IconTrendingUp size={10} />}
      >
        Improving
      </Badge>
    );
  if (trend === "down")
    return (
      <Badge
        color="red"
        variant="light"
        size="xs"
        leftSection={<IconTrendingDown size={10} />}
      >
        Declining
      </Badge>
    );
  return (
    <Badge color="gray" variant="light" size="xs">
      Stable
    </Badge>
  );
}
