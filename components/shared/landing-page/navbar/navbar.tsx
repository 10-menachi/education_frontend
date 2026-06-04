import { Box, Container, Flex, UnstyledButton } from "@mantine/core";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import Logo from "../../logo";
import NavLinks from "./nav-links";
import NavActions from "./nav-actions";
import MobileNav from "./mobile-nav";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <Box
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <Container size="xl" py={16}>
        <Flex align="center" justify="space-between">
          <Logo />

          <NavLinks />

          <NavActions />

          <UnstyledButton
            hiddenFrom="md"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
          </UnstyledButton>
        </Flex>

        <MobileNav mobileOpen={mobileOpen} />
      </Container>
    </Box>
  );
}
