import { Badge } from "@mantine/core";
import { IconTrendingUp } from "@tabler/icons-react";

export default function TrendBadge({ trend }: { trend: string | null }) {
  if (!trend)
    return (
      <Badge color="gray" variant="light" size="xs">
        PendingGGG
      </Badge>
    );
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
      <Badge color="red" variant="light" size="xs">
        At Risk
      </Badge>
    );
  return (
    <Badge color="blue" variant="light" size="xs">
      Stable
    </Badge>
  );
}
