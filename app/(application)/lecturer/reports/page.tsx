"use client";

import { useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Group,
  Paper,
  Progress,
  ScrollArea,
  Select,
  Stack,
  Table,
  Tabs,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconAlertTriangle,
  IconChartBar,
  IconCheck,
  IconCloudDownload,
  IconFile,
  IconFileSpreadsheet,
  IconFileText,
  IconUsers,
  IconX,
} from "@tabler/icons-react";
import { atRiskStudents, classes } from "@/lib/utils/constants/data";

// ─── Types ────────────────────────────────────────────────────────────────────
type Scope = "all" | string; // "all" or a class id
type ReportType =
  | "marksheet"
  | "result-slips"
  | "at-risk"
  | "performance-summary"
  | "assessment-breakdown";

// ─── Helpers ─────────────────────────────────────────────────────────────────
function gradeColor(score: number) {
  if (score >= 70) return "teal";
  if (score >= 60) return "blue";
  if (score >= 50) return "yellow";
  if (score >= 40) return "orange";
  return "red";
}

function gradeLabel(score: number) {
  if (score >= 70) return "A";
  if (score >= 60) return "B";
  if (score >= 50) return "C";
  if (score >= 40) return "D";
  return "E";
}

// ─── Report definitions ───────────────────────────────────────────────────────
const reportTypes: {
  id: ReportType;
  title: string;
  description: string;
  icon: React.FC<any>;
  color: string;
  format: string;
  scopeSupport: "both" | "class-only" | "all-only";
}[] = [
  {
    id: "marksheet",
    title: "Class Mark Sheet",
    description:
      "Full mark sheet with CAT 1, CAT 2, exam scores, weighted totals, and grade for every student.",
    icon: IconFileSpreadsheet,
    color: "teal",
    format: "Excel (.xlsx)",
    scopeSupport: "class-only",
  },
  {
    id: "result-slips",
    title: "Individual Result Slips",
    description:
      "One-page PDF result slip per student showing their scores, grade, and AI-generated feedback.",
    icon: IconFile,
    color: "indigo",
    format: "PDF (.pdf)",
    scopeSupport: "class-only",
  },
  {
    id: "at-risk",
    title: "At-Risk Student Report",
    description:
      "Detailed breakdown of all flagged students with scores, AI notes, and recommended interventions.",
    icon: IconAlertTriangle,
    color: "red",
    format: "PDF (.pdf)",
    scopeSupport: "both",
  },
  {
    id: "performance-summary",
    title: "Class Performance Summary",
    description:
      "High-level summary of class averages, grade distribution, trends, and pass/fail rates.",
    icon: IconChartBar,
    color: "blue",
    format: "PDF (.pdf)",
    scopeSupport: "both",
  },
  {
    id: "assessment-breakdown",
    title: "Assessment Breakdown",
    description:
      "Side-by-side comparison of CAT 1, CAT 2, and exam performance with per-component averages.",
    icon: IconFileText,
    color: "grape",
    format: "Excel (.xlsx)",
    scopeSupport: "both",
  },
];

// ─── Preview panels ───────────────────────────────────────────────────────────
function PreviewMarkSheet({ classId }: { classId: string }) {
  const cls = classes.find((c) => String(c.id) === classId) ?? classes[0];
  const students = atRiskStudents.filter((s) =>
    s.course
      .toLowerCase()
      .includes(cls.name.toLowerCase().split(" ")[0].toLowerCase()),
  );
  // pad with mock rows if needed
  const rows = [
    ...students,
    ...Array.from({ length: Math.max(0, 4 - students.length) }, (_, i) => ({
      name: ["Alice Muthoni", "George Oduya", "Sandra Kibet", "Tom Njeru"][i],
      reg: `CS/2021/0${80 + i}`,
      course: cls.name,
      score: [72, 65, 58, 78][i],
      cat1: [`${[22, 18, 17, 24][i]}/30`],
      cat2: [`${[20, 16, 15, 22][i]}/30`],
      exam: [`${[50, 45, 38, 52][i]}/70`],
      reason: "",
    })),
  ];

  return (
    <Stack gap="md">
      <Box>
        <Text fz={13} fw={700} c="dark.8" mb={2}>
          {cls.code} — {cls.name}
        </Text>
        <Text fz={11} c="dimmed">
          Mark Sheet Preview · {cls.students} students enrolled
        </Text>
      </Box>
      <ScrollArea>
        <Table highlightOnHover style={{ minWidth: 500, fontSize: 12 }}>
          <Table.Thead style={{ background: "#f8fafc" }}>
            <Table.Tr>
              {[
                "Student",
                "Reg No.",
                "CAT 1",
                "CAT 2",
                "Exam",
                "Total",
                "Grade",
              ].map((h) => (
                <Table.Th
                  key={h}
                  style={{
                    fontSize: 10,
                    color: "#64748b",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {h}
                </Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {rows.map((s, i) => (
              <Table.Tr key={i}>
                <Table.Td>
                  <Group gap={8}>
                    <Avatar
                      size={24}
                      radius="xl"
                      color={gradeColor(s.score)}
                      fz={10}
                    >
                      {s.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </Avatar>
                    <Text fz={12} fw={500}>
                      {s.name}
                    </Text>
                  </Group>
                </Table.Td>
                <Table.Td>
                  <Text fz={11} c="dimmed">
                    {s.reg}
                  </Text>
                </Table.Td>
                <Table.Td>
                  {Array.isArray(s.cat1) ? s.cat1[0] : s.cat1}
                </Table.Td>
                <Table.Td>
                  {Array.isArray(s.cat2) ? s.cat2[0] : s.cat2}
                </Table.Td>
                <Table.Td>
                  {Array.isArray(s.exam) ? s.exam[0] : s.exam}
                </Table.Td>
                <Table.Td>
                  <Text fw={700} fz={12} c={`${gradeColor(s.score)}.6`}>
                    {s.score}/100
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Badge size="sm" color={gradeColor(s.score)} variant="light">
                    {gradeLabel(s.score)}
                  </Badge>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </ScrollArea>
      <Text fz={10} c="dimmed" ta="center">
        Showing {rows.length} of {cls.students} students · Full export includes
        all
      </Text>
    </Stack>
  );
}

function PreviewAtRisk({ scope }: { scope: Scope }) {
  const students =
    scope === "all"
      ? atRiskStudents
      : atRiskStudents.filter((s) => {
          const cls = classes.find((c) => String(c.id) === scope);
          return (
            cls &&
            s.course
              .toLowerCase()
              .includes(cls.name.toLowerCase().split(" ")[0].toLowerCase())
          );
        });

  return (
    <Stack gap="md">
      <Box>
        <Text fz={13} fw={700} c="dark.8" mb={2}>
          At-Risk Student Report
        </Text>
        <Text fz={11} c="dimmed">
          {students.length} students flagged ·{" "}
          {scope === "all"
            ? "All classes"
            : classes.find((c) => String(c.id) === scope)?.name}
        </Text>
      </Box>
      <Stack gap="sm">
        {students.map((s, i) => (
          <Box
            key={i}
            p="sm"
            style={{
              background: "#fff5f5",
              borderRadius: 10,
              border: "1px solid #fecdd3",
            }}
          >
            <Group justify="space-between" mb={6}>
              <Group gap={8}>
                <Avatar size={28} radius="xl" color="red" fz={10}>
                  {s.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </Avatar>
                <Box>
                  <Text fz={12} fw={700}>
                    {s.name}
                  </Text>
                  <Text fz={10} c="dimmed">
                    {s.reg} · {s.course}
                  </Text>
                </Box>
              </Group>
              <Badge size="sm" color="red" variant="filled">
                {s.score}/100
              </Badge>
            </Group>
            <Text fz={11} c="dimmed" lh={1.6}>
              {s.reason}
            </Text>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}

function PreviewPerformanceSummary({ scope }: { scope: Scope }) {
  const selectedClasses =
    scope === "all" ? classes : classes.filter((c) => String(c.id) === scope);

  return (
    <Stack gap="md">
      <Box>
        <Text fz={13} fw={700} c="dark.8" mb={2}>
          Performance Summary
        </Text>
        <Text fz={11} c="dimmed">
          {scope === "all" ? "All classes" : selectedClasses[0]?.name}
        </Text>
      </Box>
      {selectedClasses.map((cls) => (
        <Box key={cls.id}>
          <Group justify="space-between" mb={6}>
            <Group gap={6}>
              <Badge size="xs" color="indigo" variant="light">
                {cls.code}
              </Badge>
              <Text fz={12} fw={600}>
                {cls.name}
              </Text>
            </Group>
            <Text fz={13} fw={800} c={`${gradeColor(cls.avgScore)}.6`}>
              {cls.avgScore}/100
            </Text>
          </Group>
          <Progress
            value={cls.avgScore}
            color={gradeColor(cls.avgScore)}
            size="md"
            radius="xl"
            mb={6}
          />
          <Group gap={16}>
            <Text fz={10} c="dimmed">
              {cls.students} students
            </Text>
            <Text fz={10} c="red.5">
              {cls.atRisk} at risk
            </Text>
            <Text fz={10} c="dimmed">
              {cls.published}/{cls.totalAssessments} published
            </Text>
          </Group>
          {scope === "all" && <Divider mt="sm" />}
        </Box>
      ))}
    </Stack>
  );
}

function PreviewAssessmentBreakdown({ scope }: { scope: Scope }) {
  const selectedClasses =
    scope === "all" ? classes : classes.filter((c) => String(c.id) === scope);

  return (
    <Stack gap="md">
      <Box>
        <Text fz={13} fw={700} c="dark.8" mb={2}>
          Assessment Breakdown
        </Text>
        <Text fz={11} c="dimmed">
          CAT 1 · CAT 2 · Exam comparison
        </Text>
      </Box>
      {selectedClasses.map((cls) => (
        <Box key={cls.id}>
          {scope === "all" && (
            <Group gap={6} mb={8}>
              <Badge size="xs" color="indigo" variant="light">
                {cls.code}
              </Badge>
              <Text fz={12} fw={600}>
                {cls.name}
              </Text>
            </Group>
          )}
          <Stack gap={8}>
            {cls.structure.map((s, i) => {
              const mockAvg = [62, 68, 65][i] ?? 60;
              return (
                <Box key={s.name}>
                  <Group justify="space-between" mb={4}>
                    <Text fz={11} fw={600}>
                      {s.name}{" "}
                      <Text span c="dimmed">
                        ({s.weight}%)
                      </Text>
                    </Text>
                    <Text fz={11} fw={700}>
                      {mockAvg}% avg
                    </Text>
                  </Group>
                  <Progress
                    value={mockAvg}
                    color="indigo"
                    size="sm"
                    radius="xl"
                  />
                </Box>
              );
            })}
          </Stack>
          {scope === "all" && <Divider mt="sm" />}
        </Box>
      ))}
    </Stack>
  );
}

function PreviewResultSlips({ classId }: { classId: string }) {
  const cls = classes.find((c) => String(c.id) === classId) ?? classes[0];
  return (
    <Stack gap="md">
      <Box>
        <Text fz={13} fw={700} c="dark.8" mb={2}>
          Result Slips — {cls.code}
        </Text>
        <Text fz={11} c="dimmed">
          Individual PDF per student · {cls.students} slips total
        </Text>
      </Box>
      <Box
        p="md"
        style={{
          background: "#f8fafc",
          borderRadius: 12,
          border: "1px solid #e2e8f0",
        }}
      >
        <Text fz={11} fw={700} c="dark.7" mb={6} ta="center">
          SAMPLE RESULT SLIP
        </Text>
        <Divider mb={10} />
        <Group justify="space-between" mb={6}>
          <Text fz={11} c="dimmed">
            Student
          </Text>
          <Text fz={11} fw={600}>
            Faith Wanjiku
          </Text>
        </Group>
        <Group justify="space-between" mb={6}>
          <Text fz={11} c="dimmed">
            Reg No.
          </Text>
          <Text fz={11} fw={600}>
            CS/2021/043
          </Text>
        </Group>
        <Group justify="space-between" mb={6}>
          <Text fz={11} c="dimmed">
            Course
          </Text>
          <Text fz={11} fw={600}>
            {cls.code} — {cls.name}
          </Text>
        </Group>
        <Divider my={10} />
        {[
          { label: "CAT 1 (15%)", score: "12/30" },
          { label: "CAT 2 (15%)", score: "15/30" },
          { label: "Exam (70%)", score: "34/70" },
        ].map((r) => (
          <Group key={r.label} justify="space-between" mb={4}>
            <Text fz={11} c="dimmed">
              {r.label}
            </Text>
            <Text fz={11} fw={600}>
              {r.score}
            </Text>
          </Group>
        ))}
        <Divider my={10} />
        <Group justify="space-between">
          <Text fz={12} fw={700}>
            Total
          </Text>
          <Badge color="red" size="md">
            47/100 · D
          </Badge>
        </Group>
        <Box mt={10} p={8} style={{ background: "#eef2ff", borderRadius: 8 }}>
          <Text fz={10} c="indigo.7" lh={1.6}>
            <Text span fw={700}>
              AI Feedback:{" "}
            </Text>
            Consistent underperformance across all components. Focus on SQL
            optimisation and normalisation before the resit window.
          </Text>
        </Box>
      </Box>
    </Stack>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function LecturerReportsPage() {
  const [scope, setScope] = useState<Scope>("all");
  const [selectedReport, setSelectedReport] = useState<ReportType | null>(null);
  const [downloading, setDownloading] = useState(false);

  const selectedReportDef = reportTypes.find((r) => r.id === selectedReport);

  const scopedReports = reportTypes.filter((r) => {
    if (scope === "all") return r.scopeSupport !== "class-only";
    return true;
  });

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 1800);
  };

  const classOptions = [
    { value: "all", label: "All Classes" },
    ...classes.map((c) => ({
      value: String(c.id),
      label: `${c.code} — ${c.name}`,
    })),
  ];

  return (
    <Box px={28} py={24}>
      {/* ── Header ── */}
      <Flex justify="space-between" align="flex-start" mb="xl">
        <Box>
          <Group gap={10} mb={6}>
            <ThemeIcon
              size={36}
              radius="md"
              variant="filled"
              style={{
                background: "linear-gradient(135deg, #6366f1, #14b8a6)",
              }}
            >
              <IconFileText size={18} color="white" />
            </ThemeIcon>
            <Box>
              <Title order={2} fz={22} fw={800} c="dark.9" lh={1.1}>
                Reports
              </Title>
              <Text fz={11} c="dimmed" mt={2}>
                Generate and download specific reports for your classes
              </Text>
            </Box>
          </Group>
        </Box>

        {/* Scope selector */}
        <Select
          data={classOptions}
          value={scope}
          onChange={(v) => {
            setScope(v ?? "all");
            setSelectedReport(null);
          }}
          radius="xl"
          size="sm"
          style={{ width: 240 }}
          leftSection={<IconUsers size={14} />}
        />
      </Flex>

      <Grid gap="lg">
        {/* ── Left: Report list ── */}
        <Grid.Col span={selectedReport ? 5 : 12}>
          <Stack gap="sm">
            {scopedReports.map((report) => {
              const isSelected = selectedReport === report.id;
              const isDisabled =
                scope === "all" && report.scopeSupport === "class-only";

              return (
                <Paper
                  key={report.id}
                  radius="lg"
                  p="lg"
                  shadow="sm"
                  style={{
                    cursor: isDisabled ? "not-allowed" : "pointer",
                    border: isSelected
                      ? `2px solid var(--mantine-color-${report.color}-4)`
                      : "2px solid transparent",
                    background: isSelected
                      ? `var(--mantine-color-${report.color}-0)`
                      : "#fff",
                    opacity: isDisabled ? 0.5 : 1,
                    transition: "all 0.15s ease",
                  }}
                  onClick={() => !isDisabled && setSelectedReport(report.id)}
                >
                  <Flex justify="space-between" align="flex-start">
                    <Group gap={14} align="flex-start">
                      <ThemeIcon
                        size={40}
                        radius="md"
                        color={report.color}
                        variant="light"
                        style={{ flexShrink: 0 }}
                      >
                        <report.icon size={20} />
                      </ThemeIcon>
                      <Box>
                        <Group gap={8} mb={4}>
                          <Text fz={13} fw={700} c="dark.8">
                            {report.title}
                          </Text>
                          <Badge
                            size="xs"
                            color={report.color}
                            variant="outline"
                            radius="xl"
                          >
                            {report.format}
                          </Badge>
                          {report.scopeSupport === "class-only" && (
                            <Badge
                              size="xs"
                              color="gray"
                              variant="outline"
                              radius="xl"
                            >
                              Per class only
                            </Badge>
                          )}
                        </Group>
                        <Text fz={12} c="dimmed" lh={1.6}>
                          {report.description}
                        </Text>
                      </Box>
                    </Group>
                    {isSelected && (
                      <ThemeIcon
                        size={20}
                        radius="xl"
                        color={report.color}
                        variant="filled"
                        style={{ flexShrink: 0 }}
                      >
                        <IconCheck size={11} />
                      </ThemeIcon>
                    )}
                  </Flex>
                </Paper>
              );
            })}
          </Stack>
        </Grid.Col>

        {/* ── Right: Preview panel ── */}
        {selectedReport && selectedReportDef && (
          <Grid.Col span={7}>
            <Paper
              radius="lg"
              shadow="sm"
              style={{ position: "sticky", top: 80, overflow: "hidden" }}
            >
              {/* Preview header */}
              <Flex
                align="center"
                justify="space-between"
                px="lg"
                py="md"
                style={{ borderBottom: "1px solid #f1f5f9" }}
              >
                <Group gap={8}>
                  <ThemeIcon
                    size={28}
                    radius="md"
                    color={selectedReportDef.color}
                    variant="light"
                  >
                    <selectedReportDef.icon size={14} />
                  </ThemeIcon>
                  <Box>
                    <Text fz={13} fw={700} c="dark.8">
                      {selectedReportDef.title}
                    </Text>
                    <Text fz={11} c="dimmed">
                      {scope === "all"
                        ? "All classes"
                        : classes.find((c) => String(c.id) === scope)?.name}
                      {" · "}
                      {selectedReportDef.format}
                    </Text>
                  </Box>
                </Group>
                <Group gap={8}>
                  <Button
                    size="xs"
                    radius="xl"
                    color={selectedReportDef.color}
                    leftSection={<IconCloudDownload size={13} />}
                    loading={downloading}
                    onClick={handleDownload}
                  >
                    {downloading ? "Generating…" : "Download"}
                  </Button>
                  <Button
                    size="xs"
                    variant="subtle"
                    color="gray"
                    radius="xl"
                    onClick={() => setSelectedReport(null)}
                  >
                    <IconX size={13} />
                  </Button>
                </Group>
              </Flex>

              {/* Preview content */}
              <ScrollArea h={520} p="lg">
                {selectedReport === "marksheet" && (
                  <PreviewMarkSheet classId={scope === "all" ? "1" : scope} />
                )}
                {selectedReport === "result-slips" && (
                  <PreviewResultSlips classId={scope === "all" ? "1" : scope} />
                )}
                {selectedReport === "at-risk" && (
                  <PreviewAtRisk scope={scope} />
                )}
                {selectedReport === "performance-summary" && (
                  <PreviewPerformanceSummary scope={scope} />
                )}
                {selectedReport === "assessment-breakdown" && (
                  <PreviewAssessmentBreakdown scope={scope} />
                )}
              </ScrollArea>
            </Paper>
          </Grid.Col>
        )}
      </Grid>
    </Box>
  );
}
