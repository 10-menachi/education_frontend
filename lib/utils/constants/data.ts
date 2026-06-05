import {
  IconAlertTriangle,
  IconBrain,
  IconChartBar,
  IconChartLine,
  IconCheck,
  IconCheckbox,
  IconClock,
  IconFileExport,
  IconFileSpreadsheet,
  IconFolderOpen,
  IconHome,
  IconMail,
  IconSettings,
  IconShieldCheck,
  IconStar,
  IconUpload,
  IconUser,
  IconUsers,
  IconUsersGroup,
} from "@tabler/icons-react";

export const student = {
  name: "Faith Wanjiku",
  reg: "CS/2021/043",
  email: "faith.wanjiku@strathmore.edu",
  department: "Computer Science — Strathmore University",
  year: "Year 3",
  overallGrade: 68,
};

export const courses: Course[] = [
  {
    id: "cs-301",
    code: "CS 301",
    name: "Database Systems",
    lecturer: "Dr. Amina Osei",
    lecturerInitials: "AO",
    cat1: { score: 12, max: 30, weight: 15 },
    cat2: { score: 15, max: 30, weight: 15 },
    exam: { score: 34, max: 70, weight: 70 },
    published: true,
    trend: "down",
    creditHours: 3,
    description:
      "Covers relational database design, SQL, normalization, transactions, and an introduction to NoSQL systems.",
    resources: [
      { label: "ER Diagram Guide", type: "pdf" },
      { label: "SQL Crash Course", type: "video" },
      { label: "PostgreSQL Docs", type: "link" },
    ],
    assessmentHistory: [
      { label: "CAT 1", score: 12, max: 30 },
      { label: "CAT 2", score: 15, max: 30 },
      { label: "Exam", score: 34, max: 70 },
    ],
  },
  {
    id: "cs-312",
    code: "CS 312",
    name: "Algorithms & Data Structures",
    lecturer: "Prof. James Kariuki",
    lecturerInitials: "JK",
    cat1: { score: 24, max: 30, weight: 15 },
    cat2: { score: 22, max: 30, weight: 15 },
    exam: { score: 55, max: 70, weight: 70 },
    published: true,
    trend: "up",
    creditHours: 4,
    description:
      "In-depth study of algorithm design paradigms, complexity analysis, sorting, graphs, and advanced data structures.",
    resources: [
      { label: "Big-O Cheat Sheet", type: "pdf" },
      { label: "Graph Algorithms Lecture", type: "video" },
      { label: "Visualgo - Algorithm Visualizer", type: "link" },
    ],
    assessmentHistory: [
      { label: "CAT 1", score: 24, max: 30 },
      { label: "CAT 2", score: 22, max: 30 },
      { label: "Exam", score: 55, max: 70 },
    ],
  },
  {
    id: "cs-325",
    code: "CS 325",
    name: "Software Engineering",
    lecturer: "Dr. Fatuma Wanjiku",
    lecturerInitials: "FW",
    cat1: { score: 27, max: 30, weight: 15 },
    cat2: { score: 25, max: 30, weight: 15 },
    exam: { score: null, max: 70, weight: 70 },
    published: false,
    trend: null,
    creditHours: 3,
    description:
      "Explores the software development lifecycle, agile methodologies, design patterns, testing strategies, and project management.",
    resources: [
      { label: "Agile Manifesto", type: "link" },
      { label: "UML Diagrams Overview", type: "pdf" },
      { label: "Clean Code Principles", type: "video" },
    ],
    assessmentHistory: [
      { label: "CAT 1", score: 27, max: 30 },
      { label: "CAT 2", score: 25, max: 30 },
    ],
  },
  {
    id: "cs-330",
    code: "CS 330",
    name: "Computer Networks",
    lecturer: "Dr. Brian Muthoni",
    lecturerInitials: "BM",
    cat1: { score: 19, max: 30, weight: 15 },
    cat2: { score: 20, max: 30, weight: 15 },
    exam: { score: 48, max: 70, weight: 70 },
    published: true,
    trend: "stable",
    creditHours: 3,
    description:
      "Examines network architecture, the OSI and TCP/IP models, routing protocols, security fundamentals, and wireless networking.",
    resources: [
      { label: "TCP/IP Reference Sheet", type: "pdf" },
      { label: "How the Internet Works", type: "video" },
      { label: "Wireshark Tutorial", type: "link" },
    ],
    assessmentHistory: [
      { label: "CAT 1", score: 19, max: 30 },
      { label: "CAT 2", score: 20, max: 30 },
      { label: "Exam", score: 48, max: 70 },
    ],
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

export const features = [
  {
    icon: IconBrain,
    title: "AI-Powered Monitoring",
    color: "#00c896",
    description:
      "A nightly cron job analyses every student's marks via the Anthropic API and delivers natural-language performance insights directly to lecturers and students — no dashboard-checking required.",
  },
  {
    icon: IconChartLine,
    title: "Custom Grading Structures",
    color: "#6366f1",
    description:
      "Define any weighting you need — CAT 1 (15%) + CAT 2 (15%) + Exam (70%) — and let the system auto-calculate weighted totals instantly with zero rounding errors.",
  },
  {
    icon: IconUsers,
    title: "Student-Facing Feedback",
    color: "#f59e0b",
    description:
      "Students receive personalised, AI-generated feedback explaining where they stand and what to focus on — cutting the endless back-and-forth over marks.",
  },
  {
    icon: IconUpload,
    title: "Bulk CSV Import",
    color: "#ec4899",
    description:
      "Enrol hundreds of students in seconds. Upload a CSV, let duplicate detection run, and have invite emails fired automatically — no IT department needed.",
  },
  {
    icon: IconFileSpreadsheet,
    title: "Instant Reports",
    color: "#14b8a6",
    description:
      "Generate class mark sheets (Excel) and individual result slips (PDF) on demand. Everything a department or student needs, one click away.",
  },
  {
    icon: IconShieldCheck,
    title: "Invite-Only & Secure",
    color: "#8b5cf6",
    description:
      "Students can't self-register. Role-based access ensures every student sees only their own marks. Data encrypted at rest. Zero institutional license required.",
  },
];

export const landingPageStats = [
  { value: "85.7%", label: "of surveyed lecturers would switch to Vibetech" },
  { value: "78.6%", label: "say mark entry is their most time-consuming task" },
  { value: "64.3%", label: "receive frequent student requests for marks" },
  { value: "35.7%", label: "still rely exclusively on Excel for grading" },
];

export const testimonials = [
  {
    quote:
      "I used to spend two hours per class just fixing formula errors in Excel. Vibetech eliminated that entirely.",
    name: "Dr. Amina Hassan",
    role: "Lecturer, Software Engineering",
    initials: "AH",
    color: "#00c896",
  },
  {
    quote:
      "My students stopped emailing me about marks. The AI feedback gives them context I never had time to provide individually.",
    name: "Prof. James Otieno",
    role: "Lecturer, Computer Networks",
    initials: "JO",
    color: "#6366f1",
  },
  {
    quote:
      "Set up my entire class — grading structure, 48 students imported, invite emails sent — in under 20 minutes.",
    name: "Dr. Kamau Njoroge",
    role: "Senior Lecturer, Computer Science",
    initials: "KN",
    color: "#f59e0b",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Create a class",
    body: "Define your grading structure — any percentage split you need. Validated to sum to 100%.",
  },
  {
    step: "02",
    title: "Enrol students",
    body: "Add students manually or bulk-import via CSV. The system sends invite emails automatically.",
  },
  {
    step: "03",
    title: "Enter & publish marks",
    body: "Enter marks individually or import them. Weighted totals calculate instantly. Publish when ready.",
  },
  {
    step: "04",
    title: "AI works overnight",
    body: "A nightly cron job analyses every student's data and sends personalised alerts to lecturers and students.",
  },
];

export const problems = [
  {
    icon: IconFileSpreadsheet,
    color: "#ef4444",
    title: "Excel is error-prone",
    body: "35.7% of lecturers use Excel exclusively. Manual formula chains break. Weighted totals get miscalculated. Students pay the price.",
  },
  {
    icon: IconClock,
    color: "#f59e0b",
    title: "Mark entry eats time",
    body: "78.6% of surveyed lecturers say entering marks is their most time-consuming task. That's hours every week that belong in the classroom.",
  },
  {
    icon: IconMail,
    color: "#8b5cf6",
    title: "Students are in the dark",
    body: "64.3% of lecturers field frequent student requests for marks. No visibility means anxiety, repeated emails, and wasted office hours.",
  },
  {
    icon: IconAlertTriangle,
    color: "#ec4899",
    title: "At-risk students go unnoticed",
    body: "Without proactive monitoring, struggling students only surface at the end of semester — too late for meaningful intervention.",
  },
];

export const departments = [
  "Computer Science",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Information Technology",
  "Mathematics",
  "Physics",
  "Business & Economics",
];
export const ranks = [
  "Assistant Lecturer",
  "Lecturer",
  "Senior Lecturer",
  "Associate Professor",
  "Professor",
];

export const steps = ["Personal", "Professional"];

export const lecturer = {
  name: "Dr. Kamau Njoroge",
  title: "Senior Lecturer — CS",
  email: "k.njoroge@strathmore.edu",
  department: "Computer Science",
  avatar: "KN",
  employeeId: "STR/LECT/2019/042",
};

export const classes = [
  {
    id: 1,
    code: "CS 301",
    name: "Database Systems",
    students: 48,
    published: 2,
    totalAssessments: 3,
    avgScore: 64.2,
    atRisk: 9,
    trend: "down",
    structure: [
      { name: "CAT 1", weight: 15 },
      { name: "CAT 2", weight: 15 },
      { name: "Final Exam", weight: 70 },
    ],
  },
  {
    id: 2,
    code: "CS 312",
    name: "Algorithms & DS",
    students: 52,
    published: 3,
    totalAssessments: 3,
    avgScore: 71.5,
    atRisk: 5,
    trend: "up",
    structure: [
      { name: "CAT 1", weight: 15 },
      { name: "CAT 2", weight: 15 },
      { name: "Final Exam", weight: 70 },
    ],
  },
  {
    id: 3,
    code: "CS 325",
    name: "Software Engineering",
    students: 39,
    published: 2,
    totalAssessments: 3,
    avgScore: 68.0,
    atRisk: 6,
    trend: "stable",
    structure: [
      { name: "CAT 1", weight: 15 },
      { name: "CAT 2", weight: 15 },
      { name: "Project", weight: 70 },
    ],
  },
];

export const atRiskStudents = [
  {
    name: "Faith Wanjiku",
    reg: "CS/2021/043",
    course: "Database Systems",
    score: 47,
    cat1: "12/30",
    cat2: "15/30",
    exam: "34/70",
    reason:
      "Consistent underperformance. Foundational gaps in normalisation & SQL.",
  },
  {
    name: "Brian Omondi",
    reg: "CS/2021/078",
    course: "Database Systems",
    score: 42,
    cat1: "10/30",
    cat2: "12/30",
    exam: "30/70",
    reason:
      "Below class average in all three components. Recommend early intervention.",
  },
  {
    name: "Cynthia Akinyi",
    reg: "CS/2021/112",
    course: "Algorithms & DS",
    score: 51,
    cat1: "16/30",
    cat2: "14/30",
    exam: "36/70",
    reason:
      "Dropped 2 points from CAT 1 to CAT 2. Revise recursion and graph traversal.",
  },
  {
    name: "Dennis Mwangi",
    reg: "CS/2021/055",
    course: "Software Engineering",
    score: 49,
    cat1: "18/30",
    cat2: "13/30",
    exam: "33/70",
    reason:
      "Significant dip in CAT 2. Engagement and attendance may be factors.",
  },
  {
    name: "Eunice Chebet",
    reg: "CS/2021/090",
    course: "Database Systems",
    score: 45,
    cat1: "11/30",
    cat2: "14/30",
    exam: "32/70",
    reason:
      "Struggling with complex joins and indexing. Peer-study group recommended.",
  },
];

export const recentActivity = [
  {
    action: "Marks published",
    detail: "CS 312 — CAT 2",
    time: "2 hrs ago",
    icon: IconCheck,
    color: "teal",
  },
  {
    action: "AI insights generated",
    detail: "CS 301 nightly analysis",
    time: "6 hrs ago",
    icon: IconBrain,
    color: "indigo",
  },
  {
    action: "9 students invited",
    detail: "CS 325 — bulk CSV import",
    time: "Yesterday",
    icon: IconMail,
    color: "blue",
  },
  {
    action: "Report exported",
    detail: "CS 312 mark sheet (Excel)",
    time: "2 days ago",
    icon: IconFileSpreadsheet,
    color: "green",
  },
  {
    action: "AI alert sent",
    detail: "5 at-risk students — CS 301",
    time: "2 days ago",
    icon: IconAlertTriangle,
    color: "orange",
  },
];

export const aiInsights = [
  {
    course: "Database Systems",
    severity: "high",
    time: "Today, 06:00 AM",
    message:
      "9 of 48 students (18.8%) are performing below 50%. Class average of 64.2 is 6 points below the departmental benchmark. Consider a revision session focusing on normalisation and transaction management before the exam window.",
  },
  {
    course: "Algorithms & DS",
    severity: "good",
    time: "Yesterday, 06:00 AM",
    message:
      "Class average improved from 67.1 (CAT 1) to 71.5 (CAT 2). Top quartile performing strongly. Monitor the bottom 5 students — they may need targeted support on dynamic programming.",
  },
];

export const lecturerNotifications = [
  {
    id: 1,
    read: false,
    title: "AI Alert — 9 Students at Risk",
    body: "CS 301 nightly analysis flagged 9 students performing below 50%. Review and send interventions.",
    time: "Today, 06:00 AM",
    icon: IconAlertTriangle,
    color: "red",
  },
  {
    id: 2,
    read: false,
    title: "CSV Import Complete",
    body: "39 students successfully imported into CS 325 Software Engineering.",
    time: "3 hrs ago",
    icon: IconCheck,
    color: "teal",
  },
  {
    id: 3,
    read: false,
    title: "AI Insights Ready",
    body: "Nightly analysis complete for all 3 classes. 2 class-level summaries available.",
    time: "6 hrs ago",
    icon: IconBrain,
    color: "indigo",
  },
  {
    id: 4,
    read: true,
    title: "Mark Sheet Export",
    body: "CS 312 Excel mark sheet was downloaded successfully.",
    time: "Yesterday",
    icon: IconFileSpreadsheet,
    color: "green",
  },
  {
    id: 5,
    read: true,
    title: "Student Alert Delivered",
    body: "5 at-risk students in CS 301 received personalised AI feedback emails.",
    time: "2 days ago",
    icon: IconMail,
    color: "blue",
  },
];

export const lecturerSearchSuggestions = [
  {
    group: "Classes",
    items: [
      {
        label: "Database Systems",
        sub: "CS 301 · 48 students · 9 at risk",
        icon: IconFolderOpen,
      },
      {
        label: "Algorithms & DS",
        sub: "CS 312 · 52 students · Improving",
        icon: IconFolderOpen,
      },
      {
        label: "Software Engineering",
        sub: "CS 325 · 39 students",
        icon: IconFolderOpen,
      },
    ],
  },
  {
    group: "Students",
    items: [
      {
        label: "Faith Wanjiku",
        sub: "CS/2021/043 · Database Systems · At Risk",
        icon: IconUser,
      },
      {
        label: "Brian Omondi",
        sub: "CS/2021/078 · Database Systems · At Risk",
        icon: IconUser,
      },
      {
        label: "Cynthia Akinyi",
        sub: "CS/2021/112 · Algorithms & DS",
        icon: IconUser,
      },
    ],
  },
  {
    group: "Quick Actions",
    items: [
      {
        label: "Import Students (CSV)",
        sub: "Bulk enrol students into a class",
        icon: IconUpload,
      },
      {
        label: "AI Insights",
        sub: "View nightly AI class analysis",
        icon: IconBrain,
      },
      {
        label: "Export Reports",
        sub: "Download mark sheets or result slips",
        icon: IconFileExport,
      },
    ],
  },
];

export const links = [
  {
    icon: IconFolderOpen,
    label: "Dashboard",
    active: true,
    href: "/lecturer/dashboard",
  },
  { icon: IconUsersGroup, label: "My Courses", href: "/lecturer/courses" },
  { icon: IconUsers, label: "Students", href: "/lecturer/students" },
  { icon: IconChartLine, label: "Analytics", href: "/lecturer/analytics" },
  {
    icon: IconBrain,
    label: "AI Insights",
    badge: "3",
    href: "/lecturer/ai-insights",
  },
  { icon: IconFileExport, label: "Reports", href: "/lecturer/reports" },
  { icon: IconSettings, label: "Settings", href: "/lecturer/settings" },
];
