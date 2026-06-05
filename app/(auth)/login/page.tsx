"use client";

import { Box, Flex, MantineProvider } from "@mantine/core";
import { theme } from "@/lib/utils/constants/localization";
import LeftPanel from "@/components/auth/left-panel";
import LoginForm from "@/components/auth/login/login-form";

export default function LoginPage() {
  return (
    <MantineProvider theme={theme}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');*{box-sizing:border-box;}body{margin:0;}`}</style>
      <Flex style={{ height: "100vh", overflow: "hidden" }}>
        <Box style={{ width: "42%", flexShrink: 0 }}>
          <LeftPanel />
        </Box>

        <LoginForm />
      </Flex>
    </MantineProvider>
  );
}
