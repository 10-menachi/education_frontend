import { Box, Container, Grid } from "@mantine/core";
import HeroContent from "./hero-content";
import HeroVisual from "./hero-visual/hero-visual";

export default function Hero() {
  return (
    <Box
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(160deg, #f0fdf9 0%, #e6faf5 30%, #fafffe 60%, #f8fafc 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: -120,
          right: -100,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,200,150,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Box
        style={{
          position: "absolute",
          bottom: -80,
          left: -80,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container size="xl" py={160} style={{ position: "relative", zIndex: 1 }}>
        <Grid gap={60} align="center">
          <HeroContent />

          <HeroVisual />
        </Grid>
      </Container>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </Box>
  );
}
