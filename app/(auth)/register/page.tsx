"use client";

import { Box, Flex, MantineProvider, Text } from "@mantine/core";
import { theme } from "@/lib/utils/constants/localization";
import LeftPanel from "@/components/auth/left-panel";
import RegistrationForm from "@/components/auth/register/registration-form/registration-form";
import { IconShieldCheck } from "@tabler/icons-react";

export default function LecturerRegisterPage() {
  return (
    <MantineProvider theme={theme}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');*{box-sizing:border-box;}body{margin:0;}`}</style>
      <Flex style={{ minHeight: "100vh", alignItems: "flex-start" }}>
        <Box
          style={{
            width: "42%",
            flexShrink: 0,
            position: "sticky",
            top: 0,
            height: "100vh",
          }}
        >
          <LeftPanel
            headline={
              <>
                Educator portal.
                <br />
                <Text span c="indigo.3">
                  Your classroom,
                  <br />
                  your data.
                </Text>
              </>
            }
            subtext="Register to manage your classes, track student performance, and get AI-powered insights — all in one place."
            badge={{
              icon: IconShieldCheck,
              title: "Admin-approved access",
              description:
                "Once approved, your login credentials will be sent to your institutional email.",
            }}
          />
        </Box>

        <Flex
          flex={1}
          align="center"
          justify="center"
          style={{
            background: "#f8fafc",
            padding: "40px 32px",
            minHeight: "100vh",
          }}
        >
          <RegistrationForm />
        </Flex>
      </Flex>
    </MantineProvider>
  );
}
