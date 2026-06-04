import { Group, UnstyledButton } from "@mantine/core";

const NavLinks = () => {
  return (
    <Group gap={32} visibleFrom="md">
      {["Features", "How It Works", "About"].map((link) => (
        <UnstyledButton
          key={link}
          style={{ color: "#475569", fontSize: 14, fontWeight: 500 }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#00c896")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
        >
          {link}
        </UnstyledButton>
      ))}
    </Group>
  );
};

export default NavLinks;
