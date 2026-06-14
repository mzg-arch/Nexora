import {
  BarChart3,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  FolderKanban,
  MessageSquareText,
  Sparkles,
  Users,
} from "lucide-react";

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export const features = [
  {
    icon: Users,
    title: "Client Management",
    description:
      "Organize client profiles, contact details, notes, and project history in one clean workspace.",
  },
  {
    icon: FolderKanban,
    title: "Project Tracking",
    description:
      "Track active projects, deadlines, progress, and deliverables without losing context.",
  },
  {
    icon: CheckCircle2,
    title: "Task Workflows",
    description:
      "Create tasks, assign priorities, monitor status, and stay on top of client work.",
  },
  {
    icon: Bot,
    title: "AI Follow-ups",
    description:
      "Generate professional follow-up messages, project updates, and reminders in seconds.",
  },
  {
    icon: MessageSquareText,
    title: "Smart Notes",
    description:
      "Keep important client conversations, meeting notes, and next steps organized.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "See your clients, projects, pending tasks, and AI activity from a modern dashboard.",
  },
];

export const steps = [
  {
    number: "01",
    title: "Add Clients",
    description:
      "Create client profiles and store important contact, project, and communication details.",
  },
  {
    number: "02",
    title: "Manage Work",
    description:
      "Track projects, tasks, deadlines, notes, and progress from one connected workspace.",
  },
  {
    number: "03",
    title: "Use AI Assistance",
    description:
      "Generate polished follow-ups, updates, and reminders based on your client context.",
  },
  {
    number: "04",
    title: "Grow Smarter",
    description:
      "Use dashboard insights to stay organized and deliver better client experiences.",
  },
];

export const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    price: "$9",
    description: "For freelancers getting organized.",
    features: [
      "Up to 10 clients",
      "Up to 5 projects",
      "Basic task management",
      "Client notes",
      "Email support",
    ],
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "$19",
    description: "For growing teams and agencies.",
    features: [
      "Unlimited clients",
      "Unlimited projects",
      "AI follow-up generator",
      "Advanced analytics",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    id: "business",
    name: "Business",
    price: "$49",
    description: "For serious client operations.",
    features: [
      "Everything in Pro",
      "Team members",
      "Custom workflows",
      "AI message templates",
      "Premium support",
    ],
    highlighted: false,
  },
];

export const stats = [
  {
    icon: BriefcaseBusiness,
    label: "Active Projects",
    value: "24",
  },
  {
    icon: Clock3,
    label: "Pending Tasks",
    value: "48",
  },
  {
    icon: Sparkles,
    label: "AI Follow-ups",
    value: "32",
  },
];