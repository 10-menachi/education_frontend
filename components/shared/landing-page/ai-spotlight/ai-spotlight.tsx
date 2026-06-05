import {
  Badge,
  Box,
  Container,
  Grid,
  Group,
  Paper,
  rem,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconBrain, IconUsers } from "@tabler/icons-react";
import AISpotlightTitle from "./ai-spotlight-title";
import LecturerDigest from "./lecturer-digest";
import StudentFeedback from "./student-feedback";

export default function AISpotlight() {
  return (
    <Box
      py={100}
      style={{
        background:
          "linear-gradient(160deg, #0f172a 0%, #1e1b4b 60%, #0f172a 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(0,200,150,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
        <AISpotlightTitle />

        <Grid gap="lg" justify="center">
          <LecturerDigest />

          <StudentFeedback />
        </Grid>
      </Container>
    </Box>
  );
}
