"use client";

import { useState } from "react";
import { Stack } from "@mantine/core";
import GradeRing from "../grade-ring";
import DashboardAvatar from "./dashboard-avatar";
import StudentLecturers from "./student-lecturers";
import Transcript from "../../modals/transcript/transcript";

export default function RightPanel() {
  const [transcriptModalOpen, setTranscriptModalOpen] = useState(false);

  return (
    <Stack gap="md">
      <DashboardAvatar setTranscriptModalOpen={setTranscriptModalOpen} />

      <GradeRing />

      <StudentLecturers />

      <Transcript
        transcriptModalOpen={transcriptModalOpen}
        setTranscriptModalOpen={setTranscriptModalOpen}
      />
    </Stack>
  );
}
