export type ItemStatus = "backlog" | "active" | "blocked" | "ready" | "done";

export type WorkItem = {
  id: string;
  title: string;
  category: string;
  owner: string;
  status: ItemStatus;
  priority: number;
  effort: number;
  friction: number;
  value: number;
  due: string;
  notes: string;
};

export type QualityCheck = {
  id: string;
  label: string;
  passed: boolean;
  weight: number;
};

export const sample: {
  repoName: string;
  title: string;
  subtitle: string;
  serviceLine: string;
  description: string;
  repositoryUrl: string;
  liveDemoUrl: string;
  theme: { accent: string; accent2: string; ink: string; soft: string; warm: string };
  items: WorkItem[];
  checks: QualityCheck[];
  deliverables: string[];
} = {
  "repoName": "foxhen-meeting-notes-action-lab",
  "title": "Meeting Notes Action Lab",
  "subtitle": "action register",
  "serviceLine": "Meeting-to-action workflow",
  "description": "Extract decisions, owners, blockers, deadlines, and executive summaries from fictional notes.",
  "repositoryUrl": "https://github.com/foxandhenllc/foxhen-meeting-notes-action-lab",
  "liveDemoUrl": "https://foxhen-meeting-notes-action-lab.vercel.app",
  "theme": {
    "accent": "#5a4d2d",
    "accent2": "#f1c65c",
    "ink": "#151107",
    "soft": "#faf4df",
    "warm": "#fff8e2"
  },
  "items": [
    {
      "id": "mee-1",
      "title": "Decision log",
      "category": "Intake",
      "owner": "Chris",
      "status": "active",
      "priority": 5,
      "effort": 2,
      "friction": 1,
      "value": 5,
      "due": "Today",
      "notes": "Sample action register work item for meeting-to-action workflow."
    },
    {
      "id": "mee-2",
      "title": "Action owner",
      "category": "Build",
      "owner": "Fox & Hen",
      "status": "backlog",
      "priority": 4,
      "effort": 4,
      "friction": 2,
      "value": 4,
      "due": "24h",
      "notes": "Sample action register work item for meeting-to-action workflow."
    },
    {
      "id": "mee-3",
      "title": "Date conflict",
      "category": "Review",
      "owner": "Buyer",
      "status": "blocked",
      "priority": 3,
      "effort": 3,
      "friction": 4,
      "value": 4,
      "due": "48h",
      "notes": "Sample action register work item for meeting-to-action workflow."
    },
    {
      "id": "mee-4",
      "title": "Blocker list",
      "category": "Export",
      "owner": "Automation",
      "status": "ready",
      "priority": 4,
      "effort": 2,
      "friction": 2,
      "value": 3,
      "due": "This week",
      "notes": "Sample action register work item for meeting-to-action workflow."
    },
    {
      "id": "mee-5",
      "title": "Exec summary",
      "category": "Intake",
      "owner": "QA",
      "status": "backlog",
      "priority": 2,
      "effort": 1,
      "friction": 1,
      "value": 3,
      "due": "Waiting",
      "notes": "Sample action register work item for meeting-to-action workflow."
    },
    {
      "id": "mee-6",
      "title": "Follow-up kit",
      "category": "Build",
      "owner": "Chris",
      "status": "done",
      "priority": 5,
      "effort": 5,
      "friction": 3,
      "value": 5,
      "due": "Next pass",
      "notes": "Sample action register work item for meeting-to-action workflow."
    }
  ],
  "checks": [
      {
          "id": "owner",
          "label": "Action owner and decision maker are clear",
          "passed": true,
          "weight": 18
      },
      {
          "id": "criteria",
          "label": "Decision/action acceptance criteria are written",
          "passed": true,
          "weight": 18
      },
      {
          "id": "blockers",
          "label": "Date conflicts and blockers are documented",
          "passed": false,
          "weight": 14
      },
      {
          "id": "handoff",
          "label": "Follow-up recap package is generated",
          "passed": false,
          "weight": 16
      },
      {
          "id": "reuse",
          "label": "Reusable meeting recap note exists",
          "passed": true,
          "weight": 12
      }
  ],
  "deliverables": [
      "Decision and action register",
      "Editable meeting item inspector",
      "Follow-up readiness checklist",
      "Exportable action recap"
  ]
};
