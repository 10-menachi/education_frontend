"use client";

import { Box } from "@mantine/core";
import LecturerAIInsightsHeader from "@/components/shared/lecturer/ai-insights/lecturer-ai-insights-header";
import LecturerAIInsightsRecommendations from "@/components/shared/lecturer/ai-insights/lecturer-ai-insights-recommendations";
import LecturerAIInsightsRiskAlerts from "@/components/shared/lecturer/ai-insights/lecturer-ai-insights-risk-alerts";
import LecturerAIInsightsTrends from "@/components/shared/lecturer/ai-insights/lecturer-ai-insights-trends";
import LecturerAIInsightsContent from "@/components/shared/lecturer/ai-insights/lecturer-ai-insights-content";

export default function LecturerAIInsightsPage() {
  return (
    <Box px={28} py={24}>
      <LecturerAIInsightsHeader />
      <LecturerAIInsightsRecommendations />
      <LecturerAIInsightsRiskAlerts />
      <LecturerAIInsightsTrends />
      <LecturerAIInsightsContent />
    </Box>
  );
}
