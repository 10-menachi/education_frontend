import { Button, Group } from "@mantine/core";
import Link from "next/link";
import React from "react";

const NavActions = () => {
  return (
    <Group gap={12} visibleFrom="md">
      <Button variant="subtle" color="dark" size="sm" radius="xl">
        Sign in
      </Button>
      <Button
        component={Link}
        href="/register"
        size="sm"
        radius="xl"
        fw={600}
        style={{
          background: "linear-gradient(135deg, #00c896, #009973)",
        }}
      >
        Register
      </Button>
    </Group>
  );
};

export default NavActions;
