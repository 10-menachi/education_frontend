import { Box, Group, Text } from "@mantine/core";
import { IconBrain } from "@tabler/icons-react";

const Logo = () => {
  return (
    <Group gap={10}>
      <Box
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          background: "linear-gradient(135deg, #00c896, #00785d)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconBrain size={20} color="white" />
      </Box>
      <Text
        fw={800}
        fz={20}
        style={{ fontFamily: "'Sora', sans-serif", color: "#0f172a" }}
      >
        Education
      </Text>
    </Group>
  );
};

export default Logo;
