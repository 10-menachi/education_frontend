import { Box, Grid } from "@mantine/core";
import FloatingAIAlertCard from "./floating-ai-alert-card";
import MainDashboardCard from "./main-dashboard-card";
import FloatingStat from "./floating-stat";

const HeroVisual = () => {
  return (
    <Grid.Col span={{ base: 12, md: 6 }}>
      <Box style={{ position: "relative" }}>
        <FloatingAIAlertCard />

        <MainDashboardCard />

        <FloatingStat />
      </Box>
    </Grid.Col>
  );
};

export default HeroVisual;
