export const sample = {
  "repoName": "foxhen-meeting-notes-action-lab",
  "title": "Meeting Notes Action Lab",
  "subtitle": "Notes converted into accountable work",
  "serviceLine": "Meeting-to-action workflow",
  "heroTitle": "Turn messy notes into decisions, owners, and next steps.",
  "heroCopy": "A sample action lab that parses fictional meeting notes into decisions, blockers, owners, dates, and an executive handoff summary.",
  "primaryAction": "Extract actions",
  "secondaryAction": "Build summary",
  "repositoryUrl": "https://github.com/foxandhenllc/foxhen-meeting-notes-action-lab",
  "liveDemoUrl": "https://foxhen-meeting-notes-action-lab.vercel.app",
  "theme": {
    "accent": "#5a4d2d",
    "accent2": "#f1c65c",
    "ink": "#151107",
    "soft": "#faf4df",
    "warm": "#fff8e2",
    "surface": "#fffaf4",
    "muted": "#5c667a",
    "border": "rgba(7, 18, 31, 0.12)"
  },
  "metrics": [
    {
      "label": "Actions found",
      "value": "22",
      "note": "owner mapped"
    },
    {
      "label": "Open blockers",
      "value": "5",
      "note": "visible"
    },
    {
      "label": "Decision clarity",
      "value": "93%",
      "note": "+37 pts"
    }
  ],
  "stages": [
    {
      "label": "Capture",
      "detail": "Collect raw notes and separate facts, decisions, questions, and loose ideas.",
      "status": "ready",
      "owner": "Notes",
      "index": 1
    },
    {
      "label": "Extract",
      "detail": "Identify owner, verb, deadline, dependency, and evidence for each action.",
      "status": "active",
      "owner": "AI",
      "index": 2
    },
    {
      "label": "Validate",
      "detail": "Flag ambiguous owners and dates for human review.",
      "status": "waiting",
      "owner": "Chris",
      "index": 3
    },
    {
      "label": "Package",
      "detail": "Produce a clean summary and follow-up checklist.",
      "status": "queued",
      "owner": "Studio",
      "index": 4
    }
  ],
  "workItems": [
    {
      "title": "Decision log",
      "detail": "Group final choices by topic",
      "status": "ready"
    },
    {
      "title": "Action owners",
      "detail": "Assign named owners or flag gaps",
      "status": "active"
    },
    {
      "title": "Date conflicts",
      "detail": "Waiting on schedule confirmation",
      "status": "waiting"
    },
    {
      "title": "Summary memo",
      "detail": "Queued for final packaging",
      "status": "queued"
    }
  ],
  "deliverables": [
    {
      "title": "Action register",
      "detail": "Owner/date/dependency rows ready for project tracking."
    },
    {
      "title": "Decision digest",
      "detail": "A concise executive-readable summary."
    },
    {
      "title": "Follow-up kit",
      "detail": "Questions and next steps for the meeting owner."
    }
  ],
  "timeline": [
    {
      "time": "0-1 hr",
      "detail": "Normalize notes and topics"
    },
    {
      "time": "1-3 hrs",
      "detail": "Extract actions and decisions"
    },
    {
      "time": "3-5 hrs",
      "detail": "Human review and handoff pack"
    }
  ],
  "proof": [
    "A fast AI workflow setup sample with obvious ROI.",
    "Shows how automation supports, rather than replaces, follow-up.",
    "No real meetings or contacts are included."
  ]
} as const;

export type StageStatus = "ready" | "active" | "waiting" | "queued";
export type DemoStage = (typeof sample.stages)[number];
export type WorkItem = (typeof sample.workItems)[number];
