"use client";

import { Box, Flex, MantineProvider, Text } from "@mantine/core";
import { theme } from "@/lib/utils/constants/localization";
import LeftPanel from "@/components/auth/left-panel";
import LoginForm from "@/components/auth/login/login-form";
import { IconShieldCheck } from "@tabler/icons-react";

export default function LoginPage() {
  return (
    <MantineProvider theme={theme}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');*{box-sizing:border-box;}body{margin:0;}`}</style>
      <Flex style={{ height: "100vh", overflow: "hidden" }}>
        <Box style={{ width: "42%", flexShrink: 0 }}>
          <LeftPanel
            headline={
              <>
                Welcome back.
                <br />
                <Text span c="indigo.3">
                  Your progress
                  <br />
                  awaits you.
                </Text>
              </>
            }
            subtext="Sign in to access your dashboard, track performance, and stay on top of your academic journey."
            badge={{
              icon: IconShieldCheck,
              title: "Secure access",
              description: "Your credentials are encrypted and never shared.",
            }}
          />
        </Box>

        <LoginForm />
      </Flex>
    </MantineProvider>
  );
}
