import { createTheme, rem } from "@mantine/core";
import {
  IconAlertTriangle,
  IconBrain,
  IconChartBar,
  IconChartLine,
  IconCheck,
  IconCheckbox,
  IconClock,
  IconFolderOpen,
  IconHome,
  IconSettings,
  IconStar,
} from "@tabler/icons-react";

export const theme = createTheme({
  primaryColor: "teal",
  fontFamily: "'DM Sans', sans-serif",
  headings: { fontFamily: "'Sora', sans-serif" },
  colors: {
    teal: [
      "#e6faf5",
      "#b3f0e0",
      "#80e5cb",
      "#4ddab6",
      "#1acfa1",
      "#00c896",
      "#00a07a",
      "#00785d",
      "#005041",
      "#002820",
    ],
    amber: [
      "#fff8e1",
      "#ffecb3",
      "#ffe082",
      "#ffd54f",
      "#ffca28",
      "#ffc107",
      "#ffb300",
      "#ffa000",
      "#ff8f00",
      "#ff6f00",
    ],
  },
  radius: { md: rem(12), lg: rem(16), xl: rem(24) },
  shadows: {
    sm: "0 1px 4px rgba(0,0,0,0.06)",
    md: "0 4px 16px rgba(0,0,0,0.08)",
    lg: "0 8px 32px rgba(0,0,0,0.10)",
  },
});

export const student = {
  name: "Faith Wanjiku",
  reg: "CS/2021/043",
  email: "faith.wanjiku@strathmore.edu",
  department: "Computer Science — Strathmore University",
  year: "Year 3",
  overallGrade: 68,
};

export const courses = [
  {
    code: "CS 301",
    name: "Database Systems",
    cat1: { score: 12, max: 30, weight: 15 },
    cat2: { score: 15, max: 30, weight: 15 },
    exam: { score: 34, max: 70, weight: 70 },
    published: true,
    avg: 64,
    trend: "down",
  },
  {
    code: "CS 312",
    name: "Algorithms & Data Structures",
    cat1: { score: 24, max: 30, weight: 15 },
    cat2: { score: 22, max: 30, weight: 15 },
    exam: { score: 55, max: 70, weight: 70 },
    published: true,
    avg: 78,
    trend: "up",
  },
  {
    code: "CS 325",
    name: "Software Engineering",
    cat1: { score: 27, max: 30, weight: 15 },
    cat2: { score: 25, max: 30, weight: 15 },
    exam: { score: null, max: 70, weight: 70 },
    published: false,
    avg: null,
    trend: null,
  },
  {
    code: "CS 330",
    name: "Computer Networks",
    cat1: { score: 19, max: 30, weight: 15 },
    cat2: { score: 20, max: 30, weight: 15 },
    exam: { score: 48, max: 70, weight: 70 },
    published: true,
    avg: 72,
    trend: "stable",
  },
];

export const aiAlerts = [
  {
    course: "Database Systems",
    severity: "high",
    time: "Today, 06:00 AM",
    message:
      "Your scores on CAT 1 (12/30) and CAT 2 (15/30) are consistently below the class averages of 18.4 and 20.1. Focus on database normalisation and SQL query optimisation before the exam resit window.",
  },
  {
    course: "Algorithms & Data Structures",
    severity: "good",
    time: "Yesterday, 06:00 AM",
    message:
      "Strong performance! Your CAT 2 improved by 8 points over CAT 1. Keep up revision on dynamic programming — it accounts for ~30% of past exam papers.",
  },
];

export const upcomingAssessments = [
  { course: "CS 325", name: "Final Exam", date: "28 May 2026", time: "09:00" },
  {
    course: "CS 330",
    name: "CAT 3 (Bonus)",
    date: "22 May 2026",
    time: "14:00",
  },
  {
    course: "CS 301",
    name: "Resit — CAT 2",
    date: "20 May 2026",
    time: "11:00",
  },
];

export const notifications = [
  {
    id: 1,
    type: "alert",
    read: false,
    title: "AI Alert — Database Systems",
    body: "You're 17 points below the class average on your exam. Recommended focus: SQL optimisation.",
    time: "2 hrs ago",
    icon: IconAlertTriangle,
    color: "red",
  },
  {
    id: 2,
    type: "result",
    read: false,
    title: "Results Published — CS 312",
    body: "Dr. Njoroge has published CAT 2 marks. Your score: 22/30.",
    time: "5 hrs ago",
    icon: IconCheck,
    color: "teal",
  },
  {
    id: 3,
    type: "alert",
    read: true,
    title: "AI Alert — Algorithms & DS",
    body: "Great improvement! CAT 2 up by 8 points. Keep up the momentum.",
    time: "Yesterday",
    icon: IconBrain,
    color: "indigo",
  },
  {
    id: 4,
    type: "info",
    read: true,
    title: "Upcoming: CS 325 Final Exam",
    body: "Reminder — your final exam is on 28 May 2026 at 09:00.",
    time: "2 days ago",
    icon: IconClock,
    color: "blue",
  },
];

export const searchSuggestions = [
  {
    group: "Courses",
    items: [
      {
        label: "Database Systems",
        sub: "CS 301 · 3 assessments",
        icon: IconFolderOpen,
      },
      {
        label: "Algorithms & Data Structures",
        sub: "CS 312 · 3 assessments",
        icon: IconFolderOpen,
      },
      {
        label: "Software Engineering",
        sub: "CS 325 · Exam pending",
        icon: IconFolderOpen,
      },
      {
        label: "Computer Networks",
        sub: "CS 330 · Published",
        icon: IconFolderOpen,
      },
    ],
  },
  {
    group: "Quick Links",
    items: [
      { label: "My AI Insights", sub: "2 new alerts today", icon: IconBrain },
      {
        label: "Performance Trends",
        sub: "View progress charts",
        icon: IconChartLine,
      },
      {
        label: "Account Settings",
        sub: "Profile & password",
        icon: IconSettings,
      },
    ],
  },
];

export const studentSidebarLinks = [
  {
    icon: IconHome,
    label: "Dashboard",
    active: true,
    link: "/student/dashboard",
  },
  { icon: IconFolderOpen, label: "My Courses", link: "/student/courses" },
  { icon: IconChartLine, label: "Progress", link: "/student/progress" },
  { icon: IconBrain, label: "AI Insights", link: "/student/ai-insights" },
  { icon: IconStar, label: "Favourites", link: "/student/favourites" },
  { icon: IconSettings, label: "Settings", link: "/student/settings" },
];

export const stats = [
  {
    label: "Overall Average",
    value: `${student.overallGrade}/100`,
    sub: "Across 4 units",
    icon: IconChartBar,
    color: "teal",
  },
  {
    label: "Enrolled Units",
    value: "4",
    sub: "Sem 1, 2025/26",
    icon: IconFolderOpen,
    color: "blue",
  },
  {
    label: "AI Alerts",
    value: "2",
    sub: "Since last night",
    icon: IconBrain,
    color: "amber",
  },
  {
    label: "Published Results",
    value: "3 / 4",
    sub: "1 pending",
    icon: IconCheckbox,
    color: "grape",
  },
];

export const lecturers = [
  {
    name: "Dr. Kamau Njoroge",
    unit: "Database Systems, Algorithms",
    initials: "KN",
  },
  { name: "Ms. Amina Hassan", unit: "Software Engineering", initials: "AH" },
  { name: "Prof. James Otieno", unit: "Computer Networks", initials: "JO" },
];
