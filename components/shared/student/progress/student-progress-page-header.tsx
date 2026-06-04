import { Box, Text, Title } from "@mantine/core";

const StudentProgressPageHeader = () => {
  return (
    <Box mb="xl">
      <Title
        order={2}
        fz={26}
        fw={700}
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        Your Progress 📈
      </Title>
      <Text fz={14} c="dimmed">
        Track your academic performance and identify areas for improvement.
      </Text>
    </Box>
  );
};

export default StudentProgressPageHeader;
