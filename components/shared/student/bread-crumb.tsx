import { Breadcrumbs, Button } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

interface Props {
  action: () => void;
  label: string;
}

const CustomBreadCrumb = ({ action, label }: Props) => {
  const router = useRouter();
  return (
    <Breadcrumbs mb="lg">
      <Button
        variant="subtle"
        size="xs"
        leftSection={<IconChevronLeft size={14} />}
        onClick={action}
      >
        {label}
      </Button>
    </Breadcrumbs>
  );
};

export default CustomBreadCrumb;
