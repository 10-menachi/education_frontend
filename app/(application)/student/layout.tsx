import Header from "@/components/shared/student/header/header";
import Sidebar from "@/components/shared/student/sidebar";
import { Box, Flex } from "@mantine/core";
import { ReactNode } from "react";

const ApplicationLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700&display=swap');
          * { box-sizing: border-box; }
          body { margin: 0; background: #f4f6f8; }
        `}</style>

      <Flex style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Box flex={1} style={{ overflow: "auto" }}>
          <Header />
          {children}
        </Box>
      </Flex>
    </>
  );
};

export default ApplicationLayout;
