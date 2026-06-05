import LecturerHeader from "@/components/shared/lecturer/lecturer-header";
import LecturerSidebar from "@/components/shared/lecturer/lecturer-sidebar";
import { theme } from "@/lib/utils/constants/localization";
import { Box, Flex, MantineProvider } from "@mantine/core";
import { ReactNode } from "react";

export default function LecturerLayout({ children }: { children: ReactNode }) {
  return (
    <MantineProvider theme={theme}>
      <style>{`...fonts/reset...`}</style>
      <Flex style={{ minHeight: "100vh" }}>
        <LecturerSidebar />
        <Box flex={1} style={{ overflow: "auto" }}>
          <LecturerHeader />
          {children}
        </Box>
      </Flex>
    </MantineProvider>
  );
}
