import { IconBook, IconChevronRight, IconFileText } from "@tabler/icons-react";

export default function ResourceIcon({
  type,
}: {
  type: "pdf" | "video" | "link";
}) {
  if (type === "pdf")
    return <IconFileText size={14} color="var(--mantine-color-red-5)" />;
  if (type === "video")
    return <IconBook size={14} color="var(--mantine-color-blue-5)" />;
  return <IconChevronRight size={14} color="var(--mantine-color-teal-5)" />;
}
