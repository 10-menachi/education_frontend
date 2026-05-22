import { Flex, Select, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export default function FiltersBar({
  search,
  onSearch,
  filter,
  onFilter,
}: {
  search: string;
  onSearch: (v: string) => void;
  filter: string | null;
  onFilter: (v: string | null) => void;
}) {
  return (
    <Flex gap="md" mb="xl" align="center" wrap="wrap">
      <TextInput
        placeholder="Search units..."
        leftSection={<IconSearch size={15} />}
        radius="xl"
        size="sm"
        value={search}
        onChange={(e) => onSearch(e.currentTarget.value)}
        style={{ flex: 1, minWidth: 200 }}
      />
      <Select
        placeholder="Filter by status"
        radius="xl"
        size="sm"
        clearable
        data={[
          { label: "All Units", value: "all" },
          { label: "Results Published", value: "published" },
          { label: "Exam Pending", value: "pending" },
          { label: "At Risk", value: "at-risk" },
          { label: "Improving", value: "improving" },
        ]}
        value={filter}
        onChange={onFilter}
        style={{ width: 200 }}
      />
    </Flex>
  );
}
