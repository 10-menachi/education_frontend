import { steps } from "@/lib/utils/constants/data";
import { Button, Group } from "@mantine/core";
import { IconArrowLeft, IconArrowRight, IconCheck } from "@tabler/icons-react";
import { SetStateAction } from "react";
import { Dispatch } from "react";

interface Props {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
}

const FormNavigation = ({ active, setActive }: Props) => {
  return (
    <Group justify="space-between">
      <Button
        variant="subtle"
        color="gray"
        radius="xl"
        size="sm"
        leftSection={<IconArrowLeft size={13} />}
        disabled={active === 0}
        onClick={() => setActive((a) => a - 1)}
        type="button"
      >
        Back
      </Button>
      <Button
        type="submit"
        radius="xl"
        size="sm"
        color="indigo"
        rightSection={
          active < steps.length - 1 ? (
            <IconArrowRight size={13} />
          ) : (
            <IconCheck size={13} />
          )
        }
      >
        {active < steps.length - 1 ? "Continue" : "Submit Application"}
      </Button>
    </Group>
  );
};

export default FormNavigation;
