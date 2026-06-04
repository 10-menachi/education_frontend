import { Box, Button, Divider, Stack, Text } from "@mantine/core";
import Link from "next/link";

interface Props {
  mobileOpen: boolean;
}

const MobileNav = ({ mobileOpen }: Props) => {
  return (
    <>
      {mobileOpen && (
        <Box py={16} hiddenFrom="md">
          <Stack gap={8}>
            {["Features", "How It Works", "About"].map((link) => (
              <Text key={link} fz={15} fw={500} c="dark.6" py={6}>
                {link}
              </Text>
            ))}
            <Divider my={4} />
            <Button
              variant="subtle"
              color="dark"
              size="sm"
              radius="xl"
              fullWidth
            >
              Sign in
            </Button>
            <Button
              component={Link}
              href="/register"
              size="sm"
              radius="xl"
              fw={600}
              fullWidth
              style={{
                background: "linear-gradient(135deg, #00c896, #009973)",
              }}
            >
              Register
            </Button>
          </Stack>
        </Box>
      )}
    </>
  );
};

export default MobileNav;
